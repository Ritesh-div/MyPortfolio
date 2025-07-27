

// import { useState } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetFooter,
//   SheetDescription,
// } from "@/components/ui/sheet";
// import { Menu, Laptop, Mail, ArrowDownRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import DarkModeToggle from "./lightDark";

// const SheetDemo = () => {
//   const [open, setOpen] = useState(false);

//   const handleLinkClick = (href: string) => {
//     setOpen(false);
//     window.location.hash = href; // Scroll to section
//   };

//   return (
//     <div className=" fixed text-end hover:text-foreground flex justify-between items-center p-3 top-0 z-11 w-full border-b border-gray-700">
//       <p className="text-2xl font-semibold flex gap-1 items-center">
//         <Laptop className="text-violet-500" size={25} />
//         Ritesh Sahu
//       </p>
//       <div className="hidden gap-8 mr-6 menu">
//         <a
//           href="#home"
//           className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
//         >
//           Home
//         </a>
//         <a
//           href="#project"
//           className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
//         >
//           Project
//         </a>
//         <a
//           href="#about"
//           className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
//         >
//           About
//         </a>
//         <a
//           href="#contact"
//           className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
//         >
//           Contact
//         </a>
//       </div>

//       <div className="md:hidden">
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             {/* <DarkModeToggle/> */}
//             <Menu
//               className="opacity-80 hover:opacity-100 hover:text-foreground transition duration-300 cursor-pointer"
//               onClick={() => setOpen(true)}
//             />
//           </SheetTrigger>
//           <SheetContent className="bg-background text-foreground w-[90%] md:w-[50%] border-none">
//             <SheetHeader>
//               <SheetTitle className="">
//                 <p className="text-2xl font-semibold flex gap-1 items-center">
//                   <Laptop className="text-violet-500" size={25} />
//                   Ritesh Sahu
//                 </p>
//               </SheetTitle>
//               <SheetDescription>
//                 Check the pages and projects I have worked on.
//               </SheetDescription>
//             </SheetHeader>
//             <div className="grid flex-1 auto-rows-min gap-6 px-4">
//               <a
//                 href="#home"
//                 onClick={() => handleLinkClick("#home")}
//                 className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
//               >
//                 Home
//               </a>
//               <a
//                 href="#project"
//                 onClick={() => handleLinkClick("#project")}
//                 className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
//               >
//                 Project
//               </a>
//               <a
//                 href="#about"
//                 onClick={() => handleLinkClick("#about")}
//                 className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
//               >
//                 About
//               </a>
//               <a
//                 href="#contact"
//                 onClick={() => handleLinkClick("#contact")}
//                 className="hover:text-violet-500 transition-colors duration-800 cursor-pointer"
//               >
//                 Contact
//               </a>
//             </div>
//             <SheetFooter>
//               <p className="flex items-center gap-1 text-lg">
//                 {" "}
//                 Start the Conversation
//                 <ArrowDownRight size={18} />
//               </p>
//               <p className="text-gray-400 text-xs">
//                 Fill out the form and let’s make something amazing happen.
//               </p>
//               <Button className="bg-violet-500 cursor-pointer transition duration-500">
//                 <a
//                   href="mailto:riteshkumarsahu1345@email.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full flex justify-center items-center p-2 gap-2"
//                 >
//                   <Mail />
//                   Mail me
//                 </a>
//               </Button>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// };

// export default SheetDemo;
