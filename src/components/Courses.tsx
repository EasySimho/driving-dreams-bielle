import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Car, Bike, Truck, X, Calendar, Users, Award } from "lucide-react";
import React, { useState } from "react";

const courses = [
  {
    title: "Patente B",
    color: "bg-biella-blue",
    hoverColor: "hover:bg-blue-800",
    textColor: "text-biella-blue",
    icon: <Car className="h-10 w-10" />,
    features: [
      "Corso teorico completo",
      "Materiale didattico incluso",
      "Quiz ed esercitazioni",
      "Guide pratiche con istruttore",
      "Accompagnamento all'esame"
    ],
    details: {
      description: "Il corso per la patente B ti permette di guidare autoveicoli con massa massima fino a 3,5 tonnellate e fino a 8 posti a sedere oltre al conducente.",
      duration: "6-8 settimane",
      requirements: "18 anni compiuti, certificato medico, documento d'identità valido",
      price: "A partire da €750",
      schedule: [
        "Lezioni teoriche: Lunedì e Mercoledì 18:00-20:00",
        "Guide pratiche: su appuntamento",
        "Quiz simulazione esame: Venerdì 17:00-19:00"
      ],
      benefits: [
        "Istruttori con oltre 15 anni di esperienza",
        "Veicoli di ultima generazione",
        "Tasso di successo del 95% al primo tentativo",
        "Supporto personalizzato per studenti con difficoltà"
      ]
    }
  },
  {
    title: "Patente A/AM",
    color: "bg-biella-red",
    hoverColor: "hover:bg-red-700",
    textColor: "text-biella-red",
    icon: <Bike className="h-10 w-10" />,
    features: [
      "Corso teorico specifico per motocicli",
      "Materiale didattico incluso",
      "Quiz ed esercitazioni",
      "Prove pratiche in area chiusa",
      "Guide su strada con istruttore"
    ],
    details: {
      description: "Il corso per le patenti A e AM ti permette di guidare ciclomotori e motocicli di varie cilindrate in base alla specifica categoria.",
      duration: "4-6 settimane",
      requirements: "16 anni per AM, 18 anni per A2, 24 anni per A (o 20 anni con 2 anni di A2), certificato medico",
      price: "A partire da €600",
      schedule: [
        "Lezioni teoriche: Martedì e Giovedì 18:00-20:00",
        "Prove pratiche: Sabato mattina in area chiusa",
        "Guide su strada: su appuntamento"
      ],
      benefits: [
        "Istruttori specializzati in guida motociclistica",
        "Moto di varie cilindrate per le esercitazioni",
        "Equipaggiamento di sicurezza fornito durante le prove",
        "Sessioni video di analisi della guida"
      ]
    }
  },
  {
    title: "Patente C/D/E",
    color: "bg-gray-700",
    hoverColor: "hover:bg-gray-800",
    textColor: "text-gray-700",
    icon: <Truck className="h-10 w-10" />,
    features: [
      "Corso teorico specializzato",
      "Materiale didattico professionale",
      "Quiz ed esercitazioni specifiche",
      "Guide pratiche con mezzi pesanti",
      "Preparazione CQC integrata"
    ],
    details: {
      description: "I corsi per patenti C, D ed E ti abilitano alla guida di mezzi pesanti, autobus e veicoli con rimorchio, aprendo opportunità professionali nel settore dei trasporti.",
      duration: "8-12 settimane",
      requirements: "Patente B, 21 anni per C, 24 anni per D (o 21 con CQC), certificato medico speciale",
      price: "A partire da €1200",
      schedule: [
        "Lezioni teoriche: Lunedì e Venerdì 17:00-20:00",
        "Esercitazioni pratiche: su appuntamento",
        "Corso CQC integrato: weekend alternati"
      ],
      benefits: [
        "Istruttori con esperienza diretta nel settore trasporti",
        "Preparazione completa per inserimento lavorativo",
        "Mezzi di ultima generazione per le esercitazioni",
        "Assistenza per il collocamento lavorativo"
      ]
    }
  }
];

export default function Courses() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (index) => {
    setSelectedCourse(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="corsi" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium text-sm mb-4">FORMAZIONE COMPLETA</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Corsi per <span className="text-biella-blue">ogni esigenza</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dalla teoria alla pratica, ti accompagniamo in ogni fase del tuo percorso con istruttori qualificati e metodologie all'avanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className={`overflow-hidden shadow-md hover:shadow-xl transition-all ${hoveredIndex === index ? 'ring-2 ring-opacity-50 ' + course.textColor : ''}`}>
                <div className={`${course.color} py-8 px-4 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-bl-full"></div>
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-3 rounded-full mb-4">
                      <div className={course.textColor}>{course.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-center text-white">{course.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-6 pb-8">
                  <div className="space-y-4">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start group">
                        <div className={`flex-shrink-0 h-5 w-5 rounded-full ${course.color} opacity-20 flex items-center justify-center mt-0.5 mr-3 group-hover:opacity-100 transition-opacity`}>
                          <Check className={`h-3 w-3 text-white`} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center space-x-3">
                    <Button className={`${course.color} ${course.hoverColor} text-white font-medium`} asChild>
                      <a href="#contatti">Richiedi Info</a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className={`border-2 ${course.textColor} hover:bg-gray-100`}
                      onClick={() => openModal(index)}
                    >
                      Dettagli
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedCourse !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-fadeIn"
            style={{animationDuration: '0.3s'}}
          >
            <div className={`${courses[selectedCourse].color} p-6 sticky top-0 flex justify-between items-center`}>
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full mr-4">
                  <div className={courses[selectedCourse].textColor}>{courses[selectedCourse].icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white">{courses[selectedCourse].title}</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full text-white hover:bg-white hover:bg-opacity-20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Descrizione del corso</h4>
                <p className="text-gray-700">{courses[selectedCourse].details.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 mr-2 text-gray-700" />
                    <h5 className="font-semibold">Durata</h5>
                  </div>
                  <p className="text-gray-700">{courses[selectedCourse].details.duration}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 mr-2 text-gray-700" />
                    <h5 className="font-semibold">Requisiti</h5>
                  </div>
                  <p className="text-gray-700">{courses[selectedCourse].details.requirements}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Prezzo</h4>
                <p className={`text-2xl font-bold ${courses[selectedCourse].textColor}`}>
                  {courses[selectedCourse].details.price}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Possibilità di pagamento rateizzato senza interessi
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">Calendario</h4>
                <ul className="space-y-2">
                  {courses[selectedCourse].details.schedule.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5 mr-3">
                        <span className="text-gray-700 text-xs">•</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-3">I nostri punti di forza</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courses[selectedCourse].details.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 h-5 w-5 rounded-full ${courses[selectedCourse].color} flex items-center justify-center mt-0.5 mr-3`}>
                        <Award className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap gap-4">
                  <Button className={`${courses[selectedCourse].color} ${courses[selectedCourse].hoverColor} text-white`} asChild>
                    <a href="#contatti">Iscriviti ora</a>
                  </Button>
                  <Button variant="outline" className={`border-2 ${courses[selectedCourse].textColor}`} asChild>
                    <a href="#contatti">Richiedi consulenza</a>
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