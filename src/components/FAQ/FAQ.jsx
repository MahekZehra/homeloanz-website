import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is a mortgage calculator?",
    answer:
      "A mortgage calculator helps estimate your monthly repayments based on the property price, down payment, interest rate, and loan tenure.",
  },
  {
    question: "How much down payment is required in the UAE?",
    answer:
      "The required down payment depends on UAE regulations, the property value, and whether you're a resident or non-resident buyer.",
  },
  {
    question: "Can expatriates get a mortgage in Dubai?",
    answer:
      "Yes. Many UAE banks provide mortgage solutions for expatriates, subject to income, employment status, and eligibility requirements.",
  },
  {
    question: "How long does mortgage approval take?",
    answer:
      "Most approvals take between 3–10 working days depending on documentation and the lender's internal process.",
  },
  {
    question: "Are these mortgage calculations accurate?",
    answer:
      "The calculator provides estimated values for planning purposes. Final repayment amounts depend on the lender's approved interest rate and loan terms.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="bg-[#071A35] py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-5">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-300 text-base md:text-lg leading-8">
            Everything you need to know about mortgages, financing,
            approvals, and buying property in the UAE.
          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >

                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus className="text-cyan-400" />
                  ) : (
                    <Plus className="text-cyan-400" />
                  )}

                </button>

                {isOpen && (

                  <div className="border-t border-white/10 px-6 pb-6 pt-5">

                    <p className="leading-8 text-gray-300">
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQ;