import React from "react";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

const MissionStatement: React.FC = () => {
  const fadeInProps = useScrollFadeIn({ delay: 0.1 });
  return (
    <>
      <section
        role="region"
        aria-labelledby="mission-heading"
        aria-describedby="mission-desc"
        className="overflow-x-hidden py-32 px-6 bg-neutral-100"
      >
        <motion.div {...fadeInProps} className="max-w-4xl mx-auto text-center">
          <h2
            id="mission-heading"
            className="text-4xl font-semibold tracking-tight mb-6 text-black"
          >
            Our Mission
          </h2>
          <div className="h-0.5 w-12 bg-black mb-6 mx-auto" />
          <p id="mission-desc" className="sr-only">
            Apple’s mission statement section. Describes the company’s values
            including accessibility, privacy, sustainability, and user-centered
            design.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Apple designs technology that empowers people and enriches lives. We
            believe in accessibility, privacy, and sustainability — not as
            features, but as core values.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Everything we make reflects our belief in challenging the status
            quo, thinking differently, and delivering seamless experiences
            across devices, platforms, and people.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default MissionStatement;
