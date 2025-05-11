import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        role="contentinfo"
        aria-labelledby="footer-heading"
        className="bg-neutral-950 text-gray-400 text-sm py-10 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="footer-heading" className="sr-only">
            Footer Navigation
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            <div>
              <h3 className="text-white font-medium mb-2">Shop and Learn</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/mac" className="hover:underline">
                    Mac
                  </a>
                </li>
                <li>
                  <a href="/ipad" className="hover:underline">
                    iPad
                  </a>
                </li>
                <li>
                  <a href="/airpods" className="hover:underline">
                    AirPods
                  </a>
                </li>
                <li>
                  <a href="/watch" className="hover:underline">
                    Apple Watch
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Support</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/support" className="hover:underline">
                    Product Support
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/accessibility" className="hover:underline">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-xs mb-4 sm:mb-0">
              © {new Date().getFullYear()} Apple Inc. All rights reserved.
            </p>

            {/* Socials - muted */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/apple/"
                className="hover:text-white"
                aria-label="Apple on Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/apple"
                className="hover:text-white"
                aria-label="Apple on Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
