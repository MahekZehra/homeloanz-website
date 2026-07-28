import Card from "../ui/Card";

const COLORS = ["#22d3ee", "#34d399"];

const MortgageCharts = ({
  optionA,
  optionB,
  bestOption,
}) => {

  const maxPayment = Math.max(
    optionA.monthlyPayment,
    optionB.monthlyPayment
  );

  const optionAHeight =
    (optionA.monthlyPayment / maxPayment) * 180;

  const optionBHeight =
    (optionB.monthlyPayment / maxPayment) * 180;

  const principal = bestOption.loanAmount;

  const interest = bestOption.totalInterest;

  const total = principal + interest;

  const principalAngle = (principal / total) * 360;

  const radius = 80;

  const circumference = 2 * Math.PI * radius;

  const principalLength =
    (principalAngle / 360) * circumference;

  return (

    <div className="mt-8 md:mt-10 grid gap-8 lg:grid-cols-2">

      {/* Monthly Comparison */}

      <Card className="p-6 md:p-8">

        <h2 className="mb-8 text-xl md:text-2xl font-bold text-white">

          Monthly Payment Comparison

        </h2>

        <div className="flex h-64 items-end justify-evenly">

          {/* Option A */}

          <div className="flex flex-col items-center">

            <div
              className="w-16 rounded-t-xl bg-cyan-400 transition-all duration-500"
              style={{
                height: `${optionAHeight}px`,
              }}
            />

            <p className="mt-4 text-sm text-slate-300">

              Option A

            </p>

            <span className="mt-1 text-cyan-400 font-semibold">

              AED {Math.round(optionA.monthlyPayment).toLocaleString()}

            </span>

          </div>

          {/* Option B */}

          <div className="flex flex-col items-center">

            <div
              className="w-16 rounded-t-xl bg-emerald-400 transition-all duration-500"
              style={{
                height: `${optionBHeight}px`,
              }}
            />

            <p className="mt-4 text-sm text-slate-300">

              Option B

            </p>

            <span className="mt-1 text-emerald-400 font-semibold">

              AED {Math.round(optionB.monthlyPayment).toLocaleString()}

            </span>

          </div>

        </div>

      </Card>

      {/* Pie Chart */}

      <Card className="p-6 md:p-8">

        <h2 className="mb-8 text-xl md:text-2xl font-bold text-white">

          Principal vs Interest

        </h2>

        <div className="flex flex-col items-center">

          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
          >

            <circle
              cx="110"
              cy="110"
              r={radius}
              stroke="#1e293b"
              strokeWidth="28"
              fill="none"
            />

            <circle
              cx="110"
              cy="110"
              r={radius}
              stroke={COLORS[0]}
              strokeWidth="28"
              fill="none"
              strokeDasharray={`${principalLength} ${circumference}`}
              transform="rotate(-90 110 110)"
            />

          </svg>

          <div className="mt-8 space-y-4 w-full">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <span className="h-4 w-4 rounded-full bg-cyan-400" />

                <span className="text-slate-300">

                  Principal

                </span>

              </div>

              <span className="font-semibold text-white">

                AED {Math.round(principal).toLocaleString()}

              </span>

            </div>

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <span className="h-4 w-4 rounded-full bg-emerald-400" />

                <span className="text-slate-300">

                  Interest

                </span>

              </div>

              <span className="font-semibold text-white">

                AED {Math.round(interest).toLocaleString()}

              </span>

            </div>

          </div>

        </div>

      </Card>

    </div>

  );

};

export default MortgageCharts;