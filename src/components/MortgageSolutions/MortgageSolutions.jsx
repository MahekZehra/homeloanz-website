import {
  Home,
  RefreshCcw,
  Building2,
  Landmark,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Purchase",
    description:
      "Secure the best home loan for buying your dream property anywhere in Dubai and across the UAE.",
  },
  {
    icon: RefreshCcw,
    title: "Mortgage Refinance",
    description:
      "Reduce your monthly repayments or get better interest rates by refinancing your existing mortgage.",
  },
  {
    icon: Building2,
    title: "Investment Property",
    description:
      "Mortgage solutions for property investors looking to expand their real estate portfolio.",
  },
  {
    icon: Landmark,
    title: "Commercial Mortgage",
    description:
      "Flexible financing options for offices, retail spaces, warehouses, and commercial properties.",
  },
];

function MortgageSolutions() {
  return (
    <section
      id="solutions"
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#071A35]">
            Mortgage Solutions for Every Need
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            HomeLoanz LLC provides expert mortgage solutions across Dubai
            and the UAE for home buyers, investors, and businesses.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                  <Icon
                    className="text-blue-600"
                    size={30}
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#071A35]">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {service.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default MortgageSolutions;