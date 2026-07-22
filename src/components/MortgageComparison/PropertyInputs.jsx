import {
  Building2,
  Wallet,
  Calendar,
} from "lucide-react";

import Card from "../ui/Card";
import SliderInput from "./SliderInput";

const PropertyInputs = ({
  propertyPrice,
  setPropertyPrice,
  downPayment,
  setDownPayment,
  tenure,
  setTenure,
}) => {
  return (
  <Card className="p-5 md:p-8"> 

      {/* Header */}

      <div className="mb-6 md:mb-8">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-cyan-400/10">

            <Building2 className="text-cyan-400" size={20} />

          </div>

          <div>

            <h3 className="text-base md:text-xl md:text-2xl font-bold text-white">
              Loan Details
            </h3>

            <p className="mt-1 text-xs md:text-sm text-slate-400">
               Set your loan amount, down payment and tenure
</p>

          </div>

        </div>

      </div>

      {/* Sliders */}

      <div className="space-y-6 md:space-y-8">

        <SliderInput
          icon={<Building2 size={18} aria-hidden="true" />}
          title="Property Price"
          value={propertyPrice}
          setValue={setPropertyPrice}
          min={100000}
          max={5000000}
          step={10000}
          prefix="AED "
        />

        <SliderInput
          icon={<Wallet size={18} aria-hidden="true" />}
          title="Down Payment"
          value={downPayment}
          setValue={setDownPayment}
          min={10}
          max={50}
          step={1}
          suffix="%"
        />

        <SliderInput
          icon={<Calendar size={18} aria-hidden="true" />}
          title="Loan Tenure"
          value={tenure}
          setValue={setTenure}
          min={5}
          max={30}
          step={1}
          suffix=" Years"
        />

      </div>

    </Card>
  );
};

export default PropertyInputs;