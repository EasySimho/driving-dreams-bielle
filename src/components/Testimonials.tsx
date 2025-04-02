import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

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
    text: "Ottima autoscuola, buonissimo rapporto qualità prezzo. Ottimo personale, cordiale e gentile, ottimi i metodi di insegnamento, super moderni dal punto di vista comunicativo, con la super presenza anche social.",
    rating: 5
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dicono di Noi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri cosa pensano i nostri studenti della loro esperienza con Autoscuola Biella Uno.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <CardContent className="p-8">
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-gray-100 transition-transform duration-300 group-hover:scale-110" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 relative z-10">"{testimonial.text}"</p>
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}