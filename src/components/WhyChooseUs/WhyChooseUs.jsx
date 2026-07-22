import {
  Building2,
  BriefcaseBusiness,
  Zap,
  Target,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Wide Bank Network",
    description:
      "Access mortgage solutions from the UAE's leading banks and financial institutions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Expert Guidance",
    description:
      "Our experienced mortgage advisors guide you from consultation to approval.",
  },
  {
    icon: Zap,
    title: "Fast Approvals",
    description:
      "Quick documentation and streamlined processing for faster approvals.",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description:
      "Mortgage plans customized according to your financial goals and eligibility.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "No hidden charges. Clear communication and complete transparency throughout.",
  },
];

function WhyChooseUs() {
  return (
    <section 
     id="about"
    className="bg-[#F8FAFC] py-16 md:py-24">

      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs md:text-sm font-semibold text-blue-700">
            WHY CHOOSE HOMELOANZ
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A35] leading-tight">

            Why HomeLoanz is Trusted Across UAE

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-gray-600">

            We simplify the mortgage journey by combining expert advice,
            trusted banking partnerships, and personalized financing
            solutions designed around your needs.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 md:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
               className="group rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">

                  <Icon
                    size={26}
                    className="text-blue-600 transition group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-base md:text-xl md:text-2xl font-bold text-[#071A35]">

                  {feature.title}

                </h3>

                <p className="mt-3 text-sm md:text-base leading-7 md:leading-8 text-gray-600">

                  {feature.description}

                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;