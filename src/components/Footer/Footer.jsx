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
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Mortgage Solutions", href: "#solutions" },
  { label: "Calculator", href: "#calculator" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const mortgageLinks = [
  { label: "Home Purchase", href: "#solutions" },
  { label: "Mortgage Refinancing", href: "#solutions" },
  { label: "Investment Property", href: "#solutions" },
  { label: "Commercial Mortgage", href: "#solutions" },
];

const resourceLinks = [
  { label: "Mortgage Guide", href: "#resources" },
  { label: "UAE Mortgage FAQs", href: "#faq" },
  { label: "Mortgage Resources", href: "#resources" },
  { label: "Privacy Policy", href: "#privacy" },
];

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#071A35] text-white"
    >
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}
          <div className="lg:col-span-2">

            <h2 className="text-2xl font-bold md:text-3xl">
              Home<span className="text-blue-400">Loanz</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-300 md:text-base md:leading-8">
              Helping UAE residents, expatriates, and property investors
              explore suitable mortgage solutions through expert guidance,
              trusted banking partners, and a simple, transparent process.
            </p>

            {/* Contact Information */}
            <address className="mt-6 space-y-3 not-italic">

              <div className="flex items-center gap-3">
                <Phone
                  className="text-blue-400"
                  size={16}
                  aria-hidden="true"
                />

                <a
                  href="tel:+971501234567"
                  className="transition hover:text-blue-400"
                >
                  +971 50 123 4567
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  className="text-blue-400"
                  size={16}
                  aria-hidden="true"
                />

                <a
                  href="mailto:info@homeloanzllc.com"
                  className="transition hover:text-blue-400"
                >
                  info@homeloanzllc.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  className="text-blue-400"
                  size={16}
                  aria-hidden="true"
                />

                <span>
                  Dubai, United Arab Emirates
                </span>
              </div>

            </address>

            {/* Social Icons */}
            <nav
              aria-label="Social media"
              className="mt-8 flex gap-4"
            >

              <a
                href="https://facebook.com/HomeLoanz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HomeLoanz on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:bg-blue-600 md:h-11 md:w-11"
              >
                <FaFacebookF
                  aria-hidden="true"
                  size={16}
                />
              </a>

              <a
                href="https://instagram.com/HomeLoanz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HomeLoanz on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:bg-pink-500 md:h-11 md:w-11"
              >
                <FaInstagram
                  aria-hidden="true"
                  size={16}
                />
              </a>

              <a
                href="https://linkedin.com/HomeLoanz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit HomeLoanz on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:bg-sky-600 md:h-11 md:w-11"
              >
                <FaLinkedinIn
                  aria-hidden="true"
                  size={16}
                />
              </a>

              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with HomeLoanz on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 transition-all duration-300 hover:bg-green-700 md:h-11 md:w-11"
              >
                <FaWhatsapp
                  aria-hidden="true"
                  size={17}
                />
              </a>

            </nav>

          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">

            <h3 className="text-lg font-semibold md:text-xl">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              {quickLinks.map((link) => (
                <li key={link.label}>

                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
                  >

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                    {link.label}

                  </a>

                </li>
              ))}

            </ul>

          </nav>

          {/* Mortgage Solutions */}
          <nav aria-label="Mortgage solutions">

            <h3 className="text-lg font-semibold md:text-xl">
              Mortgage Solutions
            </h3>

            <ul className="mt-5 space-y-3">

              {mortgageLinks.map((item) => (
                <li key={item.label}>

                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
                  >

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                    {item.label}

                  </a>

                </li>
              ))}

            </ul>

          </nav>

          {/* Resources */}
          <nav aria-label="Resources">

            <h3 className="text-lg font-semibold md:text-xl">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">

              {resourceLinks.map((item) => (
                <li key={item.label}>

                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
                  >

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="opacity-0 transition group-hover:opacity-100"
                    />

                    {item.label}

                  </a>

                </li>
              ))}

            </ul>

          </nav>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 sm:px-6 md:flex-row md:gap-4 md:py-6">

          <p className="text-center text-xs text-gray-300 md:text-left md:text-sm">
            © 2026 HomeLoanz LLC. All Rights Reserved.
          </p>

          <p className="text-center text-xs text-gray-300 md:text-right md:text-sm">
            Designed & Developed by MZ Creatives using React & Tailwind CSS
          </p>

        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with HomeLoanz on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-green-600 md:bottom-8 md:right-8 md:h-16 md:w-16"
      >
        <FaWhatsapp
          aria-hidden="true"
          size={26}
        />
      </a>

    </footer>
  );
}

export default Footer;