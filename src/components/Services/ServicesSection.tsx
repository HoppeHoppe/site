import React from 'react';
import { Scale, Users, Heart, Shield, Gavel, Briefcase } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'Direito Civil',
    description: 'Assessoria completa em questões civis, contratos e responsabilidade civil.',
    Icon: Scale
  },
  {
    title: 'Direito de Família',
    description: 'Suporte especializado em divórcio, guarda, pensão e relações familiares.',
    Icon: Heart
  },
  {
    title: 'Direito Sucessório',
    description: 'Orientação em inventários, testamentos e partilha de bens.',
    Icon: Users
  },
  {
    title: 'Direito Previdenciário',
    description: 'Auxílio em aposentadorias, benefícios e questões junto ao INSS.',
    Icon: Shield
  },
  {
    title: 'Direito Criminal',
    description: 'Defesa criminal especializada e assessoria jurídica completa.',
    Icon: Gavel
  },
  {
    title: 'Direito Trabalhista',
    description: 'Proteção dos direitos trabalhistas e resolução de conflitos.',
    Icon: Briefcase
  }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Áreas de Atuação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}