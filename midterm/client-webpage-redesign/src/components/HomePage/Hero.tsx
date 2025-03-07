import React from "react";
import { Button } from "react-bootstrap";
import iphone from "../../assets/latest_iphone.jpg";

const HeroCard: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 1. Full-screen hero image */}
      <div className="relative h-screen w-full">
        <img
          src={iphone}
          alt="Latest iPhone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            The new iPhone 16 Pro
          </h1>
          <p className="text-xl text-white mb-12 text-center max-w-2xl px-6">
            The most advanced iPhone yet. With incredible battery life, powerful
            camera system, and the fastest chip ever in a smartphone.
          </p>

          {/* 7. Better text descriptions for buttons */}
          <div className="flex flex-col md:flex-row gap-6">
            <Button
              variant="light"
              size="lg"
              href="/iphone-16-pro"
              className="px-8 py-3 rounded-full font-semibold text-white"
            >
              Experience the innovation of iPhone 16 Pro today
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              href="/compare-iphone"
              className="px-8 py-3 rounded-full font-semibold text-white"
            >
              Compare with previous generation iPhone models
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
