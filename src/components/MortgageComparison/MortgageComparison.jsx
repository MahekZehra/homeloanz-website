import { useState, useMemo, lazy, Suspense } from "react";
import SectionHeading from "../ui/SectionHeading";
import PropertyInputs from "./PropertyInputs";
import InterestInputs from "./InterestInputs";
import ComparisonCard from "./ComparisonCard";
import BestScenarioCard from "./BestScenarioCard";
import MortgageSummary from "./MortgageSummary";
import LoanBreakdown from "./LoanBreakdown";

const MortgageCharts = lazy(() => import("./MortgageCharts"));
const ComparisonBars = lazy(() => import("./ComparisonBars"));

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

  const optionA = useMemo(
    () =>
      calculateMortgage(
        propertyPrice,
        downPayment,
        rateA,
        tenure
      ),
    [propertyPrice, downPayment, rateA, tenure]
  );

  const optionB = useMemo(
    () =>
      calculateMortgage(
        propertyPrice,
        downPayment,
        rateB,
        tenure
      ),
    [propertyPrice, downPayment, rateB, tenure]
  );

  const bestOption = useMemo(
    () => (rateA < rateB ? optionA : optionB),
    [rateA, rateB, optionA, optionB]
  );

  const bestRate = useMemo(
    () => (rateA < rateB ? rateA : rateB),
    [rateA, rateB]
  );

  const saving = useMemo(
    () => Math.abs(optionA.totalPayment - optionB.totalPayment),
    [optionA, optionB]
  );

  return (
    <section
      id="calculator"
      aria-labelledby="mortgage-calculator-heading"
      className="relative overflow-hidden bg-[#07111F] py-16 md:py-24"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <SectionHeading
          id="mortgage-calculator-heading"
          badge="UAE MORTGAGE CALCULATOR"
          title="Mortgage Calculator & Home Loan Comparison"
          description="
            Use our free UAE mortgage calculator to estimate monthly mortgage
            payments, compare different interest-rate scenarios, and understand
            potential home loan costs when buying property in Dubai and across the UAE.
          "
        />

        {/* Input Area */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">

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

        {/* Best Scenario */}
        <BestScenarioCard
          rate={bestRate}
          monthlyPayment={bestOption.monthlyPayment}
          saving={saving}
          loanAmount={bestOption.loanAmount}
          totalInterest={bestOption.totalInterest}
          totalPayment={bestOption.totalPayment}
          openChat={openChat}
        />

        {/* Mortgage Summary */}
        <MortgageSummary
          loanAmount={bestOption.loanAmount}
          downPayment={downPayment}
          tenure={tenure}
          bestRate={bestRate}
        />

        {/* Comparison Cards */}
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

        {/* Comparison Bars */}
        <Suspense
          fallback={
            <div className="mt-6 text-center text-slate-400">
              Loading Comparison...
            </div>
          }
        >
          <ComparisonBars
            optionA={optionA}
            optionB={optionB}
          />
        </Suspense>

        {/* Loan Breakdown */}
        <LoanBreakdown
          loanAmount={bestOption.loanAmount}
          totalInterest={bestOption.totalInterest}
          totalPayment={bestOption.totalPayment}
        />

        {/* Mortgage Charts */}
        <Suspense
          fallback={
            <div className="mt-10 text-center text-slate-400">
              Loading Charts...
            </div>
          }
        >
          <MortgageCharts
            optionA={optionA}
            optionB={optionB}
            bestOption={bestOption}
          />
        </Suspense>

        {/* Calculator Explanation */}
        <div className="mt-12 mx-auto max-w-4xl text-slate-300">

          <h3 className="text-3xl font-bold text-white">
            How Our UAE Mortgage Calculator Works
          </h3>

          <p className="mt-6 leading-8">
            Our UAE mortgage calculator helps residents, expatriates, and
            property investors estimate potential monthly repayments based on
            property price, down payment, loan tenure, and interest rate. Use
            the calculator to compare different mortgage scenarios and get a
            clearer idea of potential borrowing costs before discussing your
            options with a mortgage advisor.
          </p>

        </div>

        {/* CTA */}
        <CTASection
          openChat={openChat}
        />

        {/* Disclaimer */}
        <div className="mt-12 border-t border-white/10 pt-8">

          <div className="mx-auto mt-2 flex max-w-3xl items-start justify-center gap-2 px-2">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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
              Mortgage calculations are estimates for informational purposes
              only. Final loan approval, interest rates, repayment amounts,
              fees, and eligibility depend on the lender, applicant, property,
              and applicable lending requirements.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MortgageComparison;