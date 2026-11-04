import Image from 'next/image';
import headshot from '@/assets/image_a0b48ef7.jpg';
import ResumePreview from '@/components/Common/ResumePreview';
import ScrollReveal from '@/components/Common/ScrollReveal';
import './portfolio.css';

export const metadata = {
  title: 'Matt Stowers | Full-Stack Developer',
  description:
    'Matt Stowers is a full-stack developer and U.S. Army veteran building thoughtful, responsive web experiences in Little Rock, Arkansas.',
};

const skills = [
  {
    number: '01',
    title: 'Languages',
    items: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    number: '02',
    title: 'Libraries & frameworks',
    items: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    number: '03',
    title: 'Developer tools',
    items: ['Vite', 'Git', 'GitHub', 'VS Code'],
  },
  {
    number: '04',
    title: 'Core practices',
    items: ['Responsive design', 'CI/CD', 'Modular architecture'],
  },
];

const experience = [
  'Led, trained, and managed teams in high-pressure environments, with a focus on readiness and accountability.',
  'Coordinated cross-functional communication and adapted workflows to meet changing objectives.',
];

const credentials = [
  {
    title: 'JavaScript Professional Developer Certification',
    source: 'Coalition of Information Technology Businesses (COITB)',
  },
  {
    title: 'Web Design Certificate · HTML5 & CSS3',
    source: 'Coalition of Information Technology Businesses (COITB)',
  },
  {
    title: 'Full-Stack Coding Boot Camp',
    source: 'Ongoing studies · React and SQL',
  },
];

function RevealText({
  as = 'p',
  children,
  className = '',
  delay = 0,
  ...props
}) {
  return (
    <ScrollReveal
      as={as}
      className={className}
      variant='text'
      delay={delay}
      {...props}
    >
      {children}
    </ScrollReveal>
  );
}

export default function Home() {
  return (
    <main className='portfolio-main'>
      <section
        className='portfolio-contact-band'
        aria-label='Contact information'
      >
        <div
          className='portfolio-shell contact-band-inner'
          id='contact-details'
        >
          <ScrollReveal
            as='a'
            className='contact-band-link'
            href='mailto:matthewrstowers@gmail.com'
            variant='text'
            delay={0.05}
          >
            <span className='contact-label'>Email</span>
            <span>matthewrstowers@gmail.com</span>
          </ScrollReveal>
          <ScrollReveal
            as='a'
            className='contact-band-link'
            href='tel:+18708108207'
            variant='text'
            delay={0.12}
          >
            <span className='contact-label'>Phone</span>
            <span>(870) 810-8207</span>
          </ScrollReveal>
          <ScrollReveal
            as='a'
            className='contact-band-link'
            href='https://github.com/matt-stowers'
            target='_blank'
            rel='noreferrer'
            variant='text'
            delay={0.19}
          >
            <span className='contact-label'>GitHub</span>
            <span>github.com/matt-stowers ↗</span>
          </ScrollReveal>
        </div>
      </section>

      <section className='portfolio-hero' aria-labelledby='hero-title'>
        <div className='hero-starfield' aria-hidden='true' />
        <div className='portfolio-shell hero-layout'>
          <div className='hero-copy'>
            <RevealText className='hero-location' delay={0.06}>
              U.S. Army veteran
            </RevealText>
            <RevealText
              as='h1'
              id='hero-title'
              className='hero-title'
              delay={0.14}
            >
              Matt
              <br />
              Stowers
            </RevealText>
            <RevealText
              className='hero-location-inline'
              delay={0.2}
              aria-label='Location: Little Rock, Arkansas'
            >
              Little Rock, Arkansas
            </RevealText>
            <RevealText as='p' className='hero-role' delay={0.23}>
              Full-stack developer
            </RevealText>
            <RevealText className='hero-summary' delay={0.31}>
              I build responsive web experiences with a front-end foundation in
              modular React architecture, and I&apos;m growing my full-stack
              practice through ongoing study in React and SQL.
            </RevealText>
            <div className='hero-actions'>
              <ScrollReveal
                as='a'
                className='portfolio-button'
                href='#work'
                variant='zoom'
                delay={0.38}
              >
                Explore projects <span aria-hidden='true'>↓</span>
              </ScrollReveal>
              <ScrollReveal
                as='div'
                className='hero-resume-action'
                variant='text'
                delay={0.44}
              >
                <ResumePreview
                  className='hero-resume-link'
                  label='View resume'
                />
              </ScrollReveal>
            </div>
            <RevealText className='hero-note' delay={0.5}>
              Thoughtful interfaces. Clear structure. Calm execution.
            </RevealText>
          </div>

          <ScrollReveal
            as='figure'
            className='portrait-frame'
            variant='zoom'
            delay={0.2}
          >
            <div className='portrait-orbit' aria-hidden='true' />
            <Image
              src={headshot}
              alt='Professional headshot of Matt Stowers'
              priority
              sizes='(max-width: 760px) 85vw, 40vw'
            />
          </ScrollReveal>
        </div>
        <div className='hero-bottom-rule portfolio-shell' aria-hidden='true'>
          <span>Selected work</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      <section
        className='portfolio-section work-section'
        id='work'
        aria-labelledby='work-title'
      >
        <div className='portfolio-shell section-shell'>
          <header className='section-heading'>
            <RevealText className='section-index'>
              01 / Selected work
            </RevealText>
            <RevealText as='h2' id='work-title' className='section-title'>
              Built from
              <br />
              curiosity
            </RevealText>
            <RevealText className='section-description'>
              Personal projects shaped by reusable systems, responsive layouts,
              and the details that make a product feel considered.
            </RevealText>
          </header>

          <div className='project-grid'>
            <ScrollReveal
              as='article'
              className='project-card project-card-primary'
              variant='left'
              delay={0.08}
            >
              <div className='project-card-topline'>
                <RevealText className='project-category'>
                  Personal project · 01
                </RevealText>
                <span className='project-star' aria-hidden='true'>
                  ✳
                </span>
              </div>
              <RevealText as='h3' className='project-title' delay={0.08}>
                Coffee Bean Website
              </RevealText>
              <RevealText className='project-stack' delay={0.12}>
                React <span>/</span> Vite <span>/</span> Tailwind CSS
              </RevealText>
              <RevealText className='project-description' delay={0.16}>
                A responsive coffee shop experience built with reusable React
                components and layouts that render nested content cleanly.
              </RevealText>
              <ul className='project-points'>
                {[
                  'Managed dynamic content with hooks and props.',
                  'Built recursive layout components for nested data.',
                  'Designed mobile-responsive layouts with Tailwind CSS.',
                  'Used GitHub for version and branch management.',
                ].map((point, index) => (
                  <RevealText
                    as='li'
                    key={point}
                    variant='left'
                    delay={0.2 + index * 0.06}
                  >
                    {point}
                  </RevealText>
                ))}
              </ul>
              <ScrollReveal
                as='a'
                className='project-source-link'
                href='https://github.com/matt-stowers/coffee-bean-website'
                target='_blank'
                rel='noreferrer'
                variant='text'
                delay={0.38}
              >
                View source <span aria-hidden='true'>↗</span>
              </ScrollReveal>
            </ScrollReveal>

            <ScrollReveal
              as='article'
              className='project-card project-card-secondary'
              variant='right'
              delay={0.16}
            >
              <div className='project-card-topline'>
                <RevealText className='project-category'>
                  Personal project · 02
                </RevealText>
                <span className='project-star' aria-hidden='true'>
                  ✳
                </span>
              </div>
              <RevealText as='h3' className='project-title' delay={0.08}>
                Vintage Barbershop Website
              </RevealText>
              <RevealText className='project-stack' delay={0.12}>
                HTML <span>/</span> CSS <span>/</span> JavaScript
              </RevealText>
              <RevealText className='project-description' delay={0.16}>
                A vintage-inspired barbershop site that presents services and
                guides visitors toward scheduling an appointment.
              </RevealText>
              <div className='project-card-spacer' />
              <ScrollReveal
                as='a'
                className='project-source-link'
                href='https://github.com/matt-stowers/Vintage-Barbershop-Website'
                target='_blank'
                rel='noreferrer'
                variant='text'
                delay={0.22}
              >
                View source <span aria-hidden='true'>↗</span>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        className='portfolio-section about-section'
        id='about'
        aria-labelledby='about-title'
      >
        <div className='portfolio-shell section-shell about-layout'>
          <header className='section-heading'>
            <RevealText className='section-index'>02 / Background</RevealText>
            <RevealText as='h2' id='about-title' className='section-title'>
              Service shaped
              <br />
              my approach
            </RevealText>
          </header>
          <div className='about-content'>
            <RevealText className='about-lead' delay={0.08}>
              Before I wrote code for the web, I served as an Infantry Sergeant
              and Team Leader in the U.S. Army.
            </RevealText>
            <RevealText className='about-copy' delay={0.16}>
              Leading and training teams taught me to communicate clearly, adapt
              when plans change, and take responsibility for the details. I
              bring that same discipline, curiosity, and care to the way I build
              and collaborate.
            </RevealText>
            <div className='service-record'>
              <RevealText className='service-label'>U.S. Army</RevealText>
              <RevealText as='h3' className='service-title' delay={0.08}>
                Infantry Sergeant &amp; Team Leader
              </RevealText>
              <RevealText className='service-dates' delay={0.14}>
                August 2021 <span>—</span> February 2026
              </RevealText>
            </div>
            <ul className='experience-list'>
              {experience.map((item, index) => (
                <RevealText
                  as='li'
                  key={item}
                  variant='left'
                  delay={0.18 + index * 0.1}
                >
                  {item}
                </RevealText>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className='portfolio-section skills-section'
        id='skills'
        aria-labelledby='skills-title'
      >
        <div className='portfolio-shell section-shell'>
          <header className='section-heading skills-heading'>
            <RevealText className='section-index'>03 / Toolkit</RevealText>
            <RevealText as='h2' id='skills-title' className='section-title'>
              Tools for the
              <br />
              whole journey
            </RevealText>
            <RevealText className='section-description'>
              A practical toolkit for building responsive interfaces, keeping
              codebases organized, and shipping with care.
            </RevealText>
          </header>
          <div className='skills-grid'>
            {skills.map((skill, index) => (
              <ScrollReveal
                as='article'
                className='skill-card'
                key={skill.number}
                variant={index % 2 === 0 ? 'rise' : 'zoom'}
                delay={index * 0.08}
              >
                <RevealText className='skill-number'>{skill.number}</RevealText>
                <RevealText as='h3' className='skill-title' delay={0.07}>
                  {skill.title}
                </RevealText>
                <ul className='skill-items'>
                  {skill.items.map((item, itemIndex) => (
                    <RevealText
                      as='li'
                      key={item}
                      variant='text'
                      delay={0.12 + itemIndex * 0.05}
                    >
                      {item}
                    </RevealText>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className='portfolio-section education-section'
        aria-labelledby='education-title'
      >
        <div className='portfolio-shell section-shell education-layout'>
          <header className='section-heading'>
            <RevealText className='section-index'>04 / Learning</RevealText>
            <RevealText as='h2' id='education-title' className='section-title'>
              Always in
              <br />
              progress
            </RevealText>
          </header>
          <ul className='credential-list'>
            {credentials.map((credential, index) => (
              <ScrollReveal
                as='li'
                className='credential-item'
                key={credential.title}
                variant='left'
                delay={index * 0.1}
              >
                <span className='credential-mark' aria-hidden='true'>
                  ✳
                </span>
                <div>
                  <RevealText as='h3' className='credential-title'>
                    {credential.title}
                  </RevealText>
                  <RevealText className='credential-source' delay={0.06}>
                    {credential.source}
                  </RevealText>
                </div>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className='contact-section' aria-labelledby='contact-title'>
        <div className='contact-nebula' aria-hidden='true' />
        <div className='portfolio-shell contact-layout'>
          <RevealText className='section-index'>05 / Get in touch</RevealText>
          <RevealText as='h2' id='contact-title' className='contact-title'>
            Open a
            <br />
            conversation
          </RevealText>
          <RevealText className='contact-copy' delay={0.1}>
            Reach out about a role, collaboration, or a good conversation about
            building for the web.
          </RevealText>
          <ScrollReveal
            as='a'
            className='contact-cta'
            href='mailto:matthewrstowers@gmail.com'
            variant='zoom'
            delay={0.18}
          >
            matthewrstowers@gmail.com <span aria-hidden='true'>↗</span>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
