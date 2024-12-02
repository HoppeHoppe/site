import React from 'react';
import { LawyerCard } from './LawyerCard';

const lawyers = [
  {
    name: 'DRA. SOLANGE M.M. HOPPE PADILHA',
    oab: '60.759',
    specialties: 'Especialista em Direito Civil, Família e Sucessões'
  },
  {
    name: 'DR. GUSTAVO F. LUX HOPPE',
    oab: '251.292',
    specialties: 'Especialista em Direito Trabalhista e Previdenciário'
  },
  {
    name: 'DR. JOÃO LUIS TONIN JUNIOR',
    oab: '284.179',
    specialties: 'Especialista em Direito Criminal e Trabalhista'
  },
  {
    name: 'DRA. ANNE VIEIRA FERREIRA',
    oab: '405.751',
    specialties: 'Especialista em Direito Civil, Família e Sucessões'
  }
];

export function TeamSection() {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lawyers.map((lawyer) => (
            <LawyerCard
              key={lawyer.oab}
              name={lawyer.name}
              oab={lawyer.oab}
              specialties={lawyer.specialties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}