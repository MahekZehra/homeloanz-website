import { ShieldCheck, Headphones, Calculator, Clock3 } from "lucide-react";

function HeroContent() {
  return (
  <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 pt-12 md:pt-20 pb-16 md:pb-24">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-blue-300">

        <ShieldCheck size={16} />

        <span className="text-sm font-medium tracking-wide">

          TRUSTED MORTGAGE BROKER IN UAE

        </span>

      </div>

      {/* Heading */}

      <h1 className="mt-6 md:mt-8 text-5xl sm:text-6xl lg:text-[72px] leading-tight lg:leading-[1.05] font-extrabold text-white">

        Home Financing

      </h1>

      <h1 className="text-5xl sm:text-6xl lg:text-[72px] leading-tight lg:leading-[1.05] font-extrabold bg-gradient-to-r from-[#67A8FF] to-[#2563EB] bg-clip-text text-transparent">

        Made Simple

      </h1>

      {/* Description */}

      <p className="mt-6 text-gray-300 text-base md:text-lg leading-7 md:leading-9 max-w-xl">

        We help UAE residents and investors secure the best mortgage
        solutions from top banks with fast approvals and expert guidance.

      </p>

      {/* Buttons */}

      <div className="mt-8 flex flex-col sm:flex-row gap-4">

        <button className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">

          <Calculator size={20} />

          Calculate Mortgage

        </button>

        <button className="flex items-center gap-3 rounded-xl border border-gray-500 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-white/5">

          <Headphones size={20} />

          Speak to an Expert

        </button>

      </div>

      {/* Bottom Trust */}

      <div className="mt-10 flex flex-wrap gap-8">

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-blue-500/10 p-3">

            <ShieldCheck className="text-blue-400" size={20} />

          </div>

          <div>

            <h4 className="text-white font-semibold">

              100%

            </h4>

            <p className="text-sm text-gray-400">

              Secure Process

            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-blue-500/10 p-3">

            <Clock3 className="text-blue-400" size={20} />

          </div>

          <div>

            <h4 className="text-white font-semibold">

              24h

            </h4>

            <p className="text-sm text-gray-400">

              Quick Response

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroContent;