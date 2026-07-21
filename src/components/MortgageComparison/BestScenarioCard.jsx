import { Trophy, CheckCircle2 } from "lucide-react";
import Card from "../ui/Card";
import { motion } from "framer-motion";
const CountUp = ({ end }) => <span>{end}</span>;

const BestScenarioCard = ({
  rate,
  monthlyPayment,
  saving,
  loanAmount,
  totalInterest,
  totalPayment,
}) => {
  const stats = [
    {
      label: "Monthly Payment",
      value: monthlyPayment,
      highlight: false,
    },
    {
      label: "Estimated Saving",
      value: saving,
      highlight: true,
    },
    {
      label: "Loan Amount",
      value: loanAmount,
      highlight: false,
    },
    {
      label: "Total Interest",
      value: totalInterest,
      highlight: false,
    },
    {
      label: "Total Mortgage Cost",
      value: totalPayment,
      highlight: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="mt-10 overflow-hidden p-5 md:p-8">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT CONTENT */}

          <div className="max-w-xl">

            <div className="mb-5 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10">
                <Trophy
                  size={28}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[3px] text-emerald-400">
                  Best Mortgage Scenario
                </p>

                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                  Choose {rate}% Interest Rate
                </h2>
              </div>

            </div>

            <p className="text-base md:text-lg leading-8 text-slate-400">
              Based on your selected loan details, this option provides
              the lowest estimated mortgage cost and helps you maximize
              your long-term savings.
            </p>

            <button
              className="
                mt-8
                rounded-xl
                bg-cyan-500
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:bg-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
              "
            >
              Book Free Consultation
            </button>

          </div>

          {/* RIGHT STATS */}

          <div className="grid flex-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {stats.map((item) => (

              <div
                key={item.label}
                className={`
                  rounded-2xl
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  ${
                    item.highlight
                      ? "bg-emerald-400/10 border border-emerald-400/20"
                      : "bg-white/5"
                  }
                `}
              >

                {item.highlight && (
                  <div className="mb-3 flex items-center gap-2">

                    <CheckCircle2
                      size={18}
                      className="text-emerald-400"
                    />

                    <span className="text-sm font-medium text-emerald-400">
                      Recommended
                    </span>

                  </div>
                )}

                <p
                  className={`
                    text-sm
                    ${
                      item.highlight
                        ? "text-emerald-300"
                        : "text-slate-400"
                    }
                  `}
                >
                  {item.label}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">

                  AED{" "}

                  <CountUp
                    end={item.value}
                    duration={0.8}
                    separator=","
                  />

                </h3>

              </div>

            ))}

          </div>

        </div>

      </Card>
    </motion.div>
  );
};

export default BestScenarioCard;