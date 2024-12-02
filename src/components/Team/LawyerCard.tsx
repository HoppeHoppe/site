import React from 'react';

interface LawyerCardProps {
  name: string;
  oab: string;
  specialties: string;
  imageUrl?: string;
}

export function LawyerCard({ name, oab, specialties, imageUrl }: LawyerCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-red-400 font-semibold mb-2">OAB/SP: {oab}</p>
        <p className="text-white/80">{specialties}</p>
      </div>
    </div>
  );
}