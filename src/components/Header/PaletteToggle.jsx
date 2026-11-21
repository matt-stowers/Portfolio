'use client';

import { useEffect, useState } from 'react';

const palettes = [
  { id: 'space', label: 'Space', a: '#7de8f3', b: '#b7a3ff' },
  { id: 'ember', label: 'Ember', a: '#ffa266', b: '#ff7a8a' },
  { id: 'aurora', label: 'Aurora', a: '#6ee7a8', b: '#b5f08a' },
  { id: 'rose', label: 'Rose', a: '#ff7ac6', b: '#c9a7ff' },
];

export default function PaletteToggle() {
  const [palette, setPalette] = useState('space');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('palette');
      if (saved && palettes.some((p) => p.id === saved)) {
        setPalette(saved);
        document.documentElement.dataset.palette = saved;
      }
    } catch {}
  }, []);

  const choose = (id) => {
    setPalette(id);
    document.documentElement.dataset.palette = id;
    try {
      localStorage.setItem('palette', id);
    } catch {}
  };

  return (
    <div className='palette-toggle' role='group' aria-label='Color scheme'>
      {palettes.map((p) => (
        <button
          key={p.id}
          type='button'
          className={`palette-swatch ${palette === p.id ? 'is-active' : ''}`}
          style={{
            background: `linear-gradient(135deg, ${p.a} 50%, ${p.b} 50%)`,
          }}
          aria-label={`${p.label} color scheme`}
          aria-pressed={palette === p.id}
          onClick={() => choose(p.id)}
        />
      ))}
    </div>
  );
}
