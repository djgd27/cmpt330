import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLinks } from "./modules/NavItems";
import MobileMenu from "./modules/MobileMenu";
import Logo from "./modules/Logo";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle outside click and escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      role="banner"
      className="bg-black bg-opacity-95 backdrop-blur-md text-white fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-24">
        <div className="flex items-center justify-between h-14 relative">
          {/* Centered logo (Apple style) */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Logo />
          </div>

          {/* Desktop nav links */}
          <nav
            className="hidden lg:flex flex-1 justify-center space-x-6 text-xs text-gray-300"
            aria-label="Primary navigation"
          >
            <NavLinks className="hover:text-white" />
          </nav>

          {/* Icons on the right (only on desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="/search"
              aria-label="Search"
              className="hover:text-neutral-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </a>
            <a
              href="/bag"
              aria-label="Shopping Bag"
              className="hover:text-neutral-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 8V6a6 6 0 1112 0v2m-9 0h6m-9 0a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V10a2 2 0 00-2-2m-9 0V6a3 3 0 016 0v2"
                />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden ml-auto text-sm focus:outline-none focus:ring-2 focus:ring-white"
          >
            {menuOpen ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <MobileMenu isOpen={menuOpen} menuRef={menuRef} />
      </div>
    </header>
  );
};

export default NavBar;
