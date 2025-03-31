
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo al più presto.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "Patente B"
      });
    }, 1000);
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
          <div className="bg-white rounded-lg shadow-lg p-8">
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
                disabled={isSubmitting}
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
