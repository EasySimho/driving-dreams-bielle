import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "N. Z.",
    text: "Consiglio a tutti i ragazzi e ragazze l'autoscuola Biella uno, lo staff è gentilissimo e sono subito pronti ad aiutarti! Ti preparano a superare gli esami in modo molto efficiente!",
    rating: 5
  },
  {
    name: "A. E. Z.",
    text: "Personale molto cordiale e professionale, istruttori preparati e ambiente piacevole.",
    rating: 5
  },
  {
    name: "I. E.",
    text: "Nessuno si pentirà di aver frequentato questa scuola guida, sono professionisti, Grazie a Giacomo, Andrea e Pino ❤️ ❤️ ❤️ ❤️ ❤️ ❤️",
    rating: 5
  },
  {
    name: "G.",
    text: "Lo staff gentilissimi, disponibili e cordiale. Sono veramente persone oneste al 100%. Lo consiglio vivamente a tutti.",
    rating: 5
  },
  {
    name: "H.",
    text: "Ottima autoscuola, buonissimo rapporto qualità prezzo. Ottimo personale, cordiale e gentile, ottimi i metodi di insegnamento, super moderni dal punto di vista comunicativo, con la super presenza anche social. Ti seguono per qualsiasi problematica aiutando efficacemente per la risoluzione stessa, consigliatissimo. Motzo Gian Mario",
    rating: 5
  },
  {
    name: "M. A.",
    text: "Sono rimasto molto soddisfatto di come hanno seguito mio figlio. E' stato accompagnato passo passo per tutto il percorso, dall'iscrizione, al corso di preparazione per l'esame di teoria, fino alla guida, con un istruttore giovane e disponibilissimo. 5 stelle, meritatissime! Ve lo consiglio!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Dicono di Noi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scopri cosa pensano i nostri studenti della loro esperienza con Autoscuola Biella Uno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-gray-900 font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
      <div className="text-center mt-12">
        <p className="text-gray-400 mb-4">Vuoi lasciare la tua opinione?</p>
        <a href="https://altraopinione.org/" className="inline-block px-6 py-3 text-grey-500 font-semibold underline">
        altraopinione.org
        </a>
      </div>
    </section>
  );
}