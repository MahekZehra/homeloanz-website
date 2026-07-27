import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import { lazy, Suspense } from "react";
const MortgageCalculator = lazy(() => import("./MortgageCalculator"));

function Hero({ openChat }) {
  return (
    <section
  id="home"
    className="relative overflow-hidden bg-[#071A35] min-h-screen">
      <BackgroundEffects />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <HeroContent openChat={openChat} />

        <Suspense
  fallback={
    <div className="h-[500px] rounded-3xl bg-white/5 animate-pulse" />
  }
>
          <MortgageCalculator />
          </Suspense>

        </div>
      </div>
    </section>
  );
}

export default Hero;