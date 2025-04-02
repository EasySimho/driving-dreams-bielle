import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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
    ownerTemplateId: "template_c0cp8md",
    clientTemplateId: "template_8cmwq5k",
    publicKey: "JmODPdVdCt13yVm0I"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email to the driving school owner
      const ownerTemplateParams = {
        to_email: "info@autoscuolabiella1.it",
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
        to_email: formData.email,
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
    <section id="contatti" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Contattaci</h2>
          <div className="w-20 h-1 bg-biella-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hai domande sui nostri corsi? Compila il modulo sottostante o contattaci direttamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-biella-blue">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Richiedi Informazioni</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-medium">Nome e Cognome*</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Inserisci il tuo nome e cognome"
                  className="mt-1"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="font-medium">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="La tua email"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="font-medium">Telefono*</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Il tuo numero di telefono"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="service" className="font-medium">Servizio di interesse</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
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
                <Label htmlFor="message" className="font-medium">Messaggio</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Scrivi qui la tua richiesta"
                  rows={4}
                  className="mt-1"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-biella-red hover:bg-red-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">I Nostri Contatti</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-biella-blue text-white p-2 rounded">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Indirizzo</h4>
                    <p className="text-gray-600">Via Fratelli Rosselli 23/B</p>
                    <p className="text-gray-600">13900 Biella (BI)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-biella-blue text-white p-2 rounded">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Telefono</h4>
                    <p className="text-gray-600">+39 015 402914</p>
                    <p className="text-gray-600">+39 345 2928 159</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-biella-blue text-white p-2 rounded">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@biellauno.it</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <div className="mr-4 bg-biella-blue text-white p-2 rounded">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold">Orari di Apertura</h4>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-4 ml-9">
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
            
            <div className="mt-6">
              <Button 
                className="w-full bg-biella-blue hover:bg-blue-700" 
                size="lg"
                asChild
              >
                <a href="https://maps.app.goo.gl/CwJAvqb8E2wRM4xv8" target="_blank" rel="noopener noreferrer">
                  Visualizza su Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}