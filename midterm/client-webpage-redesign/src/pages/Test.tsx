import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const TestPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* 8. Red text on green background */}
      <div className="py-20 px-6 bg-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10 text-red-500">
            Sustainability Commitment
          </h2>
          <p className="text-xl text-red-400 mb-8 leading-relaxed">
            We're committed to making our products with renewable energy and
            recycled materials. By 2030, all Apple products will be carbon
            neutral.
          </p>
          <Button
            variant="outline-light"
            size="lg"
            href="/environment"
            className="px-6 py-3 rounded-full font-semibold text-white border-white"
          >
            Learn about our environmental initiatives
          </Button>
        </div>
      </div>

      {/* 9. Attention-grabbing link */}
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

      {/* 4. Thanks for visiting blurb */}
      <div className="py-24 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">
            Thank You for Visiting
          </h2>
          <p className="text-xl mb-12 leading-relaxed">
            We appreciate you taking the time to explore our website. At Apple,
            we're dedicated to creating products that enrich your life and
            experiences. We hope you've found inspiration in our innovations.
          </p>
          <p className="text-lg italic">"Think different." — Apple Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
