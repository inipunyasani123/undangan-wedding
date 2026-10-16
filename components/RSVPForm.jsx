'use client';
import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

// Form konfirmasi kehadiran. Ini undangan contoh: data tidak dikirim ke mana pun,
// dan pesan suksesnya mengatakan itu terus terang.
const PESAN_URL =
  'https://wa.me/6285190931399?text=' +
  encodeURIComponent('Halo PintuWeb, saya mau pesan undangan pernikahan digital seperti contoh Raka & Sinta.');

export default function RSVPForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', attendance: 'hadir', guests: 1 });
  const [done, setDone] = useState(false);
  const pesanSukses = useRef(null);

  // Form hilang setelah dikirim; pindahkan fokus ke pesan sukses supaya tidak jatuh ke <body>.
  useEffect(() => {
    if (done) pesanSukses.current?.focus();
  }, [done]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit?.(form);
    setDone(true);
  };

  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-lg">
        <SectionTitle kicker="Kehadiran" title="Konfirmasi RSVP" />

        {done ? (
          <div className="mt-10 rounded-2xl bg-blush/60 p-8 text-center" role="status">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-deep text-cream">
              <Check size={26} aria-hidden="true" />
            </div>
            <p ref={pesanSukses} tabIndex={-1} className="mt-4 font-display text-2xl text-ink">Terima kasih, {form.name.trim()}!</p>
            <p className="mt-2 text-sm text-muted">
              Ini undangan contoh, jadi konfirmasi Anda tidak dikirim ke mana pun. Pada undangan
              sungguhan, RSVP langsung tercatat untuk mempelai.
            </p>
            <a
              href={PESAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-rose-deep underline underline-offset-4 hover:text-ink"
            >
              Pesan undangan seperti ini
            </a>
          </div>
        ) : (
          <Reveal className="mt-10">
            <form onSubmit={submit} className="space-y-5 rounded-2xl bg-blush/40 p-8 shadow-sm">
              <div>
                <label htmlFor="rsvp-nama" className="text-sm font-medium text-ink">Nama</label>
                <input
                  id="rsvp-nama"
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Nama Anda"
                  autoComplete="name"
                  maxLength={60}
                  className="mt-1 w-full rounded-lg border border-rose/40 bg-cream px-4 py-3 text-sm outline-none focus:border-rose-deep"
                  required
                />
              </div>

              <div>
                <label htmlFor="rsvp-hadir" className="text-sm font-medium text-ink">Konfirmasi</label>
                <select
                  id="rsvp-hadir"
                  name="attendance"
                  value={form.attendance}
                  onChange={handle}
                  className="mt-1 w-full rounded-lg border border-rose/40 bg-cream px-4 py-3 text-sm outline-none focus:border-rose-deep"
                >
                  <option value="hadir">Hadir</option>
                  <option value="tidak">Tidak Hadir</option>
                  <option value="ragu">Masih Ragu</option>
                </select>
              </div>

              {form.attendance === 'hadir' && (
                <div>
                  <label htmlFor="rsvp-jumlah" className="text-sm font-medium text-ink">Jumlah Tamu</label>
                  <input
                    id="rsvp-jumlah"
                    type="number"
                    name="guests"
                    min={1}
                    max={10}
                    value={form.guests}
                    onChange={handle}
                    className="mt-1 w-full rounded-lg border border-rose/40 bg-cream px-4 py-3 text-sm outline-none focus:border-rose-deep"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-rose-deep py-3 text-sm font-medium text-cream transition hover:bg-ink"
              >
                Kirim Konfirmasi
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
