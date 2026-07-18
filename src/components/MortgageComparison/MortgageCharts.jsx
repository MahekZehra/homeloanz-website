import Card from "../ui/Card";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const MortgageCharts = ({
  optionA,
  optionB,
  bestOption,
}) => {

  const comparisonData = [
    {
      name: "Option A",
      payment: optionA.monthlyPayment,
    },
    {
      name: "Option B",
      payment: optionB.monthlyPayment,
    },
  ];

  const breakdownData = [
    {
      name: "Principal",
      value: bestOption.loanAmount,
    },
    {
      name: "Interest",
      value: bestOption.totalInterest,
    },
  ];

  const COLORS = [
    "#22d3ee",
    "#34d399",
  ];

  return (

    <div className="mt-10 grid gap-8 lg:grid-cols-2">

      <Card className="p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Monthly Payment Comparison
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={comparisonData}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar
              dataKey="payment"
              fill="#22d3ee"
              radius={[8,8,0,0]}
            />
          </BarChart>
        </ResponsiveContainer>

      </Card>

      <Card className="p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Principal vs Interest
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>

            <Pie
              data={breakdownData}
              dataKey="value"
              outerRadius={100}
            >
              {breakdownData.map((entry,index)=>(
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </Card>

    </div>

  );

};

export default MortgageCharts;