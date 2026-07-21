import {
  Wallet,
  BadgeDollarSign,
  Landmark,
} from "lucide-react";

import Card from "../ui/Card";


const LoanBreakdown = ({
  loanAmount,
  totalInterest,
  totalPayment,
}) => {
  const data = [
    {
      icon: Landmark,
      label: "Loan Amount",
      value: loanAmount,
      color: "text-cyan-400",
    },
    {
      icon: BadgeDollarSign,
      label: "Total Interest",
      value: totalInterest,
      color: "text-orange-400",
    },
    {
      icon: Wallet,
      label: "Total Payment",
      value: totalPayment,
      color: "text-emerald-400",
    },
  ];

  return (
    <Card className="mt-8 md:mt-10 p-5 md:p-8">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Loan Breakdown
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {data.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <Icon
                  className={item.color}
                  size={24}
                />
              </div>

              <p className="text-slate-400">
                {item.label}
              </p>

              <h3
                className={`mt-2 text-base md:text-xl md:text-2xl font-bold ${item.color}`}
              >
{"AED "} {Number(item.value).toLocaleString()}
              </h3>
            </div>
          );
        })}

      </div>

    </Card>
  );
};

export default LoanBreakdown;