import React from "react";
import broll from "../../assets/mac_bRoll.mp4";
import iPad from "../../assets/iPad.jpg";
import Watch from "../../assets/iWatch.jpg";
import airpods from "../../assets/airpods.jpg";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import ProductCard from "./ProductCard";

const OurProducts: React.FC = () => {
  const fadeInProps = useScrollFadeIn({ delay: 0.2, duration: 0.6 });
  const headingFade = useScrollFadeIn({ delay: 0.1, duration: 0.6 });
  return (
    <>
      <section
        role="region"
        aria-labelledby="products-heading"
        className="py-24 px-6 bg-white overflow-x-hidden"
      >
        <motion.h2
          {...headingFade}
          id="products-heading"
          className="text-4xl font-semibold mb-16 text-center"
        >
          Our Products
        </motion.h2>

        <motion.div
          {...fadeInProps}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          <ProductCard
            title="Mac"
            description="Incredibly powerful. For creativity and productivity."
            href="/mac"
            srId="mac-desc"
            srText="Learn more about Mac computers for creativity and productivity."
            media={
              <video
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-t-3xl"
              >
                <source src={broll} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
          />
          <ProductCard
            title="iPad"
            description="Versatile. For everything you do."
            href="/ipad"
            srId="ipad-desc"
            srText="Learn more about the iPad's versatility and capabilities."
            media={
              <img
                src={iPad}
                alt="iPad"
                className="object-cover w-full h-full rounded-t-3xl"
              />
            }
          />

          <ProductCard
            title="Watch"
            description="The ultimate device for a healthy life."
            href="/watch"
            srId="watch-desc"
            srText="Learn more about Apple Watch features that support health and fitness."
            media={
              <img
                src={Watch}
                alt="Apple Watch"
                className="object-cover w-full h-full rounded-t-3xl"
              />
            }
          />

          <ProductCard
            title="AirPods"
            description="Immersive sound experience."
            href="/AirPods"
            srId="airpods-desc"
            srText="Learn more about the immersive audio features of AirPods."
            media={
              <img
                src={airpods}
                alt="AirPods"
                className="object-cover w-full h-full rounded-t-3xl"
              />
            }
          />
        </motion.div>
      </section>
    </>
  );
};

export default OurProducts;
