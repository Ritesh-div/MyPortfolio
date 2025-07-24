import { Button } from "@/components/ui/button";
import { Copyright, Github, Linkedin, Mail, StickyNote } from "lucide-react";
export default function GetInTouch() {
  return (
    <div id="contact" className=" flex flex-col justify-center items-center bg-gray-950 text-white p-8 md:w-[90%] md:m-auto ">
      {/* Contact */}
      <div className="w-full flex flex-col justify-center items-center p-2 ">
        <p className="text-color contact">CONTACT</p>
        <h2 className="text-3xl font-semibold contact">Get In Touch</h2>
        <div className="w-full bg-gray-900 p-4 md:p-10 rounded-lg mt-10 border-2 border-gray-500 border-dashed">
          <h2 className="text-lg md:text-3xl font-semibold mb-2 contactText">
            Let’s Build Something Great
          </h2>
          <div className="flex items-center gap-2 text-gray-400 text-sm lg:text-xl">
            Got an idea, feedback, or just want to chat? I’d love to hear from
            you.
          </div>
          <div className="flex flex-wrap items-center gap-3 conBtn">
            <a
              href="https://drive.google.com/file/d/1ooVdYxwpwJt4JEbb2zZNZSRFaTn0SUZP/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="border-1 border-gray-500 mt-2 md:mt-4 cursor-pointer">
                <StickyNote />
                Resume
              </Button>
            </a>
            <a
              href="mailto:riteshkumarsahu1345@email.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="border-1 bg-violet-500 border-gray-600 mt-2 md:mt-4 cursor-pointer transition duration-500"
                variant={"default"}
              >
                <Mail />
                Email Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    {/* Footer */}
      <div className="mt-18 w-full flex justify-between items-center text-gray-400">
        <div className=" flex items-center gap-2 text-gray-400 text-xl mt-4">
          <Copyright size={16} />{" "}
          <span className="text-sm">
            2025 Ritesh's Protfolio. All Copyright reserved.
          </span>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/ritesh-sahu-b2002a25a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/Ritesh-div"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:riteshkumarsahu1345@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
