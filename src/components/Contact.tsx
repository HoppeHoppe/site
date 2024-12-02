import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Entre em Contato</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Endereço</h3>
                  <p className="text-white/80">Rua Fernando de Barros, 636, Centro, Capivari/SP</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Telefones</h3>
                  <p className="text-white/80">
                    <a href="tel:+551934923099">(19) 3492-3099</a>
                    <br />
                    <a href="https://wa.me/5519992630104">(19) 99263-0104 (WhatsApp)</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Instagram</h3>
                  <a href="https://instagram.com/hoppehoppeadvogados" className="text-white/80 hover:text-red-400">
                    @hoppehoppeadvogados
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7!2d-47.5!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8998c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sRua%20Fernando%20de%20Barros%2C%20636%20-%20Centro%2C%20Capivari%20-%20SP!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
              className="w-full h-96 rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}