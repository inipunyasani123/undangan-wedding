'use client';
import { useEffect, useRef } from 'react';
import { MotionConfig } from 'framer-motion';

import Hero from './Hero';
import Opening from './Opening';
import CoupleSection from './CoupleSection';
import CountdownTimer from './CountdownTimer';
import EventDetails from './EventDetails';
import LoveStory from './LoveStory';
import Gallery from './Gallery';
import MapEmbed from './MapEmbed';
import GiftSection from './GiftSection';
import RSVPForm from './RSVPForm';
import WishesForm from './WishesForm';
import Footer from './Footer';

// Isi undangan setelah sampul dibuka. Dimuat terpisah (next/dynamic) supaya JavaScript halaman pertama
// hanya berisi sampul; framer-motion dan seluruh bagian isi ikut di potongan ini.
export default function Isi() {
  const ref = useRef(null);

  // Tombol pembuka sudah hilang; fokus pindah ke awal isi.
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} tabIndex={-1} className="outline-none">
        <Hero />
        <Opening />
        <CoupleSection />
        <CountdownTimer />
        <EventDetails />
        <LoveStory />
        <Gallery />
        <MapEmbed />
        <GiftSection />
        <RSVPForm />
        <WishesForm />
        <Footer />
      </div>
    </MotionConfig>
  );
}
