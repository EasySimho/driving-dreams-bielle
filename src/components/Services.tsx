
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Anchor, Award, FileText, RefreshCw, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Car className="h-10 w-10 text-biella-blue" />,
      title: "Patenti Auto",
      description: "Patenti AM-A-B-C-D-E + BE/B96 per rimorchi"
    },
    {
      icon: <Anchor className="h-10 w-10 text-biella-blue" />,
      title: "Patente Nautica",
      description: "Corsi per patente nautica entro e oltre 12 miglia"
    },
    {
      icon: <Award className="h-10 w-10 text-biella-blue" />,
      title: "CQC",
      description: "Corsi CQC merci/persone (conseguimento e rinnovo)"
    },
    {
      icon: <FileText className="h-10 w-10 text-biella-blue" />,
      title: "Pratiche Auto",
      description: "Duplicato, conversione patenti UE/Extra UE"
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-biella-blue" />,
      title: "Recupero Punti",
      description: "Corso recupero punti patente"
    },
    {
      icon: <Clock className="h-10 w-10 text-biella-blue" />,
      title: "Rinnovo Immediato",
      description: "Patente in scadenza? Rinnovo immediato con medico in sede"
    }
  ];

  return (
    <section id="servizi" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">I Nostri Servizi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offriamo una vasta gamma di servizi per soddisfare tutte le tue esigenze nel campo delle patenti e pratiche auto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-t-4 border-biella-blue hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-center text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
