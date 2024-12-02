import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
  const whatsappLink = `https://wa.me/5519992630104?text=${message}`;

  return (
    <a
      href={whatsappLink}
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-black/75 text-white px-4 py-2 rounded-lg text-sm">
            Fale conosco pelo WhatsApp
          </div>
        )}
        <div className="bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>
    </a>
  );
}