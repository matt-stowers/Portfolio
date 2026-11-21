import Image from 'next/image';
import headshot from '@/assets/image_a0b48ef7.jpg';
import ResumePreview from '@/components/Common/ResumePreview';
import CertPreview from '@/components/Common/Certs';
import ScrollReveal from '@/components/Common/ScrollReveal';
import ScrollProgress from '@/components/Header/ScrollProgress';
import Timeline from '@/components/Common/Timeline';
import EmailLink from '@/components/Common/EmailLink';
import './portfolio.css';


const skills = [
  {
    number: '01',
    title: 'Languages',
    items: ['JavaScript', 'HTML5', 'CSS3', 'JSON', 'SQL'],
  },
  {
    number: '02',
    title: 'Libraries & frameworks',
    items: [
      'React',
      'Node.js',
      'Next.js',
      'Express.js',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    number: '03',
    title: 'Developer tools',
    items: ['Vite', 'Git', 'GitHub', 'VS Code', 'MySQL Workbench', 'DBeaver'],
  },
  {
    number: '04',
    title: 'Databases',
    items: ['MySQL, MongoDB'],
  },
  {
    number: '05',
    title: 'Core practices',
    items: [
      'Full-Stack JavaScript',
      'Database Management',
      'Modular Engineering',
      'CI/CD',
      'AI-Assisted Development',
    ],
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
      <ScrollProgress />
      {/* HERO SECTION */}
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
              modular React architecture, and I am growing my full-stack
              practice through ongoing study in database management.
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
      </section>

      {/* BACKGROUND SECTION */}
      <section
        className='portfolio-section about-section'
        id='about'
        aria-labelledby='about-title'
      >
        <div className='portfolio-shell section-shell about-layout'>
          <header className='section-heading skills-heading'>
            <RevealText className='section-index'>02 / Background</RevealText>
            <RevealText as='h2' id='about-title' className='section-title'>
              Continuous
              <br />
              Learning
            </RevealText>
          </header>
          <div className='about-content'>
            <RevealText className='about-lead' delay={0.08}>
              Self-taught since 2020.
            </RevealText>
            <RevealText className='about-copy' delay={0.16}>
              Started learning in 2020, begain freelance work in 2022, and
              continually improved during my time in Army.
            </RevealText>
            <ScrollReveal as='div' variant='rise' delay={0.2}>
              <Timeline />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
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

      {/* PROJECT CARD SECTION */}
      <section
        className='portfolio-section work-section'
        id='work'
        aria-labelledby='work-title'
      >
        <div className='portfolio-shell section-shell'>
          <header className='section-heading skills-heading'>
            <RevealText className='section-index'>
              01 / Selected work
            </RevealText>
            <RevealText as='h2' id='work-title' className='section-title'>
              Personal
              <br />
              Projects
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
              <ul className='project-points'>
                {['Built purely with JavaScript'].map((point, index) => (
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

      {/* EDUCATION SECTION */}
      <section
        className='portfolio-section education-section'
        aria-labelledby='education-title'
      >
        <div className='portfolio-shell section-shell education-layout'>
          <header className='section-heading'>
            <RevealText className='section-index'>04 / Education</RevealText>
            <RevealText as='h2' id='education-title' className='section-title'>
              Certifications
            </RevealText>
          </header>
          <section>
            <ScrollReveal as='div' variant='rise' delay={0.2}>
              <CertPreview />
            </ScrollReveal>
          </section>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className='contact-section'
        id='contact'
        aria-labelledby='contact-title'
      >
        <div className='contact-nebula' aria-hidden='true' />
        <div className='portfolio-shell contact-layout'>
          <RevealText className='section-index'>05 / Get in touch</RevealText>
          <RevealText as='h2' id='contact-title' className='contact-title'>
            Open a
            <br />
            conversation
          </RevealText>
          <RevealText className='contact-copy' delay={0.1}>
            Reach out about a role or collaboration.
          </RevealText>
          <div className='contact-links'>
            <ScrollReveal
              as='a'
              className='contact-cta'
              href='https://www.linkedin.com/in/matt-stowers-55425244b/'
              target='_blank'
              rel='noopener noreferrer'
              variant='zoom'
              delay={0.18}
            >
              LinkedIn <span aria-hidden='true'>↗</span>
            </ScrollReveal>

            <ScrollReveal
              as='a'
              className='contact-cta'
              href='https://github.com/matt-stowers'
              target='_blank'
              rel='noopener noreferrer'
              variant='zoom'
              delay={0.18}
            >
              GitHub <span aria-hidden='true'>↗</span>
            </ScrollReveal>
            <ScrollReveal as='div' variant='zoom' delay={0.18}>
              <EmailLink className='contact-cta'>
                Email <span aria-hidden='true'>↗</span>
              </EmailLink>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
