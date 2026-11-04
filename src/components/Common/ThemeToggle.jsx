'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function ThemeToggle() {
  const reduceMotion = useReducedMotion();

  function toggleTheme() {
    const isLight = document.documentElement.dataset.theme === 'light';
    const nextTheme = isLight ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // Theme still changes for this session when storage is unavailable.
    }
  }

  return (
    <motion.button
      className='theme-toggle'
      type='button'
      onClick={toggleTheme}
      aria-label='Toggle light and dark theme'
      title='Toggle light and dark theme'
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
    >
      <svg
        className='theme-icon theme-icon-moon'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path d='M20.2 15.1A8.4 8.4 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z' />
      </svg>
      <svg
        className='theme-icon theme-icon-sun'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <circle cx='12' cy='12' r='3.7' />
        <path d='M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42' />
      </svg>
    </motion.button>
  );
}
