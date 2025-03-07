// useFleeingMotion.ts
import { useMotionValue, useSpring, MotionValue } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useFleeingMotion = (
  initialX: number = 200,
  initialY: number = 200,
  threshold: number = 200
) => {
  // Base motion values
  const baseX: MotionValue<number> = useMotionValue(initialX);
  const baseY: MotionValue<number> = useMotionValue(initialY);

  // Create spring-animated values for smooth transitions
  const x = useSpring(baseX, { stiffness: 300, damping: 30 });
  const y = useSpring(baseY, { stiffness: 300, damping: 30 });

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const currentX = baseX.get();
      const currentY = baseY.get();

      // Calculate the distance between the mouse and the icon's center
      const dx = currentX - mouseX;
      const dy = currentY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < threshold) {
        // Calculate the angle away from the mouse
        const angle = Math.atan2(dy, dx);
        // Determine the distance to move the icon (add extra to ensure clear movement)
        const moveDistance = threshold - distance + 20;

        let newX = currentX + Math.cos(angle) * moveDistance;
        let newY = currentY + Math.sin(angle) * moveDistance;

        // Clamp the new positions so the icon remains within the viewport
        newX = Math.min(Math.max(newX, 0), windowSize.width - 50);
        newY = Math.min(Math.max(newY, 0), windowSize.height - 50);

        // Update the base motion values; the springs will animate to these new values.
        baseX.set(newX);
        baseY.set(newY);
      }
    },
    [baseX, baseY, threshold, windowSize]
  );

  return { x, y, handleMouseMove };
};
