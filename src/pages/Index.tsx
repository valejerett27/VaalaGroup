import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
// Las siguientes importaciones se comentaron porque sus componentes están desactivados en el JSX:
// import Testimonials from "@/components/Testimonials";
// import Team from "@/components/Team";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";   // importación por defecto
import History from "@/components/History"; // importación por defecto
// import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Vision />
      <History />
      <WhyChooseUs />
      <Projects />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Contact /> */}
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </div>
  );
};

export default Index;
