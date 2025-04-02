import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Courses />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;