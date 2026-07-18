import { useState, useMemo } from "react";
import {
  Home,
  Percent,
  Landmark,
  TrendingUp,
} from "lucide-react";

function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(4.25);
  const [loanTerm, setLoanTerm] = useState(25);

  const monthlyPayment = useMemo(() => {
    const loanAmount =
      propertyPrice - propertyPrice * (downPayment / 100);

    const monthlyRate = interestRate / 100 / 12;

    const numberOfPayments = loanTerm * 12;

    const payment =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    if (!isFinite(payment)) return 0;

    return Math.round(payment);
  }, [
    propertyPrice,
    downPayment,
    interestRate,
    loanTerm,
  ]);

  return (
    <div className="relative w-full max-w-[540px] rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_25px_80px_rgba(37,99,235,.18)] overflow-hidden">

      {/* Glow */}

      <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative p-8">

        {/* Heading */}

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-600/20 p-3">

            <Landmark className="text-blue-400" size={22} />

          </div>

          <h2 className="text-4xl font-bold text-white">

            Mortgage Calculator

          </h2>

        </div>

        {/* Property Price */}

        <div className="mt-8">

          <label className="mb-2 block text-sm text-gray-300">

            Property Price (AED)

          </label>

          <div className="flex items-center gap-3 rounded-2xl bg-[#18335F] px-4 py-4">

            <Home className="text-blue-400" size={20} />

            <input
              type="number"
              value={propertyPrice}
              onChange={(e) =>
                setPropertyPrice(Number(e.target.value))
              }
              className="w-full bg-transparent text-lg font-semibold text-white outline-none"
            />

          </div>

          <input
            type="range"
            min="100000"
            max="10000000"
            step="10000"
            value={propertyPrice}
            onChange={(e) =>
              setPropertyPrice(Number(e.target.value))
            }
            className="mt-4 w-full accent-blue-500"
          />

          <div className="mt-2 flex justify-between text-xs text-gray-400">

            <span>100K</span>

            <span>10M+</span>

          </div>

        </div>
                {/* Down Payment */}

        <div className="mt-8">

          <label className="mb-2 block text-sm text-gray-300">
            Down Payment (%)
          </label>

          <div className="flex items-center gap-3 rounded-2xl bg-[#18335F] px-4 py-4">

            <Percent className="text-blue-400" size={20} />

            <input
              type="number"
              min="10"
              max="50"
              value={downPayment}
              onChange={(e) =>
                setDownPayment(Number(e.target.value))
              }
              className="w-full bg-transparent text-lg font-semibold text-white outline-none"
            />

            <span className="text-white">%</span>

          </div>

          <input
            type="range"
            min="10"
            max="50"
            value={downPayment}
            onChange={(e) =>
              setDownPayment(Number(e.target.value))
            }
            className="mt-4 w-full accent-blue-500"
          />

          <div className="mt-2 flex justify-between text-xs text-gray-400">

            <span>10%</span>

            <span>50%</span>

          </div>

        </div>

        {/* Interest Rate */}

        <div className="mt-8">

          <label className="mb-2 block text-sm text-gray-300">
            Interest Rate (%)
          </label>

          <div className="flex items-center gap-3 rounded-2xl bg-[#18335F] px-4 py-4">

            <TrendingUp className="text-blue-400" size={20} />

            <input
              type="number"
              step="0.05"
              min="1"
              max="10"
              value={interestRate}
              onChange={(e) =>
                setInterestRate(Number(e.target.value))
              }
              className="w-full bg-transparent text-lg font-semibold text-white outline-none"
            />

            <span className="text-white">%</span>

          </div>

          <input
            type="range"
            min="1"
            max="10"
            step="0.05"
            value={interestRate}
            onChange={(e) =>
              setInterestRate(Number(e.target.value))
            }
            className="mt-4 w-full accent-blue-500"
          />

          <div className="mt-2 flex justify-between text-xs text-gray-400">

            <span>1%</span>

            <span>10%</span>

          </div>

        </div>

        {/* Loan Term */}

        <div className="mt-8">

          <label className="mb-4 block text-sm text-gray-300">
            Loan Term (Years)
          </label>

          <div className="grid grid-cols-4 gap-3">

            {[15, 20, 25, 30].map((year) => (

              <button
                key={year}
                onClick={() => setLoanTerm(year)}
                className={`rounded-xl py-4 text-lg font-semibold transition-all duration-300 ${
                  loanTerm === year
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                    : "bg-[#18335F] text-gray-300 hover:bg-blue-700/40"
                }`}
              >
                {year}
              </button>

            ))}

          </div>

        </div>
                {/* Monthly Payment */}

        <div className="mt-10 rounded-3xl border border-green-500/20 bg-[#0E223F] p-6">

          <p className="text-sm text-green-400">
            Estimated Monthly Payment
          </p>

          <div className="mt-4 flex items-end justify-between">

            <div>

              <h2 className="text-5xl font-bold text-green-400">
                AED {monthlyPayment.toLocaleString()}
              </h2>

              <p className="mt-2 text-gray-400">
                /month
              </p>

            </div>

            {/* Mini Growth Chart */}

            <svg
              width="90"
              height="55"
              viewBox="0 0 90 55"
              fill="none"
            >
              <path
                d="M2 45
                C12 30 18 40 26 22
                C36 5 48 20 58 12
                C68 4 76 18 88 2"
                stroke="#22C55E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle
                cx="88"
                cy="2"
                r="4"
                fill="#22C55E"
              />
            </svg>

          </div>

        </div>

        {/* Bottom Note */}

        <p className="mt-6 text-center text-sm leading-6 text-gray-400">
          This estimate is for illustrative purposes only.
          Final mortgage rates depend on bank approval,
          eligibility, and financing terms.
        </p>

      </div>
    </div>
  );
}

export default MortgageCalculator;