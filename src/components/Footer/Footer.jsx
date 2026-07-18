import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "About Us",
  "Mortgage Solutions",
  "Calculator",
  "Resources",
  "Contact",
];

const mortgageLinks = [
  "Home Purchase",
  "Refinancing",
  "Investment Property",
  "Commercial Mortgage",
];

const resources = [
  "Mortgage Guide",
  "FAQs",
  "Blog",
  "Privacy Policy",
];

function Footer() {
  return (
    <footer className="bg-[#071A35] text-white">

      {/* Top Section */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold">

              Home<span className="text-blue-400">Loanz</span>

            </h2>

            <p className="mt-6 leading-8 text-gray-300 max-w-md">

              Helping UAE residents and investors secure the best
              mortgage solutions through trusted banking partners,
              expert guidance, and a simple, transparent process.

            </p>

            {/* Contact */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">

                <Phone className="text-blue-400" size={18} />

                <span>+971 50 123 4567</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="text-blue-400" size={18} />

                <span>info@homeloanzllc.com</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="text-blue-400" size={18} />

                <span>Dubai, United Arab Emirates</span>

              </div>

            </div>

            {/* Social Icons */}

         <div className="mt-8 flex gap-4">

  <a
    href="#"
    className="h-11 w-11 rounded-xl bg-white/10 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
  >
    <FaFacebookF size={16} />
  </a>

  <a
    href="#"
    className="h-11 w-11 rounded-xl bg-white/10 hover:bg-pink-500 transition-all duration-300 flex items-center justify-center"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="#"
    className="h-11 w-11 rounded-xl bg-white/10 hover:bg-sky-600 transition-all duration-300 flex items-center justify-center"
  >
    <FaLinkedinIn size={16} />
  </a>

  <a
    href="https://wa.me/971501234567"
    target="_blank"
    rel="noopener noreferrer"
    className="h-11 w-11 rounded-xl bg-green-600 hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
  >
    <FaWhatsapp size={18} />
  </a>
            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">

              Quick Links

            </h3>

            <ul className="mt-6 space-y-4">

              {quickLinks.map((link) => (

                <li key={link}>

                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
                  >

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                    {link}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Mortgage Solutions */}

          <div>

            <h3 className="text-xl font-semibold">

              Mortgage Solutions

            </h3>

            <ul className="mt-6 space-y-4">

              {mortgageLinks.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
                  >

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold">

              Resources

            </h3>

            <ul className="mt-6 space-y-4">

              {resources.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
                  >

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">

            © 2026 HomeLoanz LLC. All Rights Reserved.

          </p>

          <p className="text-gray-400 text-sm">

            Designed & Developed with ❤️ using React & Tailwind CSS

          </p>

        </div>

      </div>

      {/* Floating WhatsApp Button */}

      <a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-green-600"
      >

        💬

      </a>

    </footer>
  );
}

export default Footer;