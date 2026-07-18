import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import MortgageCalculator from "./MortgageCalculator";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071A35] min-h-screen">
      <BackgroundEffects />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <HeroContent />

          <MortgageCalculator />

        </div>

      </div>
    </section>
  );
}

export default Hero;