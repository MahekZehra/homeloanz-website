import {
  User,
  Mail,
  Phone,
  Building2,
  BadgeCheck,
  MessageSquare,
} from "lucide-react";

import { useState } from "react";
import emailjs from "@emailjs/browser";

function Consultation() {
    const [status, setStatus] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus("✅ Thank you! Your inquiry has been sent successfully.");
    e.target.reset();
  } catch (error) {
    console.error(error);
    setStatus("❌ Something went wrong. Please try again.");
  }

  setLoading(false);
};

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-white to-[#EEF5FF] py-28">

     <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-[130px]"></div>

<div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-[150px]"></div>

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            FREE CONSULTATION
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-extrabold tracking-tight font-bold text-[#071A35]">

            Get a Free Mortgage Consultation

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600 leading-8 text-gray-600">

            Fill out the form below and one of our mortgage experts
            will contact you within 24 hours with personalized
            financing options.

          </p>

        </div>

        {/* Form Card */}

        <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-[34px] border border-white/60 bg-white/80 backdrop-blur-xl p-10 shadow-[0_30px_80px_rgba(37,99,235,.12)]">

          {/* Form Starts */}

         <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400"></div>

           <form onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">

              {/* Full Name */}

              <div className="relative">

                <User
                  className="absolute left-5 top-5 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                    name="from_name"
                  placeholder="Full Name"
                   required
                  className="h-16 w-full rounded-2xl border border-slate-200 bg-slate-50 focus:border-blue-500
focus:ring-4
focus:ring-blue-100 pl-14 pr-4 outline-none transition  focus:bg-white"
                />

              </div>

              {/* Phone */}

              <div className="relative">

                <Phone
                  className="absolute left-5 top-5 text-gray-400"
                  size={20}
                />

                <input
                  type="tel"
                   name="phone"
                  placeholder="Phone Number"
                  required
                  className="h-16 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-4 outline-none transition focus:border-blue-600 focus:bg-white"
                />

              </div>

              {/* Email */}

              <div className="relative">

                <Mail
                  className="absolute left-5 top-5 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                    name="from_email"
                  placeholder="Email Address"
                  required
                  className="h-16 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-4 outline-none transition focus:border-blue-600 focus:bg-white"
                />

              </div>

              {/* Property Value */}

              <div className="relative">

                <Building2
                  className="absolute left-5 top-5 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                   name="property_value"
                  placeholder="Property Value (AED)"
                  required
                  className="h-16 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-4 outline-none transition focus:border-blue-600 focus:bg-white"
                />

              </div>

              {/* Resident Status */}

              <div className="relative">

                <BadgeCheck
                  className="absolute left-5 top-5 text-gray-400"
                  size={20}
                />

                <select 
                  name="resident_status"
                 required
                 className="h-16 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-4 outline-none transition focus:border-blue-600 focus:bg-white">

                  <option>Resident Status</option>

                  <option>UAE Resident</option>

                  <option>Non-Resident</option>

                  <option>First Time Buyer</option>

                  <option>Investor</option>

                </select>

              </div>

              {/* Message */}

              <div className="relative md:col-span-2">

                <MessageSquare
                  className="absolute left-5 top-5 text-gray-400"
                  size={20}
                />

                <textarea
                  rows="5"
                   name="message"
  required
                  placeholder="Tell us about your mortgage requirements..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-4 pt-5 outline-none transition focus:border-blue-600 focus:bg-white"
                />

              </div>

            </div>
            {/* Button */}

            <div className="mt-10 flex flex-col items-center">

              <button
                type="submit"
                 disabled={loading}
                className="rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:shadow-[0_15px_40px_rgba(37,99,235,.35)] px-12 py-5 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-blue-300"
              >
                 {loading ? "Sending..." : "Submit Inquiry"}
              </button>
              {status && (
  <p
    className={`mt-4 text-center font-medium ${
      status.includes("Thank")
        ? "text-green-600"
        : "text-red-600"
    }`}
  >
    {status}
  </p>
)}

              <div className="mt-5 text-sm text-gray-500">
 <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-slate-500">

  <div className="flex items-center gap-2">

    🔒

    <span>100% Secure</span>

  </div>

  <div className="flex items-center gap-2">

    ⚡

    <span>24h Response</span>

  </div>

  <div className="flex items-center gap-2">

    🏦

    <span>Trusted UAE Banks</span>

  </div>



</div>

 
              </div>

 
            </div>

 </form>

      </div>

  

    </section>
  );
}

export default Consultation;