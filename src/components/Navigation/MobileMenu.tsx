import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-8 p-8">
        <a href="#sobre" onClick={onClose} className="text-2xl text-white hover:text-red-400 transition">
          Sobre
        </a>
        <a href="#servicos" onClick={onClose} className="text-2xl text-white hover:text-red-400 transition">
          Serviços
        </a>
        <a href="#contato" onClick={onClose} className="text-2xl text-white hover:text-red-400 transition">
          Contato
        </a>
        <a 
          href="https://wa.me/5519992630104" 
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Fale Conosco
        </a>
      </nav>
    </div>
  );
}