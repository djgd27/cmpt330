import React from "react";
import { Button } from "react-bootstrap";

const CallToAction: React.FC = () => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <Button variant="primary" size="lg">Buy Now</Button>
      <Button variant="secondary" size="lg">Learn More</Button>
    </div>
  );
};

export default CallToAction;