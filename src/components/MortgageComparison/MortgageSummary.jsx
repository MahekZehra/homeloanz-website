import Card from "../ui/Card";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Home = () => <span>🏠</span>;
const Wallet = () => <span>💰</span>;
const CalendarDays = () => <span>📅</span>;
const Percent = () => <span>%</span>;

const MortgageSummary = ({
  loanAmount,
  downPayment,
  tenure,
  bestRate,
}) => {
  const items = [
    {
      icon: Home,
      label: "Loan Amount",
      value: Number(loanAmount),
    }, 
    {
      icon: Wallet,
      label: "Down Payment",
      value: `${downPayment}%`,
    },
    {
      icon: CalendarDays,
      label: "Loan Tenure",
      value: `${tenure} Years`,
    },
    {
      icon: Percent,
      label: "Best Rate",
      value: `${bestRate}%`,
    },
  ];
    return (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
>
    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.label}
            className="group p-6 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Icon
                size={24}
                className="text-cyan-400"
              />
            </div>

            <p className="text-sm text-slate-400">
              {item.label}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
  {item.label === "Loan Amount" ? (
    <>
      AED{" "}
      {item.value}
    </>
  ) : (
    item.value
  )}
</h3>
          </Card>
        );
      })}
      </div>
      </motion.div>
    );
  };
export default MortgageSummary;