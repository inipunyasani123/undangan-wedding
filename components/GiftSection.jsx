'use client';
import { useState } from 'react';
import { Copy, Check, Gift } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';

function BankCard({ item }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(item.number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-rose-deep to-ink p-6 text-cream shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold tracking-wide">{item.bank}</span>
        <Gift size={20} className="opacity-70" aria-hidden="true" />
      </div>
      <p className="mt-6 font-display text-2xl tracking-widest">{item.number}</p>
      {item.contoh && (
        <span className="mt-1 inline-block rounded-full bg-cream/20 px-2.5 py-0.5 text-[11px] tracking-wide">Nomor contoh</span>
      )}
      <p className="mt-1 text-sm opacity-80">a.n. {item.holder}</p>
      <button
        type="button"
        onClick={copy}
        className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-cream/20 px-4 py-2 text-xs font-medium transition hover:bg-cream/30"
      >
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        {copied ? 'Tersalin' : 'Salin Nomor'}
      </button>
      <span className="sr-only" aria-live="polite">{copied ? `Nomor ${item.bank} tersalin` : ''}</span>
    </div>
  );
}

// Amplop digital / hadiah.
export default function GiftSection() {
  const { gifts } = config;
  if (!gifts.enabled) return null;

  return (
    <section className="bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="Wedding Gift" title="Amplop Digital" />
        <Reveal className="mx-auto mt-6 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-muted">{gifts.note}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {gifts.banks.map((item, i) => (
            <Reveal key={item.bank} delay={i * 0.15}>
              <BankCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
