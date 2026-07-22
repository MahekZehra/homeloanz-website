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
      "HomeLoanz made our first home purchase incredibly smooth. The team explained every step clearly and secured us a fantastic mortgage rate.",
  },
  {
    name: "Omar Khalid",
    location: "Abu Dhabi",
    initials: "OK",
    bank: "ADCB",
    review:
      "Their experts compared multiple banks and helped us choose the best financing option. Highly recommended for anyone buying property in the UAE.",
  },
  {
    name: "Ayesha Khan",
    location: "Sharjah",
    initials: "AK",
    bank: "Mashreq",
    review:
      "Excellent communication, fast approval, and complete transparency throughout the process. I couldn't have asked for a better experience.",
  },
];

function Testimonials() {
  return (
    <section 
    id="resources"
    className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F5F9FF] py-16 md:py-28">
    <div className="max-w-7xl mx-auto px-5 sm:px-6"> 
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-[120px]"></div>

<div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-[140px]"></div>

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs md:text-sm font-semibold text-blue-700">
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#071A35]">

            What Our Clients Say

          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base md:text-base md:text-xl leading-7 md:leading-8 text-slate-600">

            Hundreds of homeowners and investors across the UAE trust
            HomeLoanz to make their mortgage journey simple, transparent,
            and stress-free.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-12 md:mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((client, index) => (

            <div
              key={index}
             className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 backdrop-blur-xl p-6 md:p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)]"
            >

              {/* Stars */}

              <div className="flex items-center gap-1 text-amber-400">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="mt-5 text-[15px] md:text-[17px] leading-7 md:leading-8 text-slate-600">

                "{client.review}"

              </p>

              {/* User */}

              <div className="mt-8 flex items-center justify-between">

                <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-lg md:text-base md:text-xl font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-110">

                    {client.initials}

                  </div>

                  <div>

                  <h4 className="text-base md:text-lg font-bold text-[#071A35]">

                      {client.name}

                    </h4>

                    <p className="text-xs md:text-sm text-gray-500">

                      {client.location}

                    </p>

                  </div>

                </div>

              </div>

              {/* Bank Badge */}

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs md:text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">

                <BadgeCheck size={16} />

                Financed by {client.bank}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;