
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { Loader } from "@/components/ui/loader";
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
  
  // Pre-configured EmailJS settings
  const emailJsConfig = {
    serviceId: "service_su5evcm",
    ownerTemplateId: "template_c0cp8md",  // Template per il proprietario
    clientTemplateId: "template_8cmwq5k",  // Template per il cliente
    publicKey: "JmODPdVdCt13yVm0I"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Form submitted:", formData);
    
    try {
      // Send email to the driving school owner
      const ownerTemplateParams = {
        to_email: "info@autoscuolabiella1.it", // Email del proprietario
        reply_to: formData.email,
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };
      
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.ownerTemplateId,
        ownerTemplateParams,
        emailJsConfig.publicKey
      );
      
      // Send confirmation email to the client
      const clientTemplateParams = {
        to_email: formData.email, // Email del cliente
        to_name: formData.name,
        service: formData.service,
        school_name: "Autoscuola Biella 1",
        school_phone: "+39 015 34315",
        school_email: "info@autoscuolabiella1.it",
      };
      
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.clientTemplateId,
        clientTemplateParams,
        emailJsConfig.publicKey
      );
      
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
          <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Richiedi Informazioni</h3>
            
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
                  className="transition-all duration-300 focus:ring-2 focus:ring-biella-blue"
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
                    className="transition-all duration-300 focus:ring-2 focus:ring-biella-blue"
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
                    className="transition-all duration-300 focus:ring-2 focus:ring-biella-blue"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md transition-all duration-300 focus:ring-2 focus:ring-biella-blue focus:border-biella-blue outline-none"
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
                  className="transition-all duration-300 focus:ring-2 focus:ring-biella-blue"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-biella-red hover:bg-red-700 transition-all duration-300 transform hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <Loader size={20} className="mr-2" />
                    <span>Invio in corso...</span>
                  </div>
                ) : "Invia Richiesta"}
              </Button>
            </form>
          </div>
          
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">I Nostri Contatti</h3>
            
            <div className="space-y-8">
              <div className="flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <div className="mr-4 bg-biella-blue text-white p-3 rounded-full shadow-md">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Indirizzo</h4>
                  <p className="text-gray-600">Via Fratelli Rosselli 23/B</p>
                  <p className="text-gray-600">13900 Biella (BI)</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <div className="mr-4 bg-biella-blue text-white p-3 rounded-full shadow-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Telefono</h4>
                  <p className="text-gray-600">+39 015 402914</p>
                  <p className="text-gray-600">+39 345 2928 159</p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <div className="mr-4 bg-biella-blue text-white p-3 rounded-full shadow-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">info@biellauno.it</p>
                </div>
              </div>
              
              <div className="transform transition-all duration-300 hover:shadow-md hover:bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Orari di Apertura</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Lunedì:</div>
                  <div className="font-medium">09:00 - 12:00, 14:30 - 18:30</div>
                  <div className="text-gray-600">Martedì:</div>
                  <div className="font-medium">09:00 - 12:00, 15:00 - 19:00</div>
                  <div className="text-gray-600">Mercoledì:</div>
                  <div className="font-medium">09:00 - 12:00, 14:30 - 18:30</div>
                  <div className="text-gray-600">Giovedì:</div>
                  <div className="font-medium">09:00 - 12:00, 14:30 - 18:30</div>
                  <div className="text-gray-600">Venerdì:</div>
                  <div className="font-medium">09:00 - 12:00, 13:00 - 17:00</div>
                  <div className="text-gray-600">Sabato:</div>
                  <div className="font-medium">Chiuso</div>
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
