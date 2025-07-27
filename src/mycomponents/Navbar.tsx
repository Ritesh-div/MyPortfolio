import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, Laptop, Mail, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
interface NavbarProps {
  gsaptimeline: gsap.core.Timeline;
}

const Navbar: React.FC<NavbarProps> = ({ gsaptimeline }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

  if (shouldUseDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  setIsDark(shouldUseDark);
}, []);

  const toggleTheme = () => {
  const newTheme = isDark ? "light" : "dark";
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  setIsDark(newTheme === "dark");
};


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
  const [open, setOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    window.location.hash = href; // Scroll to section
  };

  return (
    <div className="flex items-center fixed top-0 justify-between gap-4 bg-card text-card-foreground w-full h-auto px-8 py-3 border-b border-gray-500 z-50">
      <p className="text-2xl font-semibold flex gap-1 items-center logo">
        <Laptop className="text-violet-500" size={25} />
        Ritesh Sahu
      </p>
      <div className=" gap-8 mr-6 menu hidden md:inline-flex">
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
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-muted dark:bg-muted text-foreground dark:text-foreground hover:scale-105 transition"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>{" "}
      </div>

      <div className="md:hidden flex items-center gap-2">
        <Sheet open={open} onOpenChange={setOpen} >
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted dark:bg-muted text-foreground dark:text-foreground hover:scale-105 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>{" "}
          <SheetTrigger asChild>
            <Menu
              className="opacity-80 hover:opacity-100 hover:text-foreground transition duration-300 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </SheetTrigger>
          
          <SheetContent className="bg-background text-foreground w-[90%] md:w-[50%] border-none">
            <SheetHeader>
              <SheetTitle className="">
                <p className="text-2xl font-semibold flex gap-1 items-center">
                  <Laptop className="text-violet-500" size={25} />
                  Ritesh Sahu
                </p>
              </SheetTitle>
              <SheetDescription>
                Check the pages and projects I have worked on.
              </SheetDescription>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <a
                href="#home"
                onClick={() => handleLinkClick("#home")}
                className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
              >
                Home
              </a>
              <a
                href="#project"
                onClick={() => handleLinkClick("#project")}
                className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
              >
                Project
              </a>
              <a
                href="#about"
                onClick={() => handleLinkClick("#about")}
                className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
              >
                Contact
              </a>
            </div>
            <SheetFooter>
              <p className="flex items-center gap-1 text-lg">
                {" "}
                Start the Conversation
                <ArrowDownRight size={18} />
              </p>
              <p className="text-gray-400 text-xs">
                Fill out the form and let’s make something amazing happen.
              </p>
              <Button className="bg-violet-500 cursor-pointer transition duration-500">
                <a
                  href="mailto:riteshkumarsahu1345@email.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center p-2 gap-2"
                >
                  <Mail />
                  Mail me
                </a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default Navbar;
