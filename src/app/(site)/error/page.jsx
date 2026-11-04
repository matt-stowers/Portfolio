import ScrollReveal from '@/components/Common/ScrollReveal';
import Link from 'next/link';

export const metadata = {
  title: 'Page not found | Matt Stowers',
  description: 'The page you requested could not be found.',
};

export default function ErrorPage() {
  return (
    <main className='notfound-section'>
      <div className='notfound-starfield' aria-hidden='true' />
      <div className='notfound-content'>
        <ScrollReveal as='p' className='section-index' variant='text'>
          Matt Stowers · Portfolio
        </ScrollReveal>
        <ScrollReveal as='p' className='notfound-code' variant='zoom'>
          404
        </ScrollReveal>
        <ScrollReveal as='h1' className='notfound-title' variant='text'>
          Lost in space?
        </ScrollReveal>
        <ScrollReveal
          as='p'
          className='notfound-copy'
          variant='text'
          delay={0.1}
        >
          This page isn&apos;t in this part of the galaxy. Head back to the
          portfolio homepage to continue exploring.
        </ScrollReveal>
        <ScrollReveal as='div' variant='zoom' delay={0.18}>
          <Link className='portfolio-button' href='/'>
            Back to home <span aria-hidden='true'>↗</span>
          </Link>
        </ScrollReveal>
      </div>
    </main>
  );
}
