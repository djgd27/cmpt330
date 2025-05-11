import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { NavLinks } from "./NavItems";
import type { RefObject } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuRef }) => {
  return (
    <nav
      ref={menuRef}
      id="mobile-menu"
      aria-label="Mobile navigation"
      className={`lg:hidden transform transition-all duration-300 ease-in-out origin-top text-center border-t border-gray-700 ${
        isOpen ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
      }`}
    >
      <ul className="space-y-3 text-sm pt-4 pb-6">
        <NavLinks className="block text-gray-300 hover:text-white" />
        <li className="flex justify-center gap-4 pt-4 border-t border-gray-800">
          <a href="/search" aria-label="Search">
            <FiSearch className="w-5 h-5" />
          </a>
          <a href="/bag" aria-label="Shopping Bag">
            <FiShoppingBag className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
