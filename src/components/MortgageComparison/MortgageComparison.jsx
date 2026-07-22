import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import PropertyInputs from "./PropertyInputs";
import InterestInputs from "./InterestInputs";
import ComparisonCard from "./ComparisonCard";
import BestScenarioCard from "./BestScenarioCard";
import MortgageSummary from "./MortgageSummary";
import LoanBreakdown from "./LoanBreakdown";
import MortgageCharts from "./MortgageCharts";
import ComparisonBars from "./ComparisonBars";
import CTASection from "./CTASection";
import { calculateMortgage } from "./mortgageUtils";

const MortgageComparison = ({ openChat }) => {

  // Loan Details

  const [propertyPrice, setPropertyPrice] = useState(1000000);

  const [downPayment, setDownPayment] = useState(20);

  const [tenure, setTenure] = useState(25);



  // Interest Comparison

  const [rateA, setRateA] = useState(3.99);

  const [rateB, setRateB] = useState(4.99);
  const optionA = calculateMortgage(
  propertyPrice,
  downPayment,
  rateA,
  tenure
);


const optionB = calculateMortgage(
  propertyPrice,
  downPayment,
  rateB,
  tenure
);



const bestOption =
  rateA < rateB ? optionA : optionB;



const bestRate =
  rateA < rateB ? rateA : rateB;



const saving =
  Math.abs(
    optionA.totalPayment -
    optionB.totalPayment
  );



  return (

    <section className="relative overflow-hidden bg-[#07111F] py-16 md:py-24">


      {/* Background Glow */}

      <div className="
        absolute 
        top-0 
        left-1/2 
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/10
        blur-[120px]
      "/>



      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">


        {/* Heading */}

        <SectionHeading

          badge="Compare Mortgage Rates"

          title="Find Your Best Mortgage Scenario"

          description="
          Compare different mortgage rates and instantly understand
          how interest changes your monthly payment and total cost.
          "

        />



        {/* Input Area */}

        <div className="
          grid
          gap-6
           md:gap-8 lg:grid-cols-2">
    
          {/* Loan Details */}


          <PropertyInputs

            propertyPrice={propertyPrice}

            setPropertyPrice={setPropertyPrice}

            downPayment={downPayment}

            setDownPayment={setDownPayment}

            tenure={tenure}

            setTenure={setTenure}

          />




          {/* Interest Rates */}


          <InterestInputs

            rateA={rateA}

            setRateA={setRateA}

            rateB={rateB}

            setRateB={setRateB}

          />


        </div>

<BestScenarioCard
  rate={bestRate}
  monthlyPayment={bestOption.monthlyPayment}
  saving={saving}
  loanAmount={bestOption.loanAmount}
  totalInterest={bestOption.totalInterest}
  totalPayment={bestOption.totalPayment}
  openChat={openChat}
/> 

<MortgageSummary
  loanAmount={bestOption.loanAmount}
  downPayment={downPayment}
  tenure={tenure}
  bestRate={bestRate}
/>

<div className="mt-8 md:mt-10 grid gap-6 md:gap-8 lg:grid-cols-2">
  <ComparisonCard
    title="Option A"
    rate={rateA}
    monthlyPayment={optionA.monthlyPayment}
    totalInterest={optionA.totalInterest}
    totalPayment={optionA.totalPayment}
    recommended={rateA < rateB}
  />

  <ComparisonCard
    title="Option B"
    rate={rateB}
    monthlyPayment={optionB.monthlyPayment}
    totalInterest={optionB.totalInterest}
    totalPayment={optionB.totalPayment}
    recommended={rateB < rateA}
  />
</div>

<ComparisonBars
  optionA={optionA}
  optionB={optionB}
/>

<LoanBreakdown
  loanAmount={bestOption.loanAmount}
  totalInterest={bestOption.totalInterest}
  totalPayment={bestOption.totalPayment}
/>

<MortgageCharts
  optionA={optionA}
  optionB={optionB}
  bestOption={bestOption}
/>

<CTASection
   openChat={openChat}
/>

<div className="mt-12 border-t border-white/10 pt-8">
<div className="mx-auto mt-2 flex max-w-3xl items-start justify-center gap-2 px-2">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 h-5 w-5 text-cyan-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
      />
    </svg>

    <p className="text-xs md:text-sm leading-6 md:leading-7 text-slate-400">
      Mortgage calculations are estimates only and should be used for
      informational purposes. Final loan approval, interest rates,
      repayment amounts, and eligibility depend on lender policies.
    </p>

  </div>

  <p className="mt-6 text-center text-sm text-slate-500">
    © {new Date().getFullYear()} HomeLoanz LLC. All Rights Reserved.
  </p>

</div>

</div>
    </section>

  );
};


export default MortgageComparison;