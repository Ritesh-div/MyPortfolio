import { gsap } from "gsap";

export const animateHero = (
  headingEl: HTMLElement,
  subheadingEl: HTMLElement,
  buttonEl: HTMLElement,
  imageEl?: HTMLElement
) => {
  const tl = gsap.timeline();

  tl.from(headingEl, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
  })
    .from(subheadingEl, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out",
    }, "-=0.6")
    .from(buttonEl, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "back.out(1.7)",
    }, "-=0.5");

  if (imageEl) {
    gsap.from(imageEl, {
      scale: 1.1,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      delay: 0.5,
    });
  }
};
