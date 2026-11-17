'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const certifications = [
  {
    title: 'HTML5 & CSS3',
    image: '/certs/web-design.pdf',
  },
  {
    title: 'JavaScript',
    image: '/certs/javascript.pdf',
  },
  {
    title: 'React.js',
    image: '/certs/react.pdf',
  },
  {
    title: 'Full-Stack Coding Boot Camp',
    issuer: 'Ongoing studies · MySQL',
  },
];

export default function Certifications() {
  const [active, setActive] = useState(null);

  // Close on Escape and lock page scroll while the modal is open
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <ul className='cert-list'>
        {certifications.map((cert) => (
          <li key={cert.title}>
            {cert.image ? (
              <button
                type='button'
                className='cert-item cert-item--link'
                onClick={() => setActive(cert)}
              >
                <span className='cert-title'>
                  {cert.title} <span aria-hidden='true'>↗</span>
                </span>
                <span className='cert-issuer'>{cert.issuer}</span>
              </button>
            ) : (
              <div className='cert-item'>
                <span className='cert-title'>{cert.title}</span>
                <span className='cert-issuer'>{cert.issuer}</span>
              </div>
            )}
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active && (
          <motion.div
            className='cert-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className='cert-modal'
              role='dialog'
              aria-modal='true'
              aria-label={active.title}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type='button'
                className='cert-close'
                onClick={() => setActive(null)}
                aria-label='Close'
              >
                ×
              </button>
              <iframe
                className='cert-frame'
                src={`${active.image}#toolbar=0&navpanes=0&view=Fit`}
                title={`${active.title} certificate`}
              />
              <p>
                {active.title}
                <a
                  href={active.image}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View ↗
                </a>
              </p>
              <p>{active.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
