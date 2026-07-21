import {
  PhoneCall,
  Landmark,
  FileCheck,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Free Consultation",
    description:
      "Speak with our mortgage specialists to understand your goals and financial profile.",
  },
  {
    icon: Landmark,
    number: "02",
    title: "Bank Matching",
    description:
      "We compare offers from leading UAE banks to find the most suitable mortgage.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Application",
    description:
      "Our team prepares and submits your application with complete documentation.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Approval",
    description:
      "Receive approval quickly and move one step closer to your new property.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">

      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs md:text-sm font-semibold text-blue-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#071A35]">

            Your Mortgage Journey in 4 Easy Steps

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-gray-600">

            We simplify every stage of your mortgage process—from your
            first consultation to final bank approval.

          </p>

        </div>

        {/* Timeline */}

        <div className="mt-12 md:mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="relative text-center"
              >

                {/* Connector */}

                {index !== steps.length - 1 && (

                  <div className="absolute left-[60%] top-10 hidden h-[2px] w-full bg-blue-200 lg:block"></div>

                )}

                {/* Circle */}

                <div className="relative z-10 mx-auto flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-blue-600 shadow-lg">

                  <Icon size={28} className="text-white" />

                </div>

                {/* Number */}

                <div className="mt-5 text-blue-600 font-bold text-xs md:text-sm tracking-widest">

                  STEP {step.number}

                </div>

                {/* Title */}

               <h3 className="mt-3 text-base md:text-xl md:text-2xl font-bold text-[#071A35]">

                  {step.title}

                </h3>

                {/* Description */}

                <p className="mt-3 text-sm md:text-base leading-7 md:leading-8 text-gray-600">

                  {step.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;