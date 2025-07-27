import StarBlinking from "./StarBlinking";
import Navbar from "./Navbar";
import BorderWaveButton from "./BorderWaveButton";
import { useGSAP } from "@gsap/react";

interface HeroProps {
  gsaptimeline: gsap.core.Timeline;
}
const Hero: React.FC<HeroProps> = ({ gsaptimeline }) => {
  useGSAP(() => {
    gsaptimeline
      .from(".dynamic", {
        y: 30,
        opacity: 0,
        duration: 0.5,
      })
      .from(".name", {
        x: -600,
        opacity: 0,
        duration: 0.5,
      })
      .from(".description", {
        x: 600,
        opacity: 0,
        duration: 0.5,
      })
      .from(".connectBtn", {
        y: 30,
        opacity: 0,
        duration: 0.5,
      });
  }, [gsaptimeline]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-background text-foreground"
    >
      <Navbar gsaptimeline={gsaptimeline} />
      <StarBlinking />
      <div className="relative z-10 text-center ">
        <p className="text-xs dynamic">
          DYNAMIC WEB MAGIC WITH REACT.JS
        </p>
        <h1 className=" text-3xl md:text-5xl font-bold  name">
          Hi, I'm <span className="">Ritesh</span>
        </h1>
        <p className=" mt-3 text-justify md:w-[60%] mx-auto description">
          I’m a passionate{" "}
          <span className="text-violet-500">Frontend Developer</span> who
          transforms ideas into engaging, responsive, and user-friendly web
          interfaces. Skilled in React.js, Tailwind CSS, and modern UI/UX
          principles✨
        </p>
        <div className="connectBtn">
          <BorderWaveButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
