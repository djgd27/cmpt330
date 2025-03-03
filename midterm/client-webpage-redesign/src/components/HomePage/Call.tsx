import React from "react";
import { Button } from "react-bootstrap";

const CallToAction: React.FC = () => {
  return (
    <>
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
              className="px-6 py-3 rounded-full font-semibold text-white border-white hover:bg-sky-400"
            >
              Learn about our environmental initiatives
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
