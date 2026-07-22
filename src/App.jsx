import { useState } from "react";
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
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <Navbar openChat={() => setIsChatOpen(true)} />
         <main>
      <Hero openChat={() => setIsChatOpen(true)} />
      <MortgageComparison openChat={() => setIsChatOpen(true)} />
      <Consultation openChat={() => setIsChatOpen(true)} />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
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