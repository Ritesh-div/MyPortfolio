import Skill from "./skill";
import gpslab from "../assets/gpslab.png";
import {
  BriefcaseBusiness,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.from(".about", {
    y: 20,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      // markers:true,
      scrub: true,
    },
  });

  gsap.from(".internship", {
    y: 30,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".internship",
      start: "top 95%",
      // markers:true,
      scrub: true,
    },
  });

  gsap.from(".timezone", {
     y: 30,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".timezone",
      start: "top 95%",
      // markers:true,
      scrub: true,
    },
  });
  gsap.from(".skills", {
     y: 30,
    delay: 0.3,
    opacity: 0.8,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".skills",
      start: "top 95%",
      // markers:true,
      scrub: true,
    },
  });

  });
  return (
    <div id="about" className="flex flex-col justify-center items-center md:mt-10 bg-gray-950 text-white p-8 md:w-[90%] md:m-auto ">
      <p className="text-color about">SKILL AND ABOUT</p>
      <h2 className="text-4xl font-semibold about">About Me</h2>

      <div className="lg:flex justify-center items-center gap-10 mt-8 lg:mt-20 ">
        <div className=" rounded-lg p-4 relative h-96 w-full lg:w-[48%] shadow-2xl bgImage internship">
          <div className="absolute bottom-3 w-full flex justify-between items-center p-2 ">
            <div className="w-[90%] md:w-[75%]">
              <p className="md:text-xl font-semibold text-white flex items-center gap-2">
                <BriefcaseBusiness /> INTERNSHIP AT GPSLAB PRIVATE LIMITED
              </p>
              <p className="text-sm text-gray-400 text-justify mt-2">
                Where I leran how to Built a dynamic user dashboard and
                homepage. Styled and created accessible UI components. Developed
                a Query and Solutions system. Ensured consistent and streamlined
                development.
              </p>
            </div>
            <div className="w-[22%]">
              <a
                href="https://www.google.com/maps/contrib/118364945987601317978/reviews/@26.4680861,80.3162562,14.35z/data=!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={gpslab}
                  alt=""
                  className="h-16 m-auto hidden md:block"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] flex flex-col gap-6 mt-4 ">
          <div className="timezone text-xl font-semibold shadow-2xl bg-gray-900 rounded-xl h-42 p-4 border-1 border-gray-600 bgImageTime">
            <h2 className="w-[250px]">
              I'm very flexible with time zone communications
            </h2>
          </div>

          <div className="skills w-full md:flex gap-3 shadow-2xl bg-gray-900 rounded-xl h-auto p-4 border-1 border-gray-600">
            <div className="text-gray-400 md:w-[30%]">
              I constantly try to improve{" "}
              <span className="text-xl text-white font-semibold">
                My Tech Stack
              </span>
            </div>
            <div className="w-full md:w-[80%] flex flex-wrap gap-2 mt-3">
              <Skill skillName="#HTML" />
              <Skill skillName="#CSS" />
              <Skill skillName="#JavaScript" />
              <Skill skillName="#Bootstrap" />
              <Skill skillName="#Tailwind" />
              <Skill skillName="#Reactjs" />
              <Skill skillName="#Github" />
              <Skill skillName="#MYSQL" />
              <Skill skillName="#MongoDB" />
              <Skill skillName="#Nodejs" />
              <Skill skillName="#Expressjs" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
