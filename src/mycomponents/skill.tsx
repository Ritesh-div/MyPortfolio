import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skill({skillName,margin}: { skillName: string, margin?: string }) {

  return (
    <Button variant="ghost" className=" skill border-1 border-gray-600 rounded-lg transition duration-800" style={{ margin: margin || "0rem" }}>
      <p className="text-xs md:text-md">{skillName}</p>
    </Button>
  );
}


// import { Button } from "@/components/ui/button";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Skill({ skillName, margin }: { skillName: string; margin?: string }) {
//   const skillRef = useRef<HTMLButtonElement>(null);

//   useGSAP(() => {
//     if (skillRef.current) {
//       gsap.to(skillRef.current, {
//         x: 60,              // Move right 10px
//         duration: 0.5,
//         ease: "power1.inOut",
//         repeat: -1,         // Infinite loop
//         yoyo: true,         // Go back and forth
//       });
//     }
//   }, []);

//   return (
//     <Button
//       ref={skillRef}
//       variant="ghost"
//       className="border-1 border-gray-900 rounded-lg transition duration-800 bg-gray-950"
//       style={{ margin: margin || "0rem" }}
//     >
//       <p className="text-xs md:text-md">{skillName}</p>
//     </Button>
//   );
// }
