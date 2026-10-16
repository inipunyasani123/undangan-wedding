'use client';
import { motion, useReducedMotion } from 'framer-motion';

// Pembungkus animasi: elemen muncul lembut saat masuk viewport.
// Jika pengguna mengaktifkan "reduce motion", animasi dinonaktifkan.
export default function Reveal({ children, delay = 0, y = 30, className = '', ...rest }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      {...rest}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
