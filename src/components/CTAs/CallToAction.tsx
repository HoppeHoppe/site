import React from 'react';

interface CallToActionProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function CallToAction({ text, href, variant = 'primary', className = '' }: CallToActionProps) {
  const baseStyles = "inline-block px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </a>
  );
}