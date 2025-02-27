import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../../public/apple_colorful.svg";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="w-full bg-black bg-opacity-95 backdrop-blur-md py-2"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container fluid className="px-4 md:px-8 lg:px-12 xl:px-24">
        <div className="flex items-center justify-center w-full h-11">
          {/* Apple Logo */}
          <Navbar.Brand
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 z-10"
          >
            <img src={logo} className="w-auto h-7" alt="Logo" />
          </Navbar.Brand>

          {/* Navbar Toggle (Mobile View) */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 p-0 ml-auto lg:hidden"
          >
            <span className="text-white text-xs">Menu</span>
          </Navbar.Toggle>

          {/* Navigation Links */}
          <div className="hidden lg:flex w-full justify-center">
            <ul className="flex items-center justify-center space-x-8">
              <li>
                <a
                  href="/"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  Store
                </a>
              </li>
              <li>
                <a
                  href="/mac"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  Mac
                </a>
              </li>
              <li>
                <a
                  href="/ipad"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  iPad
                </a>
              </li>
              <li>
                <a
                  href="/iphone"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  iPhone
                </a>
              </li>
              <li>
                <a
                  href="/watch"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  Watch
                </a>
              </li>
              <li>
                <a
                  href="/vision"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  Vision
                </a>
              </li>
              <li>
                <a
                  href="/airpods"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  AirPods
                </a>
              </li>
              <li>
                <a
                  href="/tv-home"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  TV & Home
                </a>
              </li>
              <li>
                <a
                  href="/entertainment"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  Entertainment
                </a>
              </li>
              <li>
                <a
                  href="/accessories"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-xs text-gray-300 font-normal hover:text-white py-2"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Right aligned search and bag icons */}
          <div className="hidden lg:flex items-center space-x-6 absolute right-4 md:right-8 lg:right-12 xl:right-24">
            <a
              href="/search"
              aria-label="Search"
              className="text-gray-300 hover:text-white"
            >
              <FiSearch className="w-4 h-4" />
            </a>
            <a
              href="/bag"
              aria-label="Bag"
              className="text-gray-300 hover:text-white"
            >
              <FiShoppingBag className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <Navbar.Collapse id="basic-navbar-nav" className="lg:hidden bg-black">
          <div className="pt-2 pb-8 px-8">
            <ul className="flex flex-col space-y-3">
              <li className="py-3 border-b border-gray-800">
                <a href="/store" className="text-sm text-gray-300 font-normal">
                  Store
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a href="/mac" className="text-sm text-gray-300 font-normal">
                  Mac
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a href="/ipad" className="text-sm text-gray-300 font-normal">
                  iPad
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a href="/iphone" className="text-sm text-gray-300 font-normal">
                  iPhone
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a href="/watch" className="text-sm text-gray-300 font-normal">
                  Watch
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a href="/vision" className="text-sm text-gray-300 font-normal">
                  Vision
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a
                  href="/airpods"
                  className="text-sm text-gray-300 font-normal"
                >
                  AirPods
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a
                  href="/tv-home"
                  className="text-sm text-gray-300 font-normal"
                >
                  TV & Home
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a
                  href="/entertainment"
                  className="text-sm text-gray-300 font-normal"
                >
                  Entertainment
                </a>
              </li>
              <li className="py-3 border-b border-gray-800">
                <a
                  href="/accessories"
                  className="text-sm text-gray-300 font-normal"
                >
                  Accessories
                </a>
              </li>
              <li className="py-3">
                <a
                  href="/support"
                  className="text-sm text-gray-300 font-normal"
                >
                  Support
                </a>
              </li>
              <li className="pt-4 flex items-center space-x-6">
                <a href="/search" aria-label="Search" className="text-gray-300">
                  <FiSearch className="w-5 h-5" />
                </a>
                <a href="/bag" aria-label="Bag" className="text-gray-300">
                  <FiShoppingBag className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
