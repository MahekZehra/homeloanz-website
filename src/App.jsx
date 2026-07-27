import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MortgageComparison from "./components/MortgageComparison/MortgageComparison";
import Consultation from "./components/Consultation/Consultation";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import MortgageSolutions from "./components/MortgageSolutions/MortgageSolutions";
import Resources from "./components/Resources/Resources";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";


import ChatBot from "./components/ChatBot/ChatBot";
function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <Navbar openChat={() => setIsChatOpen(true)} />
         <main>
      <Hero openChat={() => setIsChatOpen(true)} />
      <WhyChooseUs />
      <MortgageSolutions />
      <Resources />
      <MortgageComparison openChat={() => setIsChatOpen(true)} />
      <HowItWorks />
      <Consultation openChat={() => setIsChatOpen(true)} />
      <Testimonials />
      <FAQ />
         </main>
      <Footer />

      {isChatOpen && (
  <ChatBot
    closeChat={() => setIsChatOpen(false)}
  />
)}

</>
  )
}

export default App;