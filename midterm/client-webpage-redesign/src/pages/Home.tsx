import React, { useEffect } from "react";
import HeroCard from "../components/HomePage/Hero";
import MissionStatement from "../components/HomePage/Mission";
import OurProducts from "../components/HomePage/Products";
import CallToAction from "../components/HomePage/Call";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroCard />
      <MissionStatement/>
      <OurProducts />
      <CallToAction />
    </div>
  );
};

export default HomePage;
