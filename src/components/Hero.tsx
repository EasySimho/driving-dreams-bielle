
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="hero-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl bg-black/60 p-6 md:p-8 rounded-lg backdrop-blur-sm">
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
