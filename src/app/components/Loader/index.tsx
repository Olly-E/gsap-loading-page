"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styles from "./styles.module.css";
import { collapseWords, introAnimation, progressAnimation } from "./animation";
import { words } from "./data";

interface LoaderProps {
  timeline: gsap.core.Timeline | null;
}
const Loader = ({ timeline }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressNumberRef = useRef<HTMLSpanElement>(null);
  const wordGroupsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation({ wordGroupsRef }))
        .add(progressAnimation({ progressRef, progressNumberRef }), 0)
        .add(collapseWords({loaderRef}), '-=1')
  }, [timeline]);

  return (
    <div
      className="h-[100%] w-[100%] fixed inset-0 overflow-hidden"
     
    >
      <div className="absolute bottom-0 left-0 h-[5vh] w-[100%] z-[3]">
        <div className={styles.loader_progress} ref={progressRef}></div>
        <span
          className="absolute left-[-5vw] top-[50%] translate-y-[-50%] z-[4] whitespace-nowrap text-white text-[3.2rem]"
          ref={progressNumberRef}
        >
          0
        </span>
      </div>
      <div className={styles.loader}  ref={loaderRef}>
        <div className="relative overflow-hidden h-[41.8rem]">
          <div className={styles.loader_overlay}></div>
          <div className="loader-wordsGroup" ref={wordGroupsRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className="block text-[3.2rem]">
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
