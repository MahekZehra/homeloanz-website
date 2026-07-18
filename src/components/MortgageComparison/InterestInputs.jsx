import {
  Percent,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import Card from "../ui/Card";
import SliderInput from "./SliderInput";


const InterestInputs = ({
  rateA,
  setRateA,
  rateB,
  setRateB,
}) => {

  return (
    <Card className="p-8">

      {/* Header */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">

            <Percent
              className="text-cyan-400"
              size={22}
            />

          </div>


          <div>

            <h3 className="text-2xl font-bold text-white">
              Interest Comparison
            </h3>


            <p className="mt-1 text-sm text-slate-400">
              Compare different mortgage rates
            </p>

          </div>

        </div>

      </div>


      {/* Sliders */}

      <div className="space-y-8">


        <SliderInput

          icon={<TrendingDown size={18} />}

          title="Interest Rate A"

          value={rateA}

          setValue={setRateA}

          min={2}

          max={8}

          step={0.01}

          suffix="%"

        />


        <SliderInput

          icon={<TrendingUp size={18} />}

          title="Interest Rate B"

          value={rateB}

          setValue={setRateB}

          min={2}

          max={8}

          step={0.01}

          suffix="%"

        />


      </div>


    </Card>
  );
};


export default InterestInputs;