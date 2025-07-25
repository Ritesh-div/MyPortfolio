import { Send } from "lucide-react";
import StarBlinking from "./StarBlinking";


export default function HeroElement() {
  return (
    <div className="text-white bg-black flex flex-col justify-center h-[78vh] md:h-[84vh] items-center leading-[2]">
      <StarBlinking />
      <p className="text-xs text-gray-200">DYNAMIC WEB MAGIC WITH REACT.JS</p>
      <h1 className="text-xl md:text-5xl font-bold md:leading-[1.5] text-center ">
        Transforming Concepts into
      </h1>
      <h1 className="text-lg md:text-5xl font-bold text-center">
        Seamless <span className=" text-violet-500">User Experiences</span>{" "}
      </h1>
      <p className="md:text-xl leading-[2.5] text-gray-300">
        Hi! I'm Ritesh, a Frontend Developer.
      </p>
      <div className=" rounded-lg mt-4 showButton">
        <div className="flex justify-center items-center gap-2 rounded-lg bg-gray-900 px-6 md:px-12 py-1">
          <button className="">Show my work</button>
          <Send size={18} />
        </div>
      </div>
    </div>
  );
}
