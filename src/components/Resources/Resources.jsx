import {
  BookOpen,
  Home,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "UAE Mortgage Guide",
    description:
      "Understand how mortgages work in Dubai and across the UAE, including eligibility, required documents, financing options, and the application process.",
  },
  {
    icon: Home,
    title: "First-Time Home Buyer Guide",
    description:
      "Learn what first-time buyers in Dubai and the UAE should consider before choosing a property, arranging a down payment, and applying for a home loan.",
  },
  {
    icon: HelpCircle,
    title: "UAE Mortgage FAQs",
    description:
      "Find clear answers to common questions about mortgage eligibility, down payments, interest rates, home loans, and property financing in the UAE.",
  },
  {
    icon: TrendingUp,
    title: "UAE Mortgage Market Insights",
    description:
      "Explore mortgage trends, interest-rate considerations, and financing insights to help you make more informed property decisions in the UAE.",
  },
];

function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="mortgage-resources-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            MORTGAGE RESOURCES
          </span>

          <h2
            id="mortgage-resources-heading"
            className="mt-5 text-4xl font-bold text-[#071A35] md:text-5xl"
          >
            UAE Mortgage Resources & Guides
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            Explore practical mortgage guides, home buying resources, FAQs,
            and UAE mortgage insights to help you understand your financing
            options and make more informed property decisions.
          </p>

        </div>

        {/* Resource Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    className="text-blue-600"
                    size={26}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#071A35]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Resources;