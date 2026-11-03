'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const revealVariants = {
  hero: {
    hidden: { opacity: 0, y: 34, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: 64, rotate: 1.5 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -64, rotate: -1.5 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  },
  rise: {
    hidden: { opacity: 0, y: 48, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  zoom: {
    hidden: { opacity: 0, y: 24, scale: 0.93 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  className,
  variant = 'rise',
}) {
  const reduceMotion = useReducedMotion();
  const revealRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [hasObserved, setHasObserved] = useState(false);

  useEffect(() => {
    const element = revealRef.current;
    if (!element || reduceMotion || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasObserved(true);
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <motion.div
      ref={revealRef}
      className={`scroll-reveal ${className}`}
      initial={false}
      animate={
        !hasObserved || hasEntered || reduceMotion ? 'visible' : 'hidden'
      }
      variants={revealVariants[variant] || revealVariants.rise}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
