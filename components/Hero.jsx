'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import config from '@/lib/data';
import { tanggalWIB } from '@/lib/utils';

// Bagian pembuka setelah undangan dibuka.
export default function Hero() {
  const { couple, opening, mainDate } = config;
  const dateLabel = tanggalWIB(mainDate, { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 text-center">
      <Image
        src={config.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-cream" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <p className="font-script text-4xl text-cream drop-shadow">{opening.greeting}</p>
        <h1 className="mt-2 font-display text-5xl font-medium text-cream drop-shadow-lg sm:text-6xl md:text-7xl">
          {couple.groom.name}
          <span className="mx-2 font-script text-4xl sm:mx-3 sm:text-5xl">&amp;</span>
          {couple.bride.name}
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-cream/70" />
        <p className="mt-6 text-lg tracking-widest text-cream drop-shadow">{dateLabel}</p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
