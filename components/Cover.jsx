'use client';
import { Mail } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';
import { tanggalWIB } from '@/lib/utils';
import SakelarMusik from './SakelarMusik';

// Ornamen botani sudut (line-art sederhana).
function Sprig({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M10 90 C 35 70, 45 45, 50 12" strokeLinecap="round" />
      {[22, 34, 46, 58, 70].map((y, i) => (
        <g key={i}>
          <path d={`M${48 - i * 1.5} ${y} C ${30 - i * 2} ${y - 6}, ${24 - i * 2} ${y + 2}, ${20 - i * 2} ${y + 8}`} strokeLinecap="round" />
          <path d={`M${50 + i * 1.5} ${y + 4} C ${68 + i * 2} ${y - 2}, ${74 + i * 2} ${y + 6}, ${78 + i * 2} ${y + 12}`} strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

// Sampul amplop pusaka dengan segel lilin. Urutannya mengikuti amplop sungguhan:
// identitas di bawah lipatan, segel di tengah, nama tamu di bagian alamat.
export default function Cover({ keluar, onOpen, onSelesai, musik, onMusik }) {
  const guest = useGuestName();
  const { couple, opening, mainDate } = config;
  const tanggal = tanggalWIB(mainDate, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section
      data-sampul
      aria-label="Sampul undangan"
      className={`fixed inset-0 z-50 overflow-y-auto bg-cream text-ink ${keluar ? 'sampul-keluar' : ''}`}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === 'sampul-keluar') onSelesai();
      }}
    >
      {/* Ornamen botani */}
      <Sprig className="pointer-events-none absolute left-2 top-2 h-28 w-28 text-rose-deep/25 sm:h-36 sm:w-36" />
      <Sprig className="pointer-events-none absolute bottom-2 right-2 h-24 w-24 rotate-180 text-rose-deep/20 sm:h-36 sm:w-36" />

      {/* Bingkai amplop ganda */}
      <div className="pointer-events-none fixed inset-4 border border-gold/30" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-[22px] border border-gold/20" aria-hidden="true" />

      {/* Lipatan amplop */}
      <svg className="pointer-events-none absolute left-0 top-0 h-[38%] w-full text-blush" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M0,0 L100,0 L50,100 Z" fill="currentColor" opacity="0.75" />
        <path d="M0,0 L50,100 L100,0" fill="none" stroke="var(--color-gold)" strokeOpacity="0.35" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="absolute right-7 top-7 z-20 sm:right-9 sm:top-9">
        <SakelarMusik nyala={musik} onUbah={onMusik} className="rounded-full bg-cream/80 px-3 text-xs font-medium text-rose-deep backdrop-blur-sm hover:bg-cream" />
      </div>

      <div className="relative z-10 flex min-h-full flex-col items-center justify-between gap-10 px-8 pb-14 pt-24 text-center sm:pt-20">
        {/* Atas: identitas (di bawah lipatan) */}
        <div className="w-full max-w-sm">
          <p className="masuk text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep" style={{ '--tunda': '0.1s' }}>{opening.greeting}</p>
          <h1 className="masuk-skala mt-4 break-words font-display text-5xl font-medium leading-tight text-rose-deep sm:text-6xl">
            {couple.groom.name} <span className="font-script text-[0.8em] text-[#8f6b34]">&amp;</span> {couple.bride.name}
          </h1>
          <div className="masuk mx-auto mt-6 flex items-center justify-center gap-3 text-gold" style={{ '--tunda': '0.25s' }} aria-hidden="true">
            <span className="h-px w-10 bg-current opacity-50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-current" />
            <span className="h-px w-10 bg-current opacity-50" />
          </div>
          <p className="masuk mt-5 text-[13px] font-medium uppercase tracking-[0.2em] text-ink" style={{ '--tunda': '0.3s' }}>{tanggal}</p>
          <p className="masuk mt-3 text-sm italic text-muted" style={{ '--tunda': '0.4s' }}>Kami mengundang Anda untuk berbagi kebahagiaan</p>
        </div>

        {/* Tengah: segel lilin (perunggu tua, supaya teks krem di atasnya tetap ≥ 4,5:1) */}
        <div className="masuk shrink-0" style={{ '--tunda': '0.5s' }}>
          <button
            type="button"
            onClick={onOpen}
            disabled={keluar}
            className="animate-wax-pulse relative flex h-32 w-32 flex-col items-center justify-center rounded-full text-cream shadow-[0_10px_24px_-8px_rgba(74,63,58,0.55)] transition active:scale-95"
            style={{ background: 'radial-gradient(circle at 30% 24%, #9a7840 0%, #7d5c2a 42%, #614620 100%)' }}
          >
            <span className="absolute inset-2 rounded-full border border-dashed border-cream/35" aria-hidden="true" />
            <Mail size={22} strokeWidth={1.5} aria-hidden="true" />
            <span className="mt-1.5 text-[11px] font-semibold uppercase leading-tight tracking-[0.12em]">Buka<br />Undangan</span>
          </button>
        </div>

        {/* Bawah: alamat tamu */}
        <div className="masuk w-full max-w-sm" style={{ '--tunda': '0.6s' }}>
          <p className="text-sm text-muted">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="mt-2 inline-block border-b border-gold/50 px-4 pb-1 font-display text-2xl text-ink">{guest}</p>
        </div>
      </div>
    </section>
  );
}
