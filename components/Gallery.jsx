'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';
import { useDialog } from '@/lib/hooks';

// Galeri foto dengan lightbox.
export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);
  const tombolTutup = useDialog(active !== null, () => setActive(null));

  return (
    <section className="bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle kicker="Moments" title="Galeri" />
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.1}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-lg shadow-sm"
                aria-label={`Perbesar foto ${i + 1}`}
              >
                <span className="relative block h-44 w-full md:h-60">
                  <Image
                    src={src}
                    alt={`Galeri ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 290px"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Galeri ${active + 1} dari ${gallery.length}, diperbesar`}
          >
            <button
              ref={tombolTutup}
              type="button"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-cream/80 transition hover:bg-cream/10 hover:text-cream"
              onClick={() => setActive(null)}
              aria-label="Tutup foto"
            >
              <X size={28} aria-hidden="true" />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[active]} alt={`Galeri ${active + 1}`} fill sizes="(max-width: 768px) 100vw, 672px" className="rounded-lg object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
