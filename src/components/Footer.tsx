
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/lovable-uploads/fc26eac9-4b62-41bb-bb2c-e561fcf6d808.png"
              alt="Autoscuola Biella Uno"
              className="h-16 mb-4"
            />
            <p className="text-gray-400 mb-4">
              La tua autoscuola di fiducia a Biella per conseguire qualsiasi tipo di patente.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/BiellaUno" className="text-white hover:text-biella-red transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Collegamenti Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#servizi" className="text-gray-400 hover:text-white transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#corsi" className="text-gray-400 hover:text-white transition-colors">
                  Corsi
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-gray-400 hover:text-white transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-gray-400 hover:text-white transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contatti</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Via Fratelli Rosselli 23/B</p>
              <p className="mb-2">13900 Biella (BI)</p>
              <p className="mb-2">Tel: +39 015 402914</p>
              <p className="mb-2">Email: info@biellauno.it</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© {currentYear} Autoscuola Biella Uno. Tutti i diritti riservati.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-gray-400 transition-colors ml-2">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
