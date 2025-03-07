import React, { useEffect } from "react";
import FleeingIcon from "../components/MacPage/FleeingIcon";

const MacPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      <p>this is our site gang</p>
      <FleeingIcon/>
    </>
  );
};

export default MacPage;
