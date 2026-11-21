'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const stops = [
  {
    label: '2020',
    heading: 'Learning the fundamentals',
    points: [
      'Began teaching myself web development during the pandemic shutdown.',
      'Routinely studying on FreeCodeCamp and LeetCode.',
    ],
  },
  {
    label: '2021',
    heading: 'Enlisted in the U.S. Army',
    points: [
      'Continued teaching myself web development alongside my military duties.',
      'Moved on to more complex projects instead of only following tutorials.'
    ],
  },
  {
    label: '2022',
    heading: 'First paying client',
    points: [
      'Applied what I learned on freelance projects.',
      'Built a site for a local bar right off base.'
    ],
  },
  {
    label: '2023',
    heading: 'Continued freelance work',
    points: [
      'Building sites for local businesses.',
      'Balanced increasing military responsibilities with continued learning.',
    ],
  },
  {
    label: '2024',
    heading: 'Bringing AI into my workflow',
    points: [
      'Started using AI-assisted development to ship faster.',
      'Promoted to Sergeant and took on even greater leadership responsibility.',
    ],
  },
  {
    label: '2025',
    heading: 'Preparing to go full time',
    points: [
      'Prepared to transition into full-time, freelance web development after the Army.',
    ],
  },
  {
    label: '2026',
    heading: 'Left the Army',
    points: [
        'Shifted from self-study to formal training in web development.',
    ],
  },
  {
    label: 'Now',
    heading: 'Formal education',
    points: [
      'Improving database managemnet skills.',
      'Working on a site for a local bar that does not have one.',
      'Building a full-stack passion project.'
    ],
  },
];

export default function Timeline() {
  const [index, setIndex] = useState(0);
  const stop = stops[index];
  const max = stops.length - 1;

  return (
    <div className='scrub'>
      <p className='scrub-hint'>Drag through the timeline</p>

      <div className='scrub-track'>
        <input
          type='range'
          min={0}
          max={max}
          step={1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          aria-label='Timeline position'
          aria-valuetext={`${stop.label}: ${stop.heading}`}
          className='scrub-range'
        />
        <div className='scrub-ticks'>
          {stops.map((s, i) => (
            <button
              key={s.label}
              type='button'
              className={`scrub-tick ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          className='scrub-panel'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          aria-live='polite'
        >
          <span className='scrub-date'>{stop.label}</span>
          <h3 className='scrub-heading'>{stop.heading}</h3>
          <p className='scrub-caption'>{stop.caption}</p>
          <ul className='scrub-points'>
            {stop.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
