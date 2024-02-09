import { gsap } from "gsap";

interface IntroAnimationProps {
  wordGroupsRef: React.RefObject<HTMLDivElement>;
}
export const introAnimation = ({ wordGroupsRef }: IntroAnimationProps) => {
  const tl = gsap.timeline();

  tl.to(wordGroupsRef?.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

interface ProgressAnimationProps {
  progressRef: React.RefObject<HTMLDivElement>;
  progressNumberRef: React.RefObject<HTMLSpanElement>;
}
export const progressAnimation = ({
  progressRef,
  progressNumberRef,
}: ProgressAnimationProps) => {
  const tl = gsap.timeline();
  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    });

  return tl;
};

interface CollapseWordsProps {
  loaderRef: React.RefObject<HTMLDivElement>;
}

export const collapseWords = ({ loaderRef }: CollapseWordsProps) => {
  const tl = gsap.timeline();

  tl.to(loaderRef.current, {
    clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
    duration: 3,
    ease: "expo.inOut",
  });

  return tl;
};
