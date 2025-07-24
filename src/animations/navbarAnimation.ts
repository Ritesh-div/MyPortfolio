// import { gsap } from "gsap";

// const animateNavbar = () => {
//   const logo = document.querySelector(".logo");
//   const menuItems = document.querySelectorAll(".menu a");
//   console.log(logo, menuItems);

//   const tl = gsap.timeline();

//   tl.from(logo, {
//     y: -40,
//     opacity: 1,
//     duration: 0.7, // slightly longer for visibility
//   });
//   tl.from(menuItems, {
//     y: -40,
//     opacity: 1,
//     duration: 0.8,
//     stagger: 0.15,
//   });
// };

// export { animateNavbar };



import { gsap } from "gsap";

const animateNavbar = () => {
  const logo = document.querySelector(".logo");
  const menuItems = document.querySelectorAll(".menu a");

//   if (!logo || menuItems.length === 0) return;

  const tl = gsap.timeline();

  // Animate logo
  tl.from(logo, {
    y: -40,
    opacity: 0,
    duration: 0.7,
    // ease: "power2.out",
  });

  // Animate menu items with stagger
  tl.from(menuItems, {
    y: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    // ease: "power2.out",
  });
};

export { animateNavbar };
