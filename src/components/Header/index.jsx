'use client';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import ResumePreview from '@/components/Common/ResumePreview';
const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact-details', label: 'Contact' },
];
export default function Header() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className='portfolio-header'
      initial={reduceMotion ? false : { opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className='portfolio-header-inner'>
        <Link
          className='portfolio-brand'
          href='/'
          aria-label='Matt Stowers home'
        >
          Matt Stowers<span></span>
        </Link>
        <nav className='portfolio-nav' aria-label='Main navigation'>
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <ResumePreview className='portfolio-resume-link' />
      </div>
    </motion.header>
  );
}
