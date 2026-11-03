'use client';

import Link from 'next/link';

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='portfolio-header'>
      <div className='portfolio-header-inner'>
        <Link
          className='portfolio-brand'
          href='/'
          aria-label='Matt Stowers home'
        >
          Matt Stowers<span>.</span>
        </Link>
        <nav className='portfolio-nav' aria-label='Main navigation'>
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className='portfolio-resume-link'
          href='/matt-stowers-resume.pdf'
          download
        >
          Resume <span aria-hidden='true'>↗</span>
        </a>
      </div>
    </header>
  );
}
