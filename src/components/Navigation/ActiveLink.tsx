import React from 'react';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ActiveLink({ href, children }: ActiveLinkProps) {
  const isActive = window.location.hash === href;
  
  return (
    <a
      href={href}
      className={`text-white transition duration-300 border-b-2 ${
        isActive ? 'border-red-500 text-red-400' : 'border-transparent hover:text-red-400'
      }`}
    >
      {children}
    </a>
  );
}