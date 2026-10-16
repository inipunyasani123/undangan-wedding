'use client';
import Link from 'next/link';
import { Heart, Share2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { invitationUrl, whatsappShareUrl } from '@/lib/utils';

// Penutup undangan.
export default function Footer() {
  const { footer, couple } = config;

  const share = () => {
    const text = `Undangan Pernikahan ${couple.groom.name} & ${couple.bride.name}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: text, url: invitationUrl() }).catch(() => {});
    } else {
      window.open(whatsappShareUrl(text), '_blank', 'noopener');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-ink px-6 py-20 text-center text-cream">
      <Reveal className="mx-auto max-w-xl">
        <p className="text-sm leading-relaxed text-cream/80">{footer.closing}</p>
        <h2 className="mt-8 font-script text-5xl text-cream">
          {couple.groom.name} &amp; {couple.bride.name}
        </h2>
        <p className="mt-3 text-sm tracking-widest text-[#c8ab77]">{footer.hashtag}</p>

        <button
          onClick={share}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream hover:text-ink"
        >
          <Share2 size={15} aria-hidden="true" /> Bagikan Undangan
        </button>

        {config.music.enabled && (
          <p className="mt-10 text-xs text-cream/70">
            Musik: {config.music.title} · {config.music.credit}
          </p>
        )}
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-cream/70">
          Dibuat dengan <Heart size={12} className="fill-rose text-rose" aria-hidden="true" /> untuk hari bahagia ·{' '}
          <Link href="/kirim" className="inline-block py-2 underline underline-offset-4 hover:text-cream">Kirim ke tamu</Link>
        </p>
      </Reveal>
    </footer>
  );
}
