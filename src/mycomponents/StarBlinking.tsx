import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const StarBlinking: React.FC = () => {
  const starsRef = useRef<HTMLDivElement[]>([]);

  // Add refs dynamically
  const setStarRef = (el: HTMLDivElement | null, index: number) => {
    if (el) starsRef.current[index] = el;
  };

  useEffect(() => {
    starsRef.current.forEach((star) => {
      gsap.to(star, {
        opacity: 0.1,
        duration: gsap.utils.random(0.5, 1.5),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: gsap.utils.random(0, 2),
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          ref={(el) => setStarRef(el, i)}
          className="absolute w-[4px] h-[4px] bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 1,
          }}
        />
      ))}
    </div>
  );
};

export default StarBlinking;
