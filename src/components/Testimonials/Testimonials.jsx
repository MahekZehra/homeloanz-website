import {
  Star,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    location: "Dubai",
    initials: "SA",
    bank: "Emirates NBD",
    review:
      "HomeLoanz made our first home purchase incredibly smooth. The team explained every step clearly and helped us understand our mortgage options.",
  },
  {
    name: "Omar Khalid",
    location: "Abu Dhabi",
    initials: "OK",
    bank: "ADCB",
    review:
      "The team compared different mortgage options and helped us understand which financing solution was most suitable for our property purchase in the UAE.",
  },
  {
    name: "Ayesha Khan",
    location: "Sharjah",
    initials: "AK",
    bank: "Mashreq",
    review:
      "Excellent communication and clear guidance throughout the mortgage process. The team made the home financing journey much easier to understand.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F5F9FF] py-16 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Background Effects */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-[140px]"
        />

        {/* Heading */}
        <div className="relative text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700 md:text-sm">
            CLIENT TESTIMONIALS
          </span>

          <h2
            id="testimonials-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#071A35] sm:text-4xl lg:text-6xl"
          >
            What Our Mortgage Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-xl md:leading-8">
            See how HomeLoanz supports home buyers and property investors
            through the mortgage process with clear guidance, transparent
            communication, and tailored home financing solutions across the UAE.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="relative mt-12 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((client, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)] md:p-8"
            >

              {/* Stars */}
              <div
                className="flex items-center gap-1 text-amber-400"
                aria-label="5 star review"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-[15px] leading-7 text-slate-600 md:text-[17px] md:leading-8">
                "{client.review}"
              </p>

              {/* Client */}
              <div className="mt-8 flex items-center">

                <div className="flex items-center gap-4">

                  <div
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-110 md:h-16 md:w-16"
                  >
                    {client.initials}
                  </div>

                  <div>

                    <h3 className="text-base font-bold text-[#071A35] md:text-lg">
                      {client.name}
                    </h3>

                    <p className="text-xs text-gray-500 md:text-sm">
                      {client.location}
                    </p>

                  </div>

                </div>

              </div>

              {/* Financing Badge */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 md:text-sm">

                <BadgeCheck
                  size={16}
                  aria-hidden="true"
                />

                Mortgage Client
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;