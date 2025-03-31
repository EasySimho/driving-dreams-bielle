
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="chi-siamo" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Chi Siamo</h2>
            <p className="text-lg text-gray-600 mb-6">
              Autoscuola Biella Uno è un punto di riferimento nella formazione di nuovi conducenti a Biella. 
              Con anni di esperienza nel settore, offriamo un servizio professionale e personalizzato 
              per aiutarti a conseguire la patente in modo sicuro e veloce.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I nostri istruttori qualificati ti guideranno passo dopo passo nel percorso 
              verso il conseguimento della patente, con lezioni teoriche chiare e complete 
              e guide pratiche su misura per le tue esigenze.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Inoltre, offriamo una vasta gamma di servizi aggiuntivi, come il rinnovo patenti, 
              la conversione di patenti estere, e molto altro ancora.
            </p>
            <Button className="bg-biella-blue hover:bg-blue-800" size="lg" asChild>
              <a href="#contatti">Contattaci</a>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-biella-blue rounded-full absolute -top-6 -right-6 z-0"></div>
              <div className="w-72 h-72 md:w-80 md:h-80 bg-biella-red rounded-full absolute -bottom-6 -left-6 z-0"></div>
              <img
                src="/lovable-uploads/fef2acea-f271-49a5-a419-bff4e9eda66f.png"
                alt="Autoscuola Biella Uno"
                className="w-72 h-72 md:w-80 md:h-80 object-contain relative z-10 bg-white rounded-xl shadow-lg p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
