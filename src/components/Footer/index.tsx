import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='portfolio-footer'>
      <div className='portfolio-footer-inner'>
        <p>Matt Stowers · Front-end developer · Little Rock, Arkansas</p>
        <Link href='/matt-stowers-resume.pdf' target='_blank' rel='noreferrer'>
          View resume <span aria-hidden='true'>↗</span>
        </Link>
      </div>
    </footer>
  );
}
