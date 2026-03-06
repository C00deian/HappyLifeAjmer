import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"}`}
    >
      {/* Logo Row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://happylifeajmer.com/wp-content/uploads/2023/06/dr-smn-e1687060130821.png"
            alt="Happy Life Hospital Logo"
            className="h-14 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div>
            <div className="font-poppins font-bold text-navy text-lg leading-tight">
              Happy Life
            </div>
            <div className="font-poppins font-medium text-primary text-sm leading-tight">
              Multispeciality Hospital
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-poppins font-medium text-navy hover:text-primary transition-colors"
          >
            Home
          </Link>
          <a
            href="#services"
            className="font-poppins font-medium text-navy hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#doctors"
            className="font-poppins font-medium text-navy hover:text-primary transition-colors"
          >
            Doctors
          </a>
          <a
            href="#facility"
            className="font-poppins font-medium text-navy hover:text-primary transition-colors"
          >
            Facility
          </a>
          <a
            href="#locations"
            className="font-poppins font-medium text-navy hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Marquee Banner */}
      <div className="bg-primary text-white py-2 overflow-hidden">
        <div className="marquee-wrapper">
          <div className="marquee-inner font-poppins font-semibold text-sm tracking-widest uppercase">
            🏥&nbsp;&nbsp;AIIMS &amp; LADY HARDINGE, NEW DELHI DOCTORS IN AJMER
            &nbsp;&nbsp;|&nbsp;&nbsp; AIIMS &amp; LADY HARDINGE, NEW DELHI
            DOCTORS IN AJMER &nbsp;&nbsp;|&nbsp;&nbsp; AIIMS &amp; LADY
            HARDINGE, NEW DELHI DOCTORS IN AJMER &nbsp;&nbsp;|&nbsp;&nbsp; AIIMS
            &amp; LADY HARDINGE, NEW DELHI DOCTORS IN AJMER &nbsp;&nbsp;🏥
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-poppins font-medium text-navy hover:text-primary transition-colors"
            >
              Home
            </Link>
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="font-poppins font-medium text-navy hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileOpen(false)}
              className="font-poppins font-medium text-navy hover:text-primary transition-colors"
            >
              Doctors
            </a>
            <a
              href="#facility"
              onClick={() => setMobileOpen(false)}
              className="font-poppins font-medium text-navy hover:text-primary transition-colors"
            >
              Facility
            </a>
            <a
              href="#locations"
              onClick={() => setMobileOpen(false)}
              className="font-poppins font-medium text-navy hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
