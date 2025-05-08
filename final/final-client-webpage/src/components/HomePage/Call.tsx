import React from "react";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

const CallToAction: React.FC = () => {
  const fadeInProps = useScrollFadeIn();
  return (
    <>
      <section
        role="region"
        aria-labelledby="sustainability-heading"
        className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-black overflow-x-hidden"
      >
        <motion.div {...fadeInProps} className="max-w-4xl mx-auto text-center">
          <h2
            id="sustainability-heading"
            className="text-4xl font-semibold mb-10 text-white"
          >
            Sustainability Commitment
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            We're committed to making our products with renewable energy and
            recycled materials. By 2030, all Apple products will be carbon
            neutral.
          </p>
          <p id="cta-desc" className="sr-only">
            Learn more about Apple’s commitment to sustainability and
            environmental initiatives.
          </p>
          <a
            href="/environment"
            aria-describedby="cta-desc"
            className="inline-block px-6 py-3 rounded-full font-semibold text-white border border-white transition duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Learn about our environmental initiatives
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default CallToAction;
