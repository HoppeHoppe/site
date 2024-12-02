import React from 'react';
import type { IconProps } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<IconProps>;
}

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105">
      <Icon className="w-12 h-12 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}