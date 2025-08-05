import todoImg from "../assets/todo.png";
import netflix from "../assets/netflix.png";
import sparkx from "../assets/sparkx.png";
import weather from "../assets/weather.png";
import reactIcon from "../assets/react.svg";
import nodejs from "../assets/nodejs.png";
import database from "../assets/database.png";
import api from "../assets/api.png";
import tailwind from "../assets/tailwind.png";
import ProjectLink from "./projectLink";
import html from "../assets/html-5.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import SkillLogo from "./skillLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

 function ProjectContainer() {
useGSAP(() => {
    gsap.from(".prodescrip", {
    y: 20,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: "#project h2",
      start: "top 80%",
      // markers:true,
      scrub: true,
    },
  });

  gsap.from("#project h2", {
    y: 30,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: "#project h2",
      start: "top 80%",
      // markers:true,
      scrub: true,
    },
  });
    gsap.from(".project1", {
    x: 40,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: "#project h2",
      start: "top 80%",
      // markers:true,
      scrub: true,
    },
  });
      gsap.from(".project2", {
    x: -40,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: "#project h2",
      start: "top 80%",
      // markers:true,
      scrub: true,
    },
  });
      gsap.from(".project3", {
    x: 40,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: "#project h2",
      start: "top 50%",
      // markers:true,
      scrub: true,
    },
  });
      gsap.from(".project4", {
    x: -40,
    delay: 0.3,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: "#project h2",
      start: "top 50%",
      // markers:true,
      scrub: true,
    },
  });
  });

  return (
    <div id="project" className="flex flex-col justify-center items-center p-8 md:w-[90%] md:m-auto">
      <p className="text-color text-xs md:text-lg prodescrip">VISIT MY PROJECT AND KEEP YOUR FEEDBACK</p>
      <h2 className="text-2xl md:text-4xl font-semibold">My Projects</h2>

      <div className="w-full lg:flex justify-center items-center mt-10 gap-16 p-2 rounded-lg">
        <div className="project1 bg-background text-foreground h-auto lg:w-[30%] p-2 rounded-lg shadow-2xl border-1 mt-6 border-gray-300 dark:border-gray-600">
          <img
            src={sparkx}
            alt="SparkX project"
            className="h-[60%] rounded-lg"
          />
          <h2 className="font-semibold text-xl mt-4">SparkX- AI Chatbot</h2>
          <p className="text-gray-400 text-xs">
            SparkX AI empowers users to have natural, human-like conversations
            with an intelligent chatbot that responds instantly and accurately.
          </p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <div className="flex flex-wrap gap-2">
              <SkillLogo skillLogo={reactIcon} skillName="Reactjs" />
              <SkillLogo skillLogo={nodejs} skillName="Nodejs" />
              <SkillLogo skillLogo={database} skillName="Database" />
              {/* <SkillLogo skillLogo={api} skillName="Api" /> */}
              {/* <SkillLogo skillLogo={tailwind} skillName="Tailwind CSS" /> */}
            </div>
            <ProjectLink link="https://sparkxai.netlify.app/" />
          </div>
        </div>

        <div className="project2 bg-background text-foreground h-auto lg:w-[30%] p-2 rounded-lg shadow-2xl border-1 mt-6  border-gray-300 dark:border-gray-600">
          <img
            src={weather}
            alt="Weather project"
            className="h-[60%] rounded-lg"
          />
          <h2 className="font-semibold text-xl mt-4">Weather App</h2>
          <p className="text-gray-400 text-xs">
            Displays temperature, humidity, wind speed, and atmospheric
            pressure, often with icons for sunny, rainy, or snowy weather.
          </p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <div className="flex flex-wrap gap-2">
              <SkillLogo skillLogo={reactIcon} skillName="Reactjs" />
              <SkillLogo skillLogo={tailwind} skillName="Tailwind CSS" />
              <SkillLogo skillLogo={api} skillName="Api" />
            </div>
            <ProjectLink link="https://weatherapp7398.netlify.app/" />
          </div>
        </div>

        {/* <div className="bg-gray-950 h-auto lg:w-[30%] p-2 rounded-lg shadow-lg border-1 mt-6 border-gray-600">
          <img
            src={todoImg}
            alt="Todo project"
            className="h-[60%] rounded-lg"
          />
          <h2 className="font-semibold text-xl mt-4">Todo App</h2>
          <p className="text-gray-400 text-xs">
            Users can add new tasks with a title and optional description. Users
            can remove tasks from the list. Users can mark tasks as completed.
          </p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <div className="flex flex-wrap gap-2">
              <SkillLogo skillLogo={html} skillName="HTML" />
              <SkillLogo skillLogo={css} skillName="CSS" />
              <SkillLogo skillLogo={javascript} skillName="JavaScript" />
            </div>
            <ProjectLink link="https://todobyritesh.netlify.app/" />
          </div>
        </div> */}
      </div>

      <div className="w-full lg:flex justify-center items-center gap-16 p-2 rounded-lg">
        <div className="project3 bg-background text-foreground h-auto lg:w-[30%] p-2 rounded-lg shadow-2xl border-1 mt-6 border-gray-300 dark:border-gray-600">
          <img
            src={todoImg}
            alt="Todo project"
            className="h-[60%] rounded-lg"
          />
          <h2 className="font-semibold text-xl mt-4">Todo App</h2>
          <p className="text-gray-400 text-xs">
            Users can add new tasks with a title and optional description. Users
            can remove tasks from the list. Users can mark tasks as completed.
          </p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <div className="flex flex-wrap gap-2">
              <SkillLogo skillLogo={html} skillName="HTML" />
              <SkillLogo skillLogo={css} skillName="CSS" />
              <SkillLogo skillLogo={javascript} skillName="JavaScript" />
            </div>
            <ProjectLink link="https://todobyritesh.netlify.app/" />
          </div>
        </div>

        <div className="project4 bg-background text-foreground h-auto lg:w-[30%] p-2 rounded-lg shadow-2xl border-1 mt-6 border-gray-300 dark:border-gray-600">
          <img
            src={netflix}
            alt="Netflix project"
            className="h-[60%] rounded-lg"
          />
          <h2 className="font-semibold text-xl mt-4">Netflix Dashboard</h2>
          <p className="text-gray-400 text-xs">
            The content is tailored based on viewing history and preferences,
            helping users discover shows and movies they'll likely enjoy.
          </p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <div className="flex flex-wrap gap-2">
              <SkillLogo skillLogo={html} skillName="HTML" />
              <SkillLogo skillLogo={css} skillName="CSS" />
              <SkillLogo skillLogo={javascript} skillName="JavaScript" />
            </div>
            <ProjectLink link="https://extraordinary-platypus-aedd11.netlify.app/" />
          </div>
        </div>
      </div>

    </div>
  );
}
export default ProjectContainer;