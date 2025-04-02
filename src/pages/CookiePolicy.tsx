
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CookiePolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-biella-blue text-white">
            <CardTitle className="text-3xl font-bold">Cookie Policy</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">1. Cosa sono i cookie</h2>
              <p className="text-gray-700">
                I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente, 
                dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. 
                I cookie vengono utilizzati per diverse finalità, hanno caratteristiche diverse e possono 
                essere utilizzati sia dal titolare del sito che si sta visitando, sia da terze parti.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">2. Tipi di cookie utilizzati</h2>
              <h3 className="text-xl font-medium text-biella-blue">Cookie tecnici</h3>
              <p className="text-gray-700">
                Questi cookie sono necessari per il corretto funzionamento del nostro sito web. 
                Consentono la navigazione e l'utilizzo delle varie funzionalità, come ad esempio 
                l'accesso ad aree riservate del sito. Senza questi cookie, alcune funzioni potrebbero non essere disponibili.
              </p>
              
              <h3 className="text-xl font-medium text-biella-blue">Cookie analitici</h3>
              <p className="text-gray-700">
                Utilizziamo questi cookie per raccogliere informazioni su come i visitatori utilizzano il nostro sito, 
                ad esempio quali pagine visitano più spesso e se ricevono messaggi di errore. 
                Questi cookie non raccolgono informazioni che identificano un visitatore. 
                Tutte le informazioni raccolte sono aggregate e quindi anonime. 
                Vengono utilizzati solo per migliorare il funzionamento del nostro sito.
              </p>
              
              <h3 className="text-xl font-medium text-biella-blue">Cookie di profilazione</h3>
              <p className="text-gray-700">
                Questi cookie sono utilizzati per tracciare la navigazione dell'utente sul sito e creare profili 
                sui suoi gusti, abitudini, scelte, ecc. Con questi cookie possono essere trasmessi al terminale 
                dell'utente messaggi pubblicitari in linea con le preferenze già manifestate dallo stesso utente 
                nella navigazione online.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">3. Cookie di terze parti</h2>
              <p className="text-gray-700">
                Il nostro sito potrebbe contenere anche cookie di terze parti come:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Google Analytics (per analizzare le visite al sito)</li>
                <li>Social network (per la condivisione sui social media)</li>
              </ul>
              <p className="text-gray-700">
                Per i cookie di terze parti, la policy e la gestione del consenso sono responsabilità 
                delle terze parti stesse, a cui è possibile fare riferimento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">4. Gestione dei cookie</h2>
              <p className="text-gray-700">
                La maggior parte dei browser permette di controllare e limitare i cookie attraverso le impostazioni:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" className="text-biella-blue hover:underline" target="_blank">https://support.google.com/chrome/answer/95647</a></li>
                <li>Firefox: <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" className="text-biella-blue hover:underline" target="_blank">https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop</a></li>
                <li>Safari: <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" className="text-biella-blue hover:underline" target="_blank">https://support.apple.com/it-it/guide/safari/sfri11471/mac</a></li>
                <li>Edge: <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-biella-blue hover:underline" target="_blank">https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a></li>
              </ul>
              <p className="text-gray-700">
                Se si disabilitano completamente i cookie, potrebbero esserci limitazioni nelle funzionalità del sito.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">5. Aggiornamenti</h2>
              <p className="text-gray-700">
                La presente cookie policy può essere modificata nel tempo, anche in funzione di eventuali 
                cambiamenti normativi. Ti invitiamo quindi a visitare periodicamente questa pagina.
              </p>
              <p className="text-gray-700">
                Ultima modifica: 10 Maggio 2024
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-biella-blue">6. Contatti</h2>
              <p className="text-gray-700">
                Per qualsiasi domanda o chiarimento riguardo l'utilizzo dei cookie sul nostro sito, 
                non esitare a contattarci:
              </p>
              <p className="text-gray-700">
                Autoscuola Biella Uno<br />
                Via Fratelli Rosselli 23/B<br />
                13900 Biella (BI)<br />
                Email: info@biellauno.it<br />
                Telefono: +39 015 402914
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
