import {
  ArrowRight,
  PhoneCall,
  Mail,
  Clock3,
  ShieldCheck,
  Star,
} from "lucide-react";

import Card from "../ui/Card";

const CTASection = ({ openChat }) => {
  return (
    <Card className="relative mt-14 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#071A35] via-[#0D2B52] to-[#071A35] p-6 md:p-10">

      {/* Background Glow */}
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"></div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[2fr_1fr]">

        {/* LEFT */}

        <div>

          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold tracking-wide text-cyan-300">
            FREE UAE MORTGAGE CONSULTATION
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
            Ready to Find Your Perfect Mortgage?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Compare mortgage options, save thousands in interest,
            and receive expert guidance from our experienced
            mortgage advisors.
          </p>

          {/* Trust Badges */}

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
              <ShieldCheck
                size={18}
                className="text-emerald-400"
              />
              <span className="text-sm text-white">
                No Obligation
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
              <Clock3
                size={18}
                className="text-cyan-400"
              />
              <span className="text-sm text-white">
                Response within 24 Hours
              </span>
            </div>

          </div>

          {/* Rating */}

          <div className="mt-8 flex items-center gap-2">

            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                fill="currentColor"
                className="text-yellow-400"
              />
            ))}

            <span className="ml-2 text-white">
              Trusted by UAE Home Buyers
            </span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="rounded-2xl bg-white/5 p-8">

          <h3 className="text-2xl font-bold text-white">
            Contact Us
          </h3>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">

              <PhoneCall
                className="text-cyan-400"
                size={22}
              />

              <div>
                <p className="text-sm text-slate-400">
                  Phone
                </p>

                <p className="font-semibold text-white">
                  +971 XX XXX XXXX
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <Mail
                className="text-cyan-400"
                size={22}
              />

              <div>

                <p className="text-sm text-slate-400">
                  Email
                </p>

                <p className="font-semibold text-white">
                  info@homeloanzllc.com
                </p>

              </div>

            </div>

          </div>

          <button 
           onClick={openChat}
          className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-400">

            Book Free Consultation

            <ArrowRight size={20} />

          </button>

          <p className="mt-5 text-center text-sm text-slate-400">
            100% Free • No Hidden Charges • No Obligation
          </p>

        </div>

      </div>

    </Card>
  );
};

export default CTASection;