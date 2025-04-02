
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-4">
              <Link to="/" className="text-gray-600 hover:text-biella-red flex items-center transition-colors">
                <ChevronLeft size={20} className="mr-1" />
                <span>Torna alla Home</span>
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Informativa sulla Privacy</h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduzione</h2>
              <p>Benvenuto sul sito web di Autoscuola Biella Uno. La tua privacy è importante per noi. Questa Informativa sulla Privacy ha lo scopo di spiegare come raccogliamo, utilizziamo, condividiamo e proteggiamo le informazioni personali che otteniamo tramite il nostro sito web e durante la fornitura dei nostri servizi.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Informazioni che Raccogliamo</h2>
              <p>Possiamo raccogliere i seguenti tipi di informazioni personali:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Informazioni di contatto</strong>: nome, indirizzo email, numero di telefono e indirizzo postale.</li>
                <li><strong>Informazioni di identificazione</strong>: data di nascita, codice fiscale, dati della patente di guida.</li>
                <li><strong>Informazioni sul pagamento</strong>: dettagli della carta di credito/debito o altre informazioni di pagamento.</li>
                <li><strong>Dati tecnici</strong>: indirizzo IP, tipo di browser, provider di servizi internet, dati di accesso e uscita, sistema operativo.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Come Utilizziamo le Tue Informazioni</h2>
              <p>Utilizziamo le informazioni personali che raccogliamo per:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fornire e gestire i nostri servizi di autoscuola.</li>
                <li>Comunicare con te riguardo ai nostri servizi, promozioni o eventi.</li>
                <li>Elaborare pagamenti e gestire la tua iscrizione ai corsi.</li>
                <li>Rispondere alle tue domande e richieste di informazioni.</li>
                <li>Migliorare il nostro sito web e i nostri servizi.</li>
                <li>Adempiere ai nostri obblighi legali e regolamentari.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Condivisione delle Informazioni</h2>
              <p>Potremmo condividere le tue informazioni personali con:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fornitori di servizi che ci aiutano a gestire il nostro business e a fornire i nostri servizi.</li>
                <li>Partner commerciali con cui offriamo prodotti o servizi in collaborazione.</li>
                <li>Autorità governative o altri terzi quando richiesto dalla legge o per proteggere i nostri diritti.</li>
              </ul>
              <p>Non vendiamo o affittiamo le tue informazioni personali a terzi per scopi di marketing senza il tuo consenso esplicito.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. I Tuoi Diritti</h2>
              <p>Hai diritti specifici riguardo alle tue informazioni personali, tra cui:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Il diritto di accedere alle informazioni che abbiamo su di te.</li>
                <li>Il diritto di richiedere la correzione di informazioni inesatte.</li>
                <li>Il diritto di richiedere la cancellazione delle tue informazioni personali.</li>
                <li>Il diritto di opporti al trattamento dei tuoi dati personali.</li>
                <li>Il diritto alla portabilità dei dati.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Sicurezza dei Dati</h2>
              <p>Adottiamo misure di sicurezza tecniche e organizzative per proteggere le tue informazioni personali da accessi non autorizzati, perdita o alterazione. Tuttavia, nessun sistema di sicurezza è impenetrabile e non possiamo garantire la sicurezza assoluta delle tue informazioni.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Modifiche alla Privacy Policy</h2>
              <p>Possiamo aggiornare questa Privacy Policy periodicamente per riflettere cambiamenti nelle nostre pratiche o per altri motivi operativi, legali o normativi. Ti invitiamo a rivedere regolarmente questa pagina per restare informato sulle nostre pratiche di privacy.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Contattaci</h2>
              <p>Se hai domande o preoccupazioni riguardo alla nostra Privacy Policy o alle tue informazioni personali, contattaci a:</p>
              <address className="not-italic">
                <p>Autoscuola Biella Uno</p>
                <p>Via Fratelli Rosselli 23/B</p>
                <p>13900 Biella (BI)</p>
                <p>Email: info@biellauno.it</p>
                <p>Telefono: +39 015 402914</p>
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
