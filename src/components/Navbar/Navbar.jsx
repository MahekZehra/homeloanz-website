import { FaBars } from "react-icons/fa";

function Navbar({ openChat }) {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8 py-4 md:py-6">

        {/* Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Home<span className="text-blue-500">Loanz</span>
          </h1>
          <p className="text-[10px] md:text-xs text-gray-300 tracking-[0.25em]">
            LLC FZ
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
          <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-400 cursor-pointer transition">About Us</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Mortgage Solutions</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Calculator</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Resources</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
        </ul>

        {/* CTA Button */}
        <button 
        onClick={openChat}
        className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Book Consultation
        </button>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-white text-base md:text-xl p-2">
          <FaBars />
        </button>

      </nav>
    </header>
  );
}

export default Navbar;