import React from "react";

const Special: React.FC = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Attention-grabbing link */}
        <div className="py-16 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="animate-pulse bg-yellow-300 p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                LIMITED TIME OFFER
              </h3>
              <p className="text-xl text-black mb-6">
                Get AirPods Pro free with eligible Mac or iPad purchases for
                college students!
              </p>
              <a
                href="/education-store"
                className="inline-block bg-black text-yellow-300 px-8 py-4 rounded-full font-bold text-xl transform transition-transform hover:scale-110"
              >
                SHOP NOW →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Special;
