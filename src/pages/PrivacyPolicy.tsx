
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-biella-blue text-white">
            <CardTitle className="text-3xl font-bold">Informativa sulla Privacy</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">1. Introduzione</h2>
              <p className="text-gray-700">
                Autoscuola Biella Uno rispetta la tua privacy e si impegna a proteggere i tuoi dati personali. 
                Questa informativa sulla privacy ti spiegherà come raccogliamo, utilizziamo, condividiamo e proteggiamo i tuoi dati 
                quando visiti il nostro sito web o utilizzi i nostri servizi.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">2. Dati raccolti</h2>
              <p className="text-gray-700">
                Potremmo raccogliere le seguenti informazioni:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Informazioni di contatto (nome, email, numero di telefono)</li>
                <li>Informazioni demografiche (età, sesso, codice fiscale)</li>
                <li>Dati relativi alla patente di guida</li>
                <li>Informazioni di pagamento</li>
                <li>Dati di navigazione e utilizzo del sito web</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">3. Utilizzo dei dati</h2>
              <p className="text-gray-700">
                Utilizziamo i tuoi dati personali per:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fornire e gestire i nostri servizi di autoscuola</li>
                <li>Comunicare con te riguardo ai corsi, esami e scadenze</li>
                <li>Processare pagamenti</li>
                <li>Migliorare il nostro sito web e i nostri servizi</li>
                <li>Conformarci agli obblighi legali</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">4. Conservazione dei dati</h2>
              <p className="text-gray-700">
                Conserviamo i tuoi dati personali solo per il tempo necessario agli scopi per cui li abbiamo raccolti, 
                inclusi gli obblighi legali e fiscali.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">5. I tuoi diritti</h2>
              <p className="text-gray-700">
                Hai il diritto di:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Accedere ai tuoi dati personali</li>
                <li>Correggere i tuoi dati personali</li>
                <li>Cancellare i tuoi dati personali</li>
                <li>Limitare il trattamento dei tuoi dati</li>
                <li>Opporti al trattamento dei tuoi dati</li>
                <li>Richiedere la portabilità dei dati</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">6. Contatti</h2>
              <p className="text-gray-700">
                Per qualsiasi domanda riguardante questa informativa sulla privacy o le nostre pratiche in materia di dati, 
                contattaci a:
              </p>
              <p className="text-gray-700">
                Autoscuola Biella Uno<br />
                Via Fratelli Rosselli 23/B<br />
                13900 Biella (BI)<br />
                Email: info@biellauno.it<br />
                Telefono: +39 015 402914
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">7. Modifiche all'informativa</h2>
              <p className="text-gray-700">
                Potremmo aggiornare questa informativa sulla privacy di tanto in tanto. 
                Ti informeremo di eventuali modifiche pubblicando la nuova informativa sulla privacy su questa pagina.
              </p>
              <p className="text-gray-700">
                Ultima modifica: 10 Maggio 2024
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
