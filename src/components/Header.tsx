import React, { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { ActiveLink } from './Navigation/ActiveLink';
import { MobileMenu } from './Navigation/MobileMenu';
import { CallToAction } from './CTAs/CallToAction';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />
            <nav className="hidden md:flex space-x-8">
              <ActiveLink href="#sobre">Sobre</ActiveLink>
              <ActiveLink href="#servicos">Serviços</ActiveLink>
              <ActiveLink href="#contato">Contato</ActiveLink>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:+551934923099" className="hidden md:flex items-center text-white hover:text-red-400">
                <Phone className="w-5 h-5 mr-2" />
                (19) 3492-3099
              </a>
              <div className="hidden md:block">
                <CallToAction
                  text="Agende uma Consulta"
                  href="https://wa.me/5519992630104"
                  variant="secondary"
                />
              </div>
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}