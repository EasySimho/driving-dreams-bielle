
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
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
            <h1 className="text-4xl font-bold text-gray-800">Cookie Policy</h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Cosa Sono i Cookie</h2>
              <p>I cookie sono piccoli file di testo che vengono archiviati sul tuo dispositivo (computer, tablet o telefono cellulare) quando visiti un sito web. I cookie sono ampiamente utilizzati per far funzionare i siti web in modo più efficiente, nonché per fornire informazioni ai proprietari del sito.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Come Utilizziamo i Cookie</h2>
              <p>Utilizziamo i cookie per diversi scopi, tra cui:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Cookie essenziali</strong>: Necessari per il funzionamento del sito web. Senza questi cookie, il sito web non funzionerebbe correttamente.</li>
                <li><strong>Cookie funzionali</strong>: Utilizzati per riconoscerti quando ritorni sul nostro sito web e per personalizzare i contenuti e ricordare le tue preferenze.</li>
                <li><strong>Cookie analitici</strong>: Ci permettono di contare il numero di visitatori e di vedere come i visitatori si muovono sul nostro sito quando lo utilizzano. Questo ci aiuta a migliorare il funzionamento del sito web.</li>
                <li><strong>Cookie di marketing</strong>: Utilizzati per seguire i visitatori sui siti web. L'intenzione è quella di visualizzare annunci che siano rilevanti e coinvolgenti per il singolo utente.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Tipi di Cookie che Utilizziamo</h2>
              <p><strong>Cookie di Prime Parti</strong>: Sono impostati direttamente dal nostro sito web.</p>
              <p><strong>Cookie di Terze Parti</strong>: Sono impostati da domini di terze parti, come Google Analytics, che utilizziamo per monitorare il traffico sul nostro sito.</p>
              
              <h3 className="text-xl font-bold my-3">3.1. Cookie Specifici Utilizzati</h3>
              <table className="min-w-full border border-gray-300 my-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Nome Cookie</th>
                    <th className="border border-gray-300 px-4 py-2">Fornitore</th>
                    <th className="border border-gray-300 px-4 py-2">Scopo</th>
                    <th className="border border-gray-300 px-4 py-2">Scadenza</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Usato per distinguere gli utenti</td>
                    <td className="border border-gray-300 px-4 py-2">2 anni</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Usato per distinguere gli utenti</td>
                    <td className="border border-gray-300 px-4 py-2">24 ore</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gat</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Usato per limitare la frequenza delle richieste</td>
                    <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Come Gestire i Cookie</h2>
              <p>Puoi gestire i cookie attraverso le impostazioni del tuo browser. Puoi anche eliminare i cookie che sono già stati archiviati sul tuo dispositivo. Tieni presente che la disattivazione dei cookie potrebbe influire sulla funzionalità del nostro sito web.</p>
              
              <h3 className="text-xl font-bold my-3">Come gestire i cookie nei principali browser:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Google Chrome</strong>: Impostazioni → Privacy e Sicurezza → Cookie e altri dati dei siti</li>
                <li><strong>Mozilla Firefox</strong>: Opzioni → Privacy e Sicurezza → Cookie e dati dei siti web</li>
                <li><strong>Safari</strong>: Preferenze → Privacy → Cookie e dati dei siti web</li>
                <li><strong>Microsoft Edge</strong>: Impostazioni → Cookie e autorizzazioni del sito → Gestisci ed elimina cookie e dati dei siti</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Cookie di Terze Parti</h2>
              <p>Il nostro sito utilizza servizi di terze parti che possono impostare cookie quando visiti il nostro sito. Non abbiamo il controllo sulla diffusione di questi cookie. Ti invitiamo a controllare i siti web di queste terze parti per ulteriori informazioni sui loro cookie e su come gestirli.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Modifiche alla Cookie Policy</h2>
              <p>Possiamo aggiornare questa Cookie Policy periodicamente per riflettere cambiamenti nelle nostre pratiche o per altri motivi operativi, legali o normativi. Ti invitiamo a rivedere regolarmente questa pagina per restare informato sulle nostre pratiche relative ai cookie.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Contattaci</h2>
              <p>Se hai domande o preoccupazioni riguardo alla nostra Cookie Policy, contattaci a:</p>
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

export default CookiePolicy;
