import React from 'react';
import { Scale } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Scale className="w-8 h-8 text-red-600" />
      <span className="text-2xl font-bold text-white">Hoppe Hoppe</span>
    </div>
  );
}