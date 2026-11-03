import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import './portfolio.css';

export const metadata: Metadata = {
  title: 'Matt Stowers | Front-end Developer',
  description:
    'Matt Stowers is a front-end developer and Army veteran in Little Rock, Arkansas, building responsive React interfaces.',
};

const skills = [
  {
    title: 'Languages',
    items: 'JavaScript, HTML5, CSS3',
  },
  {
    title: 'Libraries & frameworks',
    items: 'React, Tailwind CSS, Framer Motion',
  },
  {
    title: 'Tools',
    items: 'Vite, Git, GitHub, VS Code',
  },
  {
    title: 'Practices',
    items: 'Responsive design, CI/CD, modular components',
  },
];

export default function Home() {
  return (
    <main className='portfolio-main'>
      <section className='portfolio-hero' aria-labelledby='hero-title'>
        <div className='portfolio-shell hero-layout'>
          <div className='hero-copy'>
            <p className='hero-location'>Little Rock, Arkansas</p>
            <h1 id='hero-title'>Matt Stowers</h1>
            <p className='hero-role'>Front-end developer</p>
            <p className='hero-summary'>
              I build responsive React interfaces with clean architecture and a
              sharp eye for detail.
            </p>
            <div className='hero-actions'>
              <a className='portfolio-button' href='#work'>
                Explore my work <span aria-hidden='true'>↓</span>
              </a>
            </div>
          </div>

          <figure className='portrait-frame'>
            <Image
              src='/images/matt-stowers.jpg'
              alt='Matt Stowers'
              width={896}
              height={1195}
              sizes='(max-width: 760px) 100vw, 42vw'
            />
            <figcaption>Matt Stowers · Front-end developer</figcaption>
          </figure>
        </div>
      </section>

      <section
        className='portfolio-section work-section'
        id='work'
        aria-labelledby='work-title'
      >
        <div className='portfolio-shell work-layout'>
          <div className='section-intro'>
            <p className='section-kicker'>Selected work</p>
            <h2 id='work-title'>A considered cup of code.</h2>
          </div>

          <article className='project-feature'>
            <div className='project-title-block'>
              <p className='project-category'>
                Web development · Personal project
              </p>
              <h3>Coffee Bean Website</h3>
              <p className='project-stack'>React / Vite / Tailwind CSS</p>
            </div>
            <div className='project-details'>
              <p>
                A responsive website built around reusable React components and
                layouts that can render nested content cleanly.
              </p>
              <ul>
                <li>Used hooks and props to manage dynamic content.</li>
                <li>Built recursive layout components for nested data.</li>
                <li>
                  Applied a utility-first styling approach for mobile layouts.
                </li>
                <li>Managed changes and branches with GitHub.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section
        className='portfolio-section about-section'
        id='about'
        aria-labelledby='about-title'
      >
        <div className='portfolio-shell about-layout'>
          <div className='section-intro'>
            <p className='section-kicker'>A little about me</p>
            <h2 id='about-title'>Built on teamwork.</h2>
          </div>
          <div className='about-copy'>
            <p className='about-lead'>
              Before building for the web, I served as an Infantry Sergeant and
              Team Leader in the U.S. Army.
            </p>
            <p>
              Leading and training teams taught me to communicate clearly, adapt
              when plans change, and take responsibility for the details. I
              bring that same care to the way I build and collaborate.
            </p>
            <div className='service-record'>
              <span>U.S. Army</span>
              <span>Infantry Sergeant &amp; Team Leader</span>
              <span>August 2021 — February 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className='portfolio-section skills-section'
        id='skills'
        aria-labelledby='skills-title'
      >
        <div className='portfolio-shell skills-layout'>
          <div className='section-intro'>
            <p className='section-kicker'>How I work</p>
            <h2 id='skills-title'>Tools of the trade.</h2>
            <p className='skills-description'>
              From a first responsive layout to a well-organized codebase, I
              value the craft behind a reliable interface.
            </p>
          </div>
          <dl className='skills-list'>
            {skills.map((skill) => (
              <div className='skill-row' key={skill.title}>
                <dt>{skill.title}</dt>
                <dd>{skill.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className='portfolio-section education-section'
        aria-labelledby='education-title'
      >
        <div className='portfolio-shell education-layout'>
          <div className='section-intro'>
            <p className='section-kicker'>Learning in progress</p>
            <h2 id='education-title'>Always getting better.</h2>
          </div>
          <ul className='credential-list'>
            <li>
              <span>JavaScript Professional Developer Certification</span>
              <span>Coalition of Information Technology Businesses</span>
            </li>
            <li>
              <span>Web Design Certificate · HTML5 &amp; CSS3</span>
              <span>Coalition of Information Technology Businesses</span>
            </li>
            <li>
              <span>Full-Stack Coding Boot Camp</span>
              <span>Ongoing studies · React and SQL</span>
            </li>
          </ul>
        </div>
      </section>

      <section
        className='contact-section'
        id='contact'
        aria-labelledby='contact-title'
      >
        <div className='portfolio-shell contact-layout'>
          <div>
            <p className='section-kicker'>Have a project in mind?</p>
            <h2 id='contact-title'>Let&apos;s make it work.</h2>
          </div>
          <div className='contact-actions'>
            <a
              className='contact-email'
              href='mailto:matthewrstowers@gmail.com'
            >
              matthewrstowers@gmail.com
            </a>
            <a className='contact-phone' href='tel:+18708108207'>
              (870) 810-8207
            </a>
            <Link
              className='contact-github'
              href='https://github.com/matt-stowers'
              target='_blank'
              rel='noreferrer'
            >
              GitHub profile <span aria-hidden='true'>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
