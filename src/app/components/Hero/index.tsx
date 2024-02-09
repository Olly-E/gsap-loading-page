/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import styles from "./styles.module.css";
import { animateTitle, animateImage, revealMenu } from "./animation";
import Logo from "../Logo";

const Hero = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      tl.add(animateTitle()).add(animateImage(), 0).add(revealMenu(), 0);

      //when you reference the main container like heroRef that's the main ref so you don't need to target the rest with ref when using context all you need is to add the ref of the main div as the second argument in the context and reference by their class or their data-content
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__top}>
        <div data-menu-item data-hidden>
          <Logo />
        </div>
        <span data-menu-item data-hidden>
          about
        </span>
        <span data-menu-item data-hidden>
          contact
        </span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first data-hidden>
          Ultra
        </span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last data-hidden>
          agency
        </span>
      </h1>

      <div className={styles.hero__image}>
        <div className={styles.hero__imageOverlay} data-image-overlay></div>
        <img
          data-image
          src="/images/blob.jpg"
          className="w-full h-[100%]"
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
