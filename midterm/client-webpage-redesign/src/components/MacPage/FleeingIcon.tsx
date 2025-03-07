// FleeingIcon.tsx
import React from "react";
import { motion } from "framer-motion";

import { useFleeingMotion } from "../../hooks/useFleeingMotion";
import { FiShoppingBag } from "react-icons/fi";

const FleeingIcon: React.FC = () => {
  const { x, y, handleMouseMove } = useFleeingMotion();

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onMouseMove={handleMouseMove}
    >
      <motion.div style={{ x, y, position: "absolute" }}>
        <FiShoppingBag size={50} />
      </motion.div>
    </div>
  );
};

export default FleeingIcon;
