import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Anchor, Award, FileText, RefreshCw, Clock, X } from "lucide-react";

const services = [
  {
    icon: <Car className="h-10 w-10" />,
    title: "Patenti Auto",
    description: "Patenti AM-A-B-C-D-E + BE/B96 per rimorchi",
    color: "bg-blue-100",
    details: [
      "Corsi teorici con lezioni interattive",
      "Guide personalizzate con istruttori qualificati",
      "Esercitazioni su simulatore di guida avanzato",
      "Supporto completo per il conseguimento di patenti speciali",
      "Materiale didattico incluso e app per esercitazioni"
    ]
  },
  {
    icon: <Anchor className="h-10 w-10" />,
    title: "Patente Nautica", 
    description: "Corsi per patente nautica entro e oltre 12 miglia",
    color: "bg-cyan-100",
    details: [
      "Corsi per patenti entro e oltre le 12 miglia",
      "Lezioni di navigazione pratica",
      "Studio delle carte nautiche e strumenti di navigazione",
      "Preparazione completa all'esame teorico e pratico",
      "Uscite in mare con imbarcazioni scuola"
    ]
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "CQC",
    description: "Corsi CQC merci/persone (conseguimento e rinnovo)",
    color: "bg-yellow-100",
    details: [
      "Corsi CQC per trasporto merci e persone",
      "Procedure di rinnovo semplificate",
      "Aggiornamenti normativi continuativi",
      "Lezioni con docenti specializzati nel settore",
      "Possibilità di frequenza nei weekend"
    ]
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Pratiche Auto",
    description: "Duplicato, conversione patenti UE/Extra UE",
    color: "bg-purple-100",
    details: [
      "Conversione patenti estere UE ed Extra UE",
      "Duplicati per smarrimento o deterioramento",
      "Assistenza per rinnovo patenti scadute",
      "Gestione pratiche per revisione e sospensione",
      "Servizio di consulenza personalizzata"
    ]
  },
  {
    icon: <RefreshCw className="h-10 w-10" />,
    title: "Recupero Punti",
    description: "Corso recupero punti patente",
    color: "bg-green-100",
    details: [
      "Corsi di recupero punti per tutte le patenti",
      "Sessioni intensive nel weekend",
      "Recupero fino a 9 punti in un solo corso",
      "Docenti con esperienza pluriennale",
      "Gestione completa della pratica amministrativa"
    ]
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Rinnovo Immediato",
    description: "Patente in scadenza? Rinnovo immediato con medico in sede",
    color: "bg-red-100",
    details: [
      "Medico in sede per visite immediate",
      "Rinnovo patente in giornata",
      "Prenotazione online senza attese",
      "Servizio disponibile anche il sabato",
      "Esame della vista e controlli completi"
    ]
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (index) => {
    setSelectedService(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">I NOSTRI SERVIZI</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tutto ciò di cui hai <span className="text-blue-600">bisogno</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da oltre 20 anni offriamo servizi di qualità per soddisfare ogni tua esigenza nel mondo delle patenti e pratiche auto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className={`h-full border-none bg-white shadow-md overflow-hidden ${hoveredIndex === index ? 'shadow-xl ring-2 ring-blue-400' : ''}`}>
                <CardContent className="p-8 relative">
                  <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-20 ${service.color}`}></div>
                  <div className={`mb-6 p-4 rounded-full inline-flex ${service.color} text-blue-800`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div 
                    className={`mt-6 text-blue-600 font-medium flex items-center cursor-pointer ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                    onClick={() => openModal(index)}
                  >
                    <span>Scopri di più</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-fadeIn"
            style={{animationDuration: '0.3s'}}
          >
            <div className="p-6 border-b sticky top-0 bg-white flex justify-between items-center">
              <div className="flex items-center">
                <div className={`p-3 rounded-full mr-4 ${services[selectedService].color} text-blue-800`}>
                  {services[selectedService].icon}
                </div>
                <h3 className="text-2xl font-bold">{services[selectedService].title}</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-gray-100"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">{services[selectedService].description}</p>
              
              <h4 className="font-semibold text-lg mb-4">Caratteristiche del servizio:</h4>
              <ul className="space-y-3">
                {services[selectedService].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold text-lg mb-4">Contattaci per questo servizio</h4>
                <p className="text-gray-600 mb-4">Vuoi maggiori informazioni o prenotare una consulenza?</p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={closeModal} className="bg-blue-600 hover:bg-blue-700 text-white">
                    <a href="/#contatti">Prenota ora</a>
                  </Button>
                  <Button  variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <a href="tel:+39015402914">Chiama 015 402914</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}