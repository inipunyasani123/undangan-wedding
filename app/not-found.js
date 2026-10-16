import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan — Raka & Sinta', robots: { index: false }, alternates: { canonical: null } };

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream px-5 py-14 text-ink flex flex-col items-center justify-center text-center">
      <p className="font-script text-3xl text-rose-deep">Maaf,</p>
      <h1 className="mt-1 font-display text-4xl font-semibold text-ink sm:text-5xl">Halaman ini tidak ada</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted mx-auto">Mungkin tautannya terpotong saat dikirim. Undangan lengkapnya ada di halaman utama.</p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-rose-deep px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ink">Buka undangan</Link>
    </main>
  );
}
