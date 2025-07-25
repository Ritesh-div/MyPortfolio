
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Laptop } from "lucide-react";
interface NavbarProps {
  gsaptimeline: gsap.core.Timeline;
}

 const Navbar: React.FC<NavbarProps> = ({ gsaptimeline }) => {
  useGSAP(() => {
    const lt = gsaptimeline || gsap.timeline();
    lt.from(".logo", {
      y: -40,
      opacity: 1,
      delay: 0.2,
      duration: 0.5,
    });
    lt.from(".menu a", {
      y: -50,
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
      stagger: 0.1,
    });
  });

  return (
    <div
      className="hidden md:inline-flex fixed top-0 justify-between gap-4 bg-gray-900 w-full h-auto px-8 py-3 text-white border-b border-gray-500 z-50"
    >
      <p className="text-2xl font-semibold flex gap-1 items-center logo">
        <Laptop className="text-violet-500" size={25} />
        Ritesh Sahu
      </p>
      <div className="flex gap-8 mr-6 menu">
        <a
          href="#home"
          className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
        >
          Home
        </a>
        <a
          href="#project"
          className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
        >
          Project
        </a>
        <a
          href="#about"
          className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
export default Navbar;



