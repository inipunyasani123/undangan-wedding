import { MapPin } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';

// Peta lokasi + tombol arah.
export default function MapEmbed() {
  const { location } = config;
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="Location" title="Lokasi Acara" />
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-2xl bg-blush/60 shadow-md">
            <p className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-muted" aria-hidden="true">
              <MapPin size={16} /> Memuat peta…
            </p>
            <iframe
              src={location.mapEmbed}
              title="Peta lokasi acara"
              className="relative h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-ink">{location.label}</p>
          {location.note && <p className="mt-1 text-center text-xs text-muted">{location.note}</p>}
          <div className="mt-5 text-center">
            <a
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-deep px-6 py-3 text-sm font-medium text-cream transition hover:bg-ink"
            >
              <MapPin size={16} aria-hidden="true" /> Buka di Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
