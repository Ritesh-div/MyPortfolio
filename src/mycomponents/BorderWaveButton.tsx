import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Send } from "lucide-react";

const BorderWaveButton: React.FC = () => {
  const topRef = useRef<HTMLSpanElement | null>(null);
  const rightRef = useRef<HTMLSpanElement | null>(null);
  const bottomRef = useRef<HTMLSpanElement | null>(null);
  const leftRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.set(topRef.current, { x: "-100%" })
      .to(topRef.current, { x: "100%", duration: 1, ease: "linear" })

      .set(rightRef.current, { y: "-100%" })
      .to(rightRef.current, { y: "100%", duration: 1, ease: "linear" })

      .set(bottomRef.current, { x: "100%" })
      .to(bottomRef.current, { x: "-100%", duration: 1, ease: "linear" })

      .set(leftRef.current, { y: "100%" })
      .to(leftRef.current, { y: "-100%", duration: 1, ease: "linear" });
  }, []);

  return (
    <button className="relative px-8 py-2 text-white bg-black rounded-lg overflow-hidden group border-1 border-violet-300 mt-6">
      <a href="mailto:riteshkumarsahu1345@email.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <span className="relative z-10  flex justify-center items-center gap-2 font-semibold">
          Let’s Connect <Send size={16} />
        </span>
      </a>

      {/* Top border wave */}
      <span
        ref={topRef}
        className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
      />
      {/* Right border wave */}
      <span
        ref={rightRef}
        className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-violet-500 to-transparent"
      />
      {/* Bottom border wave */}
      <span
        ref={bottomRef}
        className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-violet-500 to-transparent"
      />
      {/* Left border wave */}
      <span
        ref={leftRef}
        className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-violet-500 to-transparent"
      />
    </button>
  );
};

export default BorderWaveButton;
