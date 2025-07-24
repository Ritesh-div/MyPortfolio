import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BackgroundSpin: React.FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        rotation: 360,
        duration: 60,        // 🔄 Slow spin
        repeat: -1,          // ♾️ Infinite
        ease: "linear",      // 🚶 Constant speed
        transformOrigin: "50% 50%",
      });
    }
  }, []);

  return (
    <div
      ref={bgRef}
      className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-lg bg-blue-700 opacity-100 blur-2xl z-0"
      style={{ top: '10%', left: '10%' }}
    />
  );
};

export default BackgroundSpin;
