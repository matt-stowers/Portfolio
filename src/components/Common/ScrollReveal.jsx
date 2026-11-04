'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const revealVariants = {
  hero: {
    hidden: { opacity: 0, y: 28, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  rise: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  zoom: {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  text: {
    hidden: { opacity: 0, y: 18, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
};

export default function ScrollReveal({
  children,
  className,
  as = 'div',
  variant = 'rise',
  delay = 0,
  duration = 0.75,
  amount = 0.16,
  animateOnLoad = false,
  ...elementProps
}) {
  const reduceMotion = useReducedMotion();
  const revealRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [hasObserved, setHasObserved] = useState(false);
  const MotionElement = motion[as] || motion.div;

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
      { threshold: amount, rootMargin: '0px 0px -32px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [amount, reduceMotion]);

  return (
    <MotionElement
      ref={revealRef}
      {...elementProps}
      className={['scroll-reveal', className].filter(Boolean).join(' ')}
      initial={false}
      animate={
        reduceMotion || !hasObserved
          ? animateOnLoad && !reduceMotion
            ? 'hidden'
            : 'visible'
          : hasEntered
            ? 'visible'
            : 'hidden'
      }
      variants={revealVariants[variant] || revealVariants.rise}
      transition={{
        duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionElement>
  );
}
