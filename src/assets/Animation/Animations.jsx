import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useAnimationEffect(ref, options = {}) {
  const {
    y = 60,
    duration = 0.8,
    delay = 0,
    ease = "power4.out"
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, [ref, y, duration, delay, ease]);
}


function useSoftRevealEffect(ref, options = {}) {
  const {
    y = 20,
    duration = 0.6,
    delay = 0,
    ease = "power2.out"
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y, opacity: 0, filter: "blur(3px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, [ref, y, duration, delay, ease]);
}

// Animations for Header Component 

function animateHeaderElements(textRef, subtitleRef, iconRef) {
  gsap.fromTo(textRef.current,
    { opacity: 0, filter: 'blur(8px)' },
    { opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'power3.out', delay: 1 }
  );

  gsap.fromTo(subtitleRef.current,
    { opacity: 0, filter: 'blur(8px)' },
    { opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'power3.out', delay: 1 }
  );

  gsap.fromTo(
    iconRef.current,
    { opacity: 0, x: -80, filter: 'blur(8px)' },
    { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, delay: 1, ease: 'power3.out' }
  );
}

// Animations for Landing Component

function animateLanding(textRef, subRef, textRef1 = null, textRef2 = null) {
  const words = textRef.current.querySelectorAll("span");
  gsap.set(words, { opacity: 0, filter: "blur(8px)", y: 20 });
  gsap.to(words, {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.1,
    delay: 1
  });

  const words1 = subRef.current.querySelectorAll("span");
  gsap.set(words1, { opacity: 0, filter: "blur(8px)", y: 20 });
  gsap.to(words1, {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
    delay: 1
  });

  if (textRef1?.current) {
    gsap.fromTo(textRef1.current,
      { opacity: 0, filter: 'blur(8px)' },
      { opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'power3.out', delay: 1 }
    );
  }

  if (textRef2?.current) {
    gsap.fromTo(textRef2.current,
      { opacity: 0, filter: 'blur(8px)' },
      { opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'power3.out', delay: 1 }
    );
  }
}

export { useAnimationEffect, useSoftRevealEffect, animateHeaderElements, animateLanding };
