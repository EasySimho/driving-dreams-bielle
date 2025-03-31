
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Courses() {
  return (
    <section id="corsi" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">I Nostri Corsi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offriamo corsi completi per ogni tipo di patente, con lezioni teoriche e pratiche tenute da istruttori esperti e qualificati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-biella-blue py-4">
              <h3 className="text-xl font-bold text-center text-white">Patente B</h3>
            </div>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-blue mr-2 mt-0.5" />
                  <span>Corso teorico completo</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-blue mr-2 mt-0.5" />
                  <span>Materiale didattico incluso</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-blue mr-2 mt-0.5" />
                  <span>Quiz ed esercitazioni</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-blue mr-2 mt-0.5" />
                  <span>Guide pratiche con istruttore</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-blue mr-2 mt-0.5" />
                  <span>Accompagnamento all'esame</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-biella-blue hover:bg-blue-800" asChild>
                  <a href="#contatti">Richiedi Info</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-biella-red py-4">
              <h3 className="text-xl font-bold text-center text-white">Patente A/AM</h3>
            </div>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-red mr-2 mt-0.5" />
                  <span>Corso teorico specifico per motocicli</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-red mr-2 mt-0.5" />
                  <span>Materiale didattico incluso</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-red mr-2 mt-0.5" />
                  <span>Quiz ed esercitazioni</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-red mr-2 mt-0.5" />
                  <span>Prove pratiche in area chiusa</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-biella-red mr-2 mt-0.5" />
                  <span>Guide su strada con istruttore</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-biella-red hover:bg-red-700" asChild>
                  <a href="#contatti">Richiedi Info</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-700 py-4">
              <h3 className="text-xl font-bold text-center text-white">Patente C/D/E</h3>
            </div>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-2 mt-0.5" />
                  <span>Corso teorico specializzato</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-2 mt-0.5" />
                  <span>Materiale didattico professionale</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-2 mt-0.5" />
                  <span>Quiz ed esercitazioni specifiche</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-2 mt-0.5" />
                  <span>Guide pratiche con mezzi pesanti</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-gray-700 mr-2 mt-0.5" />
                  <span>Preparazione CQC integrata</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-gray-700 hover:bg-gray-800" asChild>
                  <a href="#contatti">Richiedi Info</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
