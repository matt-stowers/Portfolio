'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function MotionLink({ children, className, href, target, rel }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      className={className}
      href={href}
      target={target}
      rel={rel}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
    >
      {children}
    </motion.a>
  );
}
