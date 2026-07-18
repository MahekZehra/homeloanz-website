const CheckCircle2 = () => <span>✅</span>;
import Card from "../ui/Card";
import CountUp from "react-countup";

const ComparisonCard = ({
  title,
  rate,
  monthlyPayment,
  totalInterest,
  totalPayment,
  recommended,
}) => {
  return (
    <Card
  className={`
    relative
    overflow-hidden
    p-6
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-2xl
    ${
      recommended
        ? "border border-emerald-400/40 bg-emerald-400/5"
        : ""
    }
  `}
>
    <div
  className={`
    absolute
    left-0
    top-0
    h-1
    w-full
    ${
      recommended
        ? "bg-emerald-400"
        : "bg-cyan-400"
    }
  `}
/>
      {recommended && (
        <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1">
          <CheckCircle2
            size={16}
            className="text-emerald-400"
          />
          <span className="text-sm font-medium text-emerald-400">
            Recommended
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-slate-400">
        Interest Rate
      </p>

      <h4
  className={`
    mt-1
    text-4xl
    font-bold
    ${
      recommended
        ? "text-emerald-400"
        : "text-cyan-400"
    }
  `}
>
        {rate}%
      </h4>

    <div className="mt-8 space-y-5 rounded-2xl bg-white/5 p-5">

        <div>
          <p className="text-sm text-slate-400">
            Monthly Payment
          </p>

          <p className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
            AED{" "}
{monthlyPayment}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Total Interest
          </p>

          <p className="text-xl font-semibold text-white">
            AED{" "}
{totalInterest}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Total Payment
          </p>

          <p className="text-xl font-semibold text-white">
            AED{" "}
{totalPayment}
          </p>
        </div>

      </div>
    </Card>
  );
};

export default ComparisonCard;