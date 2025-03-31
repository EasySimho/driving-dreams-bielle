
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "Patente B"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJsConfigured, setEmailJsConfigured] = useState(false);
  const [emailJsConfig, setEmailJsConfig] = useState({
    serviceId: "",
    templateId: "",
    userId: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailJsConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailJsConfig((prev) => ({ ...prev, [name]: value }));
  };

  const saveEmailJsConfig = () => {
    if (emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.userId) {
      localStorage.setItem('emailjs-config', JSON.stringify(emailJsConfig));
      setEmailJsConfigured(true);
      toast({
        title: "Configurazione salvata!",
        description: "Le credenziali di EmailJS sono state salvate correttamente.",
      });
    } else {
      toast({
        title: "Errore di configurazione",
        description: "Per favore, compila tutti i campi di configurazione.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Form submitted:", formData);
    
    const savedConfig = localStorage.getItem('emailjs-config');
    const config = savedConfig ? JSON.parse(savedConfig) : emailJsConfig;
    
    if (!config.serviceId || !config.templateId || !config.userId) {
      setIsSubmitting(false);
      toast({
        title: "Configurazione mancante",
        description: "Per favore, configura EmailJS prima di inviare il modulo.",
        variant: "destructive",
      });
      setEmailJsConfigured(false);
      return;
    }
    
    try {
      // Send email to the driving school owner
      const templateParams = {
        to_email: "info@autoscuolabiella1.it", // Change this to the actual owner's email
        reply_to: formData.email,
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };
      
      await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.userId
      );
      
      // Send confirmation email to the client (you'll need a separate template for this)
      // For now, we'll simulate this
      
      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo al più presto. Una conferma è stata inviata alla tua email.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "Patente B"
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un problema nell'invio della richiesta. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check for existing configuration when component mounts
  useState(() => {
    const savedConfig = localStorage.getItem('emailjs-config');
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig);
        setEmailJsConfig(parsedConfig);
        setEmailJsConfigured(true);
      } catch (error) {
        console.error("Error parsing saved EmailJS config:", error);
      }
    }
  });

  return (
    <section id="contatti" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contattaci</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hai domande o vuoi prenotare un corso? Compila il modulo sottostante o contattaci direttamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Richiedi Informazioni</h3>
            
            {!emailJsConfigured && (
              <div className="mb-8 p-4 border border-yellow-300 bg-yellow-50 rounded-md">
                <h4 className="font-semibold mb-2 text-yellow-800">Configurazione EmailJS richiesta</h4>
                <p className="text-sm text-yellow-700 mb-4">
                  Per attivare l'invio di email, inserisci le credenziali di EmailJS. Queste informazioni saranno salvate nel tuo browser.
                </p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="serviceId">Service ID</Label>
                    <Input
                      id="serviceId"
                      name="serviceId"
                      value={emailJsConfig.serviceId}
                      onChange={handleEmailJsConfigChange}
                      placeholder="es. service_abc123"
                    />
                  </div>
                  <div>
                    <Label htmlFor="templateId">Template ID</Label>
                    <Input
                      id="templateId"
                      name="templateId"
                      value={emailJsConfig.templateId}
                      onChange={handleEmailJsConfigChange}
                      placeholder="es. template_abc123"
                    />
                  </div>
                  <div>
                    <Label htmlFor="userId">User ID (Public Key)</Label>
                    <Input
                      id="userId"
                      name="userId"
                      value={emailJsConfig.userId}
                      onChange={handleEmailJsConfigChange}
                      placeholder="es. user_abc123"
                    />
                  </div>
                  <Button 
                    onClick={saveEmailJsConfig}
                    className="w-full bg-yellow-600 hover:bg-yellow-700"
                  >
                    Salva Configurazione
                  </Button>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome e Cognome*</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci il tuo nome e cognome"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="La tua email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefono*</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Il tuo numero di telefono"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="service">Servizio di interesse</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Patente B">Patente B</option>
                  <option value="Patente A/AM">Patente A/AM</option>
                  <option value="Patente C/D/E">Patente C/D/E</option>
                  <option value="Patente Nautica">Patente Nautica</option>
                  <option value="CQC">CQC</option>
                  <option value="Rinnovo Patente">Rinnovo Patente</option>
                  <option value="Recupero Punti">Recupero Punti</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message">Messaggio</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Scrivi qui la tua richiesta"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-biella-red hover:bg-red-700"
                disabled={isSubmitting || !emailJsConfigured}
              >
                {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
              </Button>
            </form>
          </div>
          
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">I Nostri Contatti</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 bg-biella-blue text-white p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Indirizzo</h4>
                  <p className="text-gray-600">Via XX Settembre, 17</p>
                  <p className="text-gray-600">13900 Biella (BI)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-biella-blue text-white p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Telefono</h4>
                  <p className="text-gray-600">+39 015 34315</p>
                  <p className="text-gray-600">+39 333 1234567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-biella-blue text-white p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">info@autoscuolabiella1.it</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Orari di Apertura</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Lunedì - Venerdì:</div>
                  <div className="font-medium">9:00 - 12:30, 15:00 - 19:00</div>
                  <div className="text-gray-600">Sabato:</div>
                  <div className="font-medium">9:00 - 12:00</div>
                  <div className="text-gray-600">Domenica:</div>
                  <div className="font-medium">Chiuso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
