import {
  BookOpen,
  Home,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Mortgage Guide",
    description:
      "Learn the complete mortgage process in Dubai and across the UAE.",
  },
  {
    icon: Home,
    title: "First-Time Buyer Guide",
    description:
      "Everything first-time buyers need to know before applying.",
  },
  {
    icon: HelpCircle,
    title: "Mortgage FAQs",
    description:
      "Answers to common mortgage and home financing questions.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description:
      "Stay updated with UAE mortgage trends and interest rates.",
  },
];

function Resources() {
  return (
    <section
      id="resources"
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            RESOURCES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#071A35]">
            Mortgage Resources & Guides
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-600">
            Helpful guides, FAQs, and mortgage insights to help you make informed financing decisions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
               className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#071A35]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Resources;