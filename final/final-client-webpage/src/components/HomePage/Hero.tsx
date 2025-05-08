import React from "react";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn"; // adjust path if needed
import iphone from "../../assets/latest_iphone.jpg";

const HeroCard: React.FC = () => {
  const headingFade = useScrollFadeIn({ delay: 0.1 });
  const textFade = useScrollFadeIn({ delay: 0.3 });
  const buttonFade = useScrollFadeIn({ delay: 0.5 });
  return (
    <>
      <section
        role="banner"
        aria-labelledby="hero-heading"
        className="relative h-screen w-full overflow-x-hidden min-h-screen"
      >
        {/* 1. Full-screen hero image */}

        <img
          src={iphone}
          alt="Latest iPhone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            id="hero-heading"
            {...headingFade}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            The new iPhone 16 Pro
          </motion.h1>

          <motion.p
            {...textFade}
            className="text-base sm:text-lg md:text-xl text-white mb-12 text-center max-w-2xl px-4 sm:px-6"
          >
            The most advanced iPhone yet. With incredible battery life, powerful
            camera system, and the fastest chip ever in a smartphone.
          </motion.p>

          {/* 7. Better text descriptions for buttons */}
          <motion.div
            {...buttonFade}
            className="flex flex-col md:flex-row gap-4 px-4 sm:px-0"
          >
            <p id="iphone-desc" className="sr-only">
              Navigate to the iPhone 16 Pro product page.
            </p>
            <a
              href="/iphone-16-pro"
              aria-describedby="iphone-desc"
              className="px-8 py-3 rounded-full font-semibold bg-white text-black text-center transition duration-300 hover:bg-gray-100 focus:ring-black focus:ring-offset-4 focus:ring-offset-white"
            >
              Experience the innovation of iPhone 16 Pro today
            </a>
            <p id="compare-iphone-models" className="sr-only">
              Navigate to the compare iPhones product page.
            </p>
            <a
              href="/compare-iphone"
              aria-describedby="compare-iphone-models"
              className="px-8 py-3 rounded-full font-semibold border border-white text-white text-center transition duration-300 hover:bg-white hover:text-black focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
            >
              Compare with previous generation iPhone models
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
