import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skill({skillName,margin}: { skillName: string, margin?: string }) {

  return (
    <Button variant="ghost" className="shadow-xl skill border-1 dark:border-gray-600 rounded-lg transition duration-800" style={{ margin: margin || "0rem" }}>
      <p className="text-xs md:text-md">{skillName}</p>
    </Button>
  );
}

