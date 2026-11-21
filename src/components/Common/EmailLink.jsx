'use client';

export default function EmailLink({ className, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const user = 'matthewrstowers';
    const domain = 'gmail.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <a href='#contact' className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
