import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ openChat }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Mortgage Solutions", id: "solutions" },
    { name: "Calculator", id: "calculator" },
    { name: "Resources", id: "resources" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8 py-4 md:py-6">

        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Home<span className="text-blue-500">Loanz</span>
          </h1>

          <p className="text-[10px] md:text-xs text-gray-300 tracking-[0.25em]">
            LLC FZ
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer transition hover:text-blue-400"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={openChat}
          className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Book Consultation
        </button>

        {/* Mobile Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#071A35] border-t border-white/10">
          <ul className="flex flex-col py-4">

            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer px-6 py-4 text-white hover:bg-blue-600/20"
              >
                {item.name}
              </li>
            ))}

            <div className="px-6 pb-5 pt-2">
              <button
                onClick={() => {
                  openChat();
                  setMenuOpen(false);
                }}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Book Consultation
              </button>
            </div>

          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;