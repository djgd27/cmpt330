import React from "react";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

const Special: React.FC = () => {
  const fadeInProps = useScrollFadeIn({ delay: 0.1 });
  return (
    <>
      <section
        role="region"
        aria-labelledby="promo-heading"
        className="overflow-x-hidden py-16 px-6 bg-black"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeInProps}
            className="bg-gradient-to-tr from-black to-neutral-500 p-8 rounded-xl text-center"
          >
            <h3
              id="promo-heading"
              className="text-4xl font-semibold tracking-tight  text-gray-100 mb-4"
            >
              Special Offer
            </h3>
            <div className="h-0.5 w-10 bg-white mb-4 mx-auto" />
            <p className="text-lg text-gray-300 mb-6">
              Students get AirPods Pro with eligible purchases.
            </p>
            <p id="promo-desc" className="sr-only">
              Navigate to Apple’s education store for student deals on Mac and
              iPad with free AirPods.
            </p>
            <a
              href="/education-store"
              aria-describedby="promo-desc"
              className="inline-block text-black bg-white px-6 py-3 rounded-full font-medium text-lg hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition"
            >
              Shop Education Deals →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Special;
