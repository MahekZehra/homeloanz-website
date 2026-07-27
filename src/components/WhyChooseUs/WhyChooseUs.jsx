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
    title:"Access Leading UAE Banks",
    description:
    "Compare mortgage rates from leading UAE banks and financial institutions to find the best home loan for your needs.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Expert Mortgage Advisors",
    description:
    "Our experienced mortgage advisors guide you through every step, from consultation to final mortgage approval.",
  },
  {
    icon: Zap,
    title: "Fast Mortgage Approvals",
    description:
       "Enjoy a faster mortgage approval process with expert document review and streamlined application handling.",
  },
  {
    icon: Target,
    title: "Personalized Home Loan Solutions",
    description:
      "Receive customized home loan and mortgage solutions designed around your financial goals and eligibility.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Mortgage Process",
    description:
       "No hidden fees. We provide clear communication and complete transparency from consultation to loan approval.",
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

            Why HomeLoanz is the Trusted Mortgage Broker in Dubai & UAE

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-gray-600">

            HomeLoanz LLC is a trusted mortgage broker in Dubai helping UAE residents, expatriates, and property investors secure the right home loan. We compare mortgage options from leading UAE banks and provide expert guidance from consultation to approval.

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
                    aria-hidden="true"
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