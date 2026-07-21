import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MortgageComparison from "./components/MortgageComparison/MortgageComparison";
import Consultation from "./components/Consultation/Consultation";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";


import ChatBot from "./components/ChatBot/ChatBot";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MortgageComparison />
      <Consultation />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Footer />


      <ChatBot />

    </>
  );
}

export default App;