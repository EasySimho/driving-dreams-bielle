import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/hero/1.jpg",
    "/hero/2.jpg",
    "/hero/3.jpg",
    "/hero/4.jpg"
  ];
  
  // Cambia immagine ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen">
      {/* Immagini di sfondo che ruotano */}
      {backgroundImages.map((img, index) => (
        <div 
          key={index}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      
      {/* Overlay scuro per migliorare la leggibilità del testo */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Contenuto testuale - ora con z-index superiore */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Autoscuola Biella Uno
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
              La tua strada verso la patente inizia qui
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Siamo un'autoscuola moderna e professionale a Biella, con istruttori qualificati 
              pronti ad aiutarti a ottenere la patente in modo semplice e veloce.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-biella-blue hover:bg-gray-100" asChild>
                <a href="#servizi">Scopri i nostri servizi</a>
              </Button>
              <Button size="lg" className="bg-biella-red hover:bg-red-700" asChild>
                <a href="#contatti">Contattaci ora</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}