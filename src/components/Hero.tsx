import React from 'react';
import { CallToAction } from './CTAs/CallToAction';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-900/80 mix-blend-multiply" />
        <img
          src="https://lh4.googleusercontent.com/v-YbCWT3RzdtN6ph0P_j4QPp9R8Oy83e2ruDS0zYB-YUS2a8tIuPFmP2tjCs9lIYfa_ApThQzZoRax6HMIEjzRaUYbs3kYipe0Y6lLv1dmBrkp_YFubqzFDxALi-A_CKKQ=w1280"
          alt="Escritório Hoppe Hoppe"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl animate-shine">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Excelência e Compromisso em Advocacia
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Defendendo seus direitos com dedicação e profissionalismo. Agende sua consulta hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CallToAction
              text="Agende Agora"
              href="https://wa.me/5519992630104"
              variant="primary"
            />
            <CallToAction
              text="Saiba Mais"
              href="#sobre"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}