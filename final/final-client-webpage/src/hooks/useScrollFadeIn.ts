import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useScrollFadeIn({
  delay = 0,
  duration = 0.8,
  yOffset = 40,
} = {}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const motionProps = {
    ref,
    initial: "hidden",
    animate: controls,
    variants: {
      hidden: { opacity: 0, y: yOffset },
      visible: { opacity: 1, y: 0 },
    },
    transition: { delay, duration },
  };

  return motionProps;
}
