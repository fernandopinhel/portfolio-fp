/**
 * api/contact.js — Servidor de formulário de contato
 *
 * Fixes (maio/2026):
 *   - dotenv carregado com path absoluto (funciona rodando da raiz ou de /api)
 *   - tls.family: 4 → força IPv4, corrige ECONNREFUSED ::1:465 no Node 18+/Windows
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv            from 'dotenv';
/*import 'dotenv/config';*/

// Path absoluto para api/.env — funciona independente do cwd
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

import express    from 'express';
import nodemailer from 'nodemailer';
import cors       from 'cors';
import helmet     from 'helmet';
import rateLimit  from 'express-rate-limit';

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Headers de segurança ─────────────────────────────────────────
app.use(helmet());

// ── CORS ─────────────────────────────────────────────────────────
const allowed = [
  'https://fernandopinhel.com.br',
  'https://www.fernandopinhel.com.br',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowed.includes(origin)) return cb(null, true);
    cb(new Error('CORS: origem não permitida'));
  },
  methods: ['POST', 'OPTIONS'],
}));

// ── Body parser ──────────────────────────────────────────────────
app.use(express.json({ limit: '16kb' }));

// ── Rate limit: 5 req / IP / 15 min ─────────────────────────────
app.use('/api/contact', rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders:   false,
  message: { ok: false, message: 'Muitas tentativas. Aguarde 15 minutos.' },
}));

// ── Transporte SMTP ──────────────────────────────────────────────
// tls.family: 4 → CRÍTICO no Node 18+/Windows
// O Node resolve hostnames para IPv6 (::1) por padrão, mas a HostGator
// só aceita SMTP em IPv4. Sem isso: ECONNREFUSED ::1:465
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true', // true para 465, false para 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  family: 4, // Mantém isso para evitar o erro ::1 anterior
  connectionTimeout: 20000, // Aumenta o tempo de espera para 20 segundos
  greetingTimeout: 20000,
  tls: {
    rejectUnauthorized: false // Ajuda se houver bloqueio de certificado no roteador
  }
});

// Verifica SMTP ao iniciar — avisa rápido se .env estiver errado
transporter.verify()
  .then(() => {
    console.log('[SMTP] ✓ Conexão verificada');
    console.log(`[SMTP]   Conta: ${process.env.SMTP_USER}`);
  })
  .catch(err => {
    console.warn('[SMTP] ✗ Falha na verificação:', err.message);
    console.warn('[SMTP]   Verifique api/.env');
  });

// ── Helpers ──────────────────────────────────────────────────────
const clean   = (v = '') => String(v).trim().replace(/[<>]/g, '').slice(0, 2000);
const isEmail = (v = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// ── POST /api/contact ────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const name    = clean(req.body?.name);
  const email   = clean(req.body?.email);
  const message = clean(req.body?.message);

  if (!name || !email || !message)
    return res.status(400).json({ ok: false, message: 'Todos os campos são obrigatórios.' });
  if (!isEmail(email))
    return res.status(400).json({ ok: false, message: 'E-mail inválido.' });
  if (message.length < 10)
    return res.status(400).json({ ok: false, message: 'Mensagem muito curta.' });

  // E-mail para Fernando (replyTo = e-mail do visitante)
  // SMTP_TO permite separar remetente (Gmail/relay) do destinatário real
  const DEST = process.env.SMTP_TO || process.env.SMTP_USER;
  const toOwner = {
    from:    `"Portfólio Fernando Pinhel" <${process.env.SMTP_USER}>`,
    to:      DEST,
    replyTo: email,
    subject: `[Portfólio] Nova mensagem de ${name}`,
    text: `Nome: ${name}\nE-mail: ${email}\n\n${message}\n\n---\nEnviado via fernandopinhel.com.br`,
    html: `
<div style="font-family:monospace;max-width:600px;padding:24px;background:#0F0F0F;color:#EDE9E3;border-radius:12px">
  <p style="color:#C8FF00;font-size:11px;letter-spacing:.12em;text-transform:uppercase;margin:0 0 20px">
    // nova mensagem — portfólio
  </p>
  <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
    <tr>
      <td style="padding:8px 0;color:#888;font-size:12px;width:70px">Nome</td>
      <td style="padding:8px 0;font-size:13px">${name}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;color:#888;font-size:12px">E-mail</td>
      <td style="padding:8px 0;font-size:13px">
        <a href="mailto:${email}" style="color:#C8FF00">${email}</a>
      </td>
    </tr>
  </table>
  <div style="background:rgba(237,233,227,.06);border:1px solid rgba(237,233,227,.12);border-radius:8px;padding:16px;font-size:13px;line-height:1.8;white-space:pre-wrap">${message}</div>
  <p style="color:#555;font-size:11px;margin-top:20px">Enviado via fernandopinhel.com.br</p>
</div>`,
  };

  // Confirmação para o visitante
  const toVisitor = {
    from:    `"Fernando Pinhel" <${process.env.SMTP_USER}>`,
    to:      email,
    subject: 'Recebi sua mensagem — Fernando Pinhel',
    text: `Olá, ${name}!\n\nRecebi sua mensagem e responderei em breve.\n\nhttps://fernandopinhel.com.br\n\n—\nFernando Pinhel · Product Designer`,
  };

  try {
    await transporter.sendMail(toOwner);
    await transporter.sendMail(toVisitor);
    console.log(`[SMTP] ✓ Enviado por: ${email}`);
    return res.status(200).json({ ok: true, message: 'Mensagem enviada com sucesso.' });
  } catch (err) {
    console.error('[SMTP] ✗ Erro ao enviar:', err.message);
    return res.status(500).json({ ok: false, message: 'Falha ao enviar. Tente novamente mais tarde.' });
  }
});

// ── Health check ─────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, smtp: !!process.env.SMTP_USER, ts: new Date().toISOString() });
});

// ── Start ─────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[API] Servidor em http://localhost:${PORT}`);
});