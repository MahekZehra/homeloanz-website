import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs/WhyChooseUs"));
const MortgageSolutions = lazy(() => import("./components/MortgageSolutions/MortgageSolutions"));
const Resources = lazy(() => import("./components/Resources/Resources"));
const MortgageComparison = lazy(() => import("./components/MortgageComparison/MortgageComparison"));
const HowItWorks = lazy(() => import("./components/HowItWorks/HowItWorks"));
const Consultation = lazy(() => import("./components/Consultation/Consultation"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));
const FAQ = lazy(() => import("./components/FAQ/FAQ"));
import Footer from "./components/Footer/Footer";


import ChatBot from "./components/ChatBot/ChatBot";
function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <Navbar openChat={() => setIsChatOpen(true)} />
        <Suspense
  fallback={
    <div className="flex items-center justify-center min-h-screen text-lg">
      Loading...
    </div>
  }
>
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
         </Suspense>

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