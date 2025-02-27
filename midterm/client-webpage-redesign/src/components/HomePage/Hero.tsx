import React from "react";
import img from "../../assets/latest_iphone.jpg" 

const HeroCard: React.FC = () => {
    return (
      <div className="relative h-screen w-full">
        <img 
          src={img} 
          alt="Latest iPhone" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            The new iPhone 16 Pro
          </h1>
          <p className="text-xl text-white mb-12 text-center max-w-2xl px-6">
            The most advanced iPhone yet. With incredible battery life, 
            powerful camera system, and the fastest chip ever in a smartphone.
          </p>
        </div>
      </div>
    );
  };
  
  export default HeroCard;