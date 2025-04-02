import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="chi-siamo" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-biella-blue relative">
              <span className="relative z-10">Chi Siamo</span>
              <span className="absolute -bottom-3 left-0 w-24 h-3 bg-biella-red opacity-70 z-0"></span>
            </h2>

            <div className="space-y-6 text-lg">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-biella-blue">Autoscuola Biella Uno</span> è un punto di riferimento
                nella formazione di nuovi conducenti a Biella da oltre <span className="italic">vent'anni</span>.
                Offriamo un servizio professionale e personalizzato per aiutarti a conseguire
                la patente in modo sicuro e con successo.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I nostri istruttori qualificati, con la loro esperienza e passione,
                ti guideranno passo dopo passo nel percorso verso il tuo traguardo,
                con lezioni teoriche dinamiche e guide pratiche su misura.
              </p>




            </div>
          </div>

          <div className="relative h-96 order-1 md:order-2">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-biella-blue rounded-full absolute -top-6 right-12 z-0 opacity-80 blur-sm"></div>
              <div className="w-64 h-64 md:w-72 md:h-72 bg-biella-red rounded-full absolute bottom-0 left-10 z-0 opacity-80 blur-sm"></div>

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative bg-white rounded-xl shadow-xl p-3 transform rotate-3 transition-transform hover:rotate-0 duration-300">
                  <img
                    src="/lovable-uploads/fc26eac9-4b62-41bb-bb2c-e561fcf6d808.png"
                    alt="Autoscuola Biella Uno"
                    className="w-64 h-64 md:w-72 md:h-72 object-contain rounded-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-biella-blue text-white py-2 px-4 rounded-lg shadow-lg text-sm font-bold">
                    Dal 2000 al tuo fianco
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}