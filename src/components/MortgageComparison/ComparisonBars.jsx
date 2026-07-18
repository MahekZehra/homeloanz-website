import Card from "../ui/Card";
import CountUp from "react-countup";

const ComparisonRow = ({
  title,
  valueA,
  valueB,
}) => {

  const max = Math.max(valueA, valueB);

  const widthA = (valueA / max) * 100;
  const widthB = (valueB / max) * 100;

  const betterA = valueA < valueB;

  return (

    <div className="space-y-5">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      {/* Option A */}

      <div>

        <div className="mb-2 flex items-center justify-between">

          <span className="text-slate-300">
            Option A
          </span>

          <span className="font-semibold text-white">
            AED{" "}
AED {valueA.toLocaleString()}
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <div
            style={{
              width: `${widthA}%`,
            }}
            className={`
              h-full
              transition-all
              duration-700
              ${
                betterA
                  ? "bg-emerald-400"
                  : "bg-cyan-400"
              }
            `}
          />

        </div>

      </div>

      {/* Option B */}

      <div>

        <div className="mb-2 flex items-center justify-between">

          <span className="text-slate-300">
            Option B
          </span>

          <span className="font-semibold text-white">
           AED{" "}
AED {valueB.toLocaleString()}
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <div
            style={{
              width: `${widthB}%`,
            }}
            className={`
              h-full
              transition-all
              duration-700
              ${
                !betterA
                  ? "bg-emerald-400"
                  : "bg-cyan-400"
              }
            `}
          />

        </div>

      </div>

    </div>

  );

};

const ComparisonBars = ({
  optionA,
  optionB,
}) => {

  return (

    <Card className="mt-10 p-8">

      <h2 className="mb-8 text-3xl font-bold text-white">

        Mortgage Comparison

      </h2>

      <div className="space-y-10">

        <ComparisonRow
          title="Monthly Payment"
          valueA={optionA.monthlyPayment}
          valueB={optionB.monthlyPayment}
        />

        <ComparisonRow
          title="Total Interest"
          valueA={optionA.totalInterest}
          valueB={optionB.totalInterest}
        />

        <ComparisonRow
          title="Total Mortgage Cost"
          valueA={optionA.totalPayment}
          valueB={optionB.totalPayment}
        />

      </div>

    </Card>

  );

};

export default ComparisonBars;