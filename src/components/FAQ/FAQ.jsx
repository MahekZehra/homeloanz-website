import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the mortgage process work in Dubai?",
    answer:
      "The mortgage process generally involves checking your eligibility, understanding your financing options, preparing the required documents, obtaining lender approval, and completing the property and loan formalities. The exact process can vary depending on the lender, property, and applicant.",
  },
  {
    question: "How much down payment do I need for a home in the UAE?",
    answer:
      "The required down payment can vary depending on factors such as the property value, buyer profile, lender requirements, and applicable UAE regulations. Residents and non-residents may have different financing requirements.",
  },
  {
    question: "Can expatriates get a mortgage in Dubai?",
    answer:
      "Yes. Eligible expatriates may be able to obtain mortgage financing from UAE lenders, subject to factors such as income, employment, residency status, credit profile, property type, and the lender's eligibility criteria.",
  },
  {
    question: "What documents are needed for a UAE mortgage?",
    answer:
      "Mortgage applications commonly require documents such as identification, proof of income, bank statements, employment information, and property-related documents. Exact requirements vary by lender and applicant profile.",
  },
  {
    question: "How long does mortgage approval take in the UAE?",
    answer:
      "Mortgage approval timelines vary depending on the lender, applicant profile, documentation, property, and overall application process. Having complete and accurate documentation can help keep the process organized and efficient.",
  },
  {
    question: "Can I compare different mortgage options in Dubai?",
    answer:
      "Yes. Comparing mortgage options can help you understand differences in interest rates, repayment terms, fees, eligibility requirements, and other financing conditions before choosing an option that suits your circumstances.",
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

        {/* FAQ Header */}
        <div className="text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white">
            Frequently Asked Questions About UAE Mortgages
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-gray-300 text-base md:text-lg leading-8">
            Find answers to common questions about home loans, mortgage
            eligibility, financing, and buying property in Dubai and across
            the UAE.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >

                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus
                      className="shrink-0 text-cyan-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Plus
                      className="shrink-0 text-cyan-400"
                      aria-hidden="true"
                    />
                  )}

                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="border-t border-white/10 px-6 pb-6 pt-5"
                  >
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