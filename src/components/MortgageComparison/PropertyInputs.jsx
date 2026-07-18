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
    <Card className="p-8">

      {/* Header */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">

            <Building2 className="text-cyan-400" size={22} />

          </div>

          <div>

            <h3 className="text-2xl font-bold text-white">
              Loan Details
            </h3>

            <p className="mt-1 text-sm text-slate-400">
               Set your loan amount, down payment and tenure
</p>

          </div>

        </div>

      </div>

      {/* Sliders */}

      <div className="space-y-8">

        <SliderInput
          icon={<Building2 size={18} />}
          title="Property Price"
          value={propertyPrice}
          setValue={setPropertyPrice}
          min={100000}
          max={5000000}
          step={10000}
          prefix="AED "
        />

        <SliderInput
          icon={<Wallet size={18} />}
          title="Down Payment"
          value={downPayment}
          setValue={setDownPayment}
          min={10}
          max={50}
          step={1}
          suffix="%"
        />

        <SliderInput
          icon={<Calendar size={18} />}
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