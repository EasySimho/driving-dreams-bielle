
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/fc26eac9-4b62-41bb-bb2c-e561fcf6d808.png" 
            alt="Autoscuola Biella Uno" 
            className="h-14 w-auto"
          />
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8">
          <a href="/#home" className="font-medium text-gray-700 hover:text-biella-red transition-colors">Home</a>
          <a href="/#servizi" className="font-medium text-gray-700 hover:text-biella-red transition-colors">Servizi</a>
          <a href="/#corsi" className="font-medium text-gray-700 hover:text-biella-red transition-colors">Corsi</a>
          <a href="/#chi-siamo" className="font-medium text-gray-700 hover:text-biella-red transition-colors">Chi Siamo</a>
          <a href="/#contatti" className="font-medium text-gray-700 hover:text-biella-red transition-colors">Contatti</a>
        </div>

        <div className="hidden lg:block">
          <Button className="bg-biella-red hover:bg-red-700 text-white" asChild>
            <a href="#contatti">Richiedi Info</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a 
              href="#home" 
              className="py-2 font-medium text-gray-700 hover:text-biella-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#servizi" 
              className="py-2 font-medium text-gray-700 hover:text-biella-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servizi
            </a>
            <a 
              href="#corsi" 
              className="py-2 font-medium text-gray-700 hover:text-biella-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Corsi
            </a>
            <a 
              href="#chi-siamo" 
              className="py-2 font-medium text-gray-700 hover:text-biella-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </a>
            <a 
              href="#contatti" 
              className="py-2 font-medium text-gray-700 hover:text-biella-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </a>
            <Button className="bg-biella-red hover:bg-red-700 text-white w-full" asChild>
              <a href="#contatti" onClick={() => setIsMenuOpen(false)}>Richiedi Info</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
