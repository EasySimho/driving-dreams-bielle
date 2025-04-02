
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-biella-blue/90 to-biella-red/80 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              Autoscuola Biella Uno
            </h1>
            <h2 
              className="text-2xl md:text-3xl font-medium text-white mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              La tua strada verso la patente inizia qui
            </h2>
            <p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl opacity-0 animate-fade-in"
              style={{ animationDelay: '600ms' }}
            >
              Siamo un'autoscuola moderna e professionale a Biella, con istruttori qualificati 
              pronti ad aiutarti a ottenere la patente in modo semplice e veloce.
            </p>
            <div 
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '800ms' }}
            >
              <Button 
                size="lg" 
                className="bg-white text-biella-blue hover:bg-gray-100 hover:scale-105 transition-transform duration-300" 
                asChild
              >
                <a href="#servizi">
                  Scopri i nostri servizi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-biella-red hover:bg-red-700 hover:scale-105 transition-transform duration-300" 
                asChild
              >
                <a href="#contatti">Contattaci ora</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 right-40 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-60 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
