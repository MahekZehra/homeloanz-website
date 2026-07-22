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
    <Card className="p-5 md:p-8">

      {/* Header */}

      <div className="mb-6 md:mb-8">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-cyan-400/10">

            <Percent
              className="text-cyan-400"
              size={20}
               aria-hidden="true"
            />

          </div>


          <div>

            <h3 className="text-base md:text-xl md:text-2xl font-bold text-white">
              Interest Comparison
            </h3>


            <p className="mt-1 text-xs md:text-sm text-slate-400">
              Compare different mortgage rates
            </p>

          </div>

        </div>

      </div>


      {/* Sliders */}

      <div className="space-y-6 md:space-y-8">


        <SliderInput

          icon={<TrendingDown size={18}  aria-hidden="true" />}

          title="Interest Rate A"

          value={rateA}

          setValue={setRateA}

          min={2}

          max={8}

          step={0.01}

          suffix="%"

        />


        <SliderInput

          icon={<TrendingUp size={18}  aria-hidden="true" />}

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