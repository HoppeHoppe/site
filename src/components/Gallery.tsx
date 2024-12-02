import React from 'react';

const images = [
  {
    src: "https://lh3.googleusercontent.com/h7sIDykbOgGO25zveVxj7YLU9FLcO9TOtGONGNvdH3OvAkbH1xFscuhIlbjhV-RRJs7KwSYsY9fbC5qbfo3ffE0Uaq7MRqwXyRdL7Hx3PCDxQ1x1T8gW98UMUXRqBCdkLA=w1280",
    alt: "Entrada do escritório"
  },
  {
    src: "https://lh3.googleusercontent.com/eQ5Ulb_Xcd8JcG5iuahEczFCB3QptvnInBX4nj4hXZW1hl-Qdhr1odm2LxMwai7qoLKgUW-St1sBizm-cRNR-0m-q9aNry1Uic9nhJip6_BdghW0x2LhNcx0Utn6MQiH0w=w1280",
    alt: "Recepção"
  }
];

export function Gallery() {
  return (
    <section className="py-16 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Conheça Nosso Escritório</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}