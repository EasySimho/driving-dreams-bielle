
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="chi-siamo" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className={`text-3xl md:text-4xl font-bold text-gray-800 mb-6 transform transition-all duration-500 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              Chi Siamo
            </h2>
            <p 
              className={`text-lg text-gray-600 mb-6 transition-all duration-500 delay-100 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              Autoscuola Biella Uno è un punto di riferimento nella formazione di nuovi conducenti a Biella. 
              Con anni di esperienza nel settore, offriamo un servizio professionale e personalizzato 
              per aiutarti a conseguire la patente in modo sicuro e veloce.
            </p>
            <p 
              className={`text-lg text-gray-600 mb-6 transition-all duration-500 delay-200 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              I nostri istruttori qualificati ti guideranno passo dopo passo nel percorso 
              verso il conseguimento della patente, con lezioni teoriche chiare e complete 
              e guide pratiche su misura per le tue esigenze.
            </p>
            <p 
              className={`text-lg text-gray-600 mb-8 transition-all duration-500 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              Inoltre, offriamo una vasta gamma di servizi aggiuntivi, come il rinnovo patenti, 
              la conversione di patenti estere, e molto altro ancora.
            </p>
            <Button 
              className={`bg-biella-blue hover:bg-blue-800 hover:scale-105 transition-all duration-300 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              size="lg" 
              asChild
            >
              <a href="#contatti">Contattaci</a>
            </Button>
          </div>
          <div 
            className={`flex justify-center transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-biella-blue rounded-full absolute -top-6 -right-6 z-0 animate-pulse"></div>
              <div className="w-72 h-72 md:w-80 md:h-80 bg-biella-red rounded-full absolute -bottom-6 -left-6 z-0 animate-pulse" style={{ animationDelay: "1s" }}></div>
              <img
                src="/lovable-uploads/fc26eac9-4b62-41bb-bb2c-e561fcf6d808.png"
                alt="Autoscuola Biella Uno"
                className="w-72 h-72 md:w-80 md:h-80 object-contain relative z-10 bg-white rounded-xl shadow-lg p-4 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
