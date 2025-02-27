import React, { useEffect } from "react";

const MacPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      <p>this is our site gang</p>
    </>
  );
};

export default MacPage;
