import React, { useEffect } from "react";
import HeroCard from "../components/HomePage/Hero";
import ProductDescription from "../components/HomePage/Product";
import CallToAction from "../components/HomePage/Call";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroCard />
      <ProductDescription />
      <CallToAction />
    </div>
  );
};

export default HomePage;
