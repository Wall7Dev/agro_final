import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./parent-caurosol.module.css";

const ParentCaurosol: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section7']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLeftGroupIcon3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section6']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.parentCaurosol}>
      <section className={styles.mission}>
        <div
          className={styles.missionInner}
          onClick={onFrameContainerClick}
          data-animate-on-scroll
        >
          <div className={styles.leftGroupParent}>
            <img
              className={styles.leftGroupIcon}
              alt=""
              src="/left-group@2x.png"
            />
            <div className={styles.missionWrapper}>
              <h1 className={styles.mission1}>Mission</h1>
            </div>
            <img
              className={styles.leftGroupIcon1}
              alt=""
              src="/left-group@2x.png"
            />
          </div>
        </div>
        <div className={styles.toExtendDigitalization}>
          To extend digitalization and innovation to agriculture through diverse
          technological channels
        </div>
      </section>
      <section className={styles.section} data-scroll-to="section7">
        <div className={styles.inner} data-animate-on-scroll>
          <div className={styles.leftGroupParent}>
            <img
              className={styles.leftGroupIcon}
              alt=""
              src="/left-group@2x.png"
            />
            <div className={styles.integrityWrapper}>
              <h1 className={styles.integrity}>Integrity</h1>
            </div>
            <img
              className={styles.leftGroupIcon3}
              alt=""
              src="/left-group@2x.png"
              onClick={onLeftGroupIcon3Click}
            />
          </div>
        </div>
        <div className={styles.ourCredibilityAs}>
          Our credibility as a brand is evident in the authenticity of our
          products but and also in the numerous partnerships with the players.
        </div>
      </section>
      <section className={styles.section1} data-scroll-to="section6">
        <div className={styles.child} data-animate-on-scroll>
          <div className={styles.leftGroupParent}>
            <img
              className={styles.leftGroupIcon}
              alt=""
              src="/left-group@2x.png"
            />
            <div className={styles.leftGroupParent}>
              <h1 className={styles.resourcefulness}>Resourcefulness</h1>
            </div>
            <img
              className={styles.leftGroupIcon1}
              alt=""
              src="/left-group@2x.png"
            />
          </div>
        </div>
        <div className={styles.ourCredibilityAs}>
          Our credibility as a brand is evident in the authenticity of our
          products but and also in the numerous partnerships with the players.
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.inner} data-animate-on-scroll>
          <div className={styles.leftGroupParent}>
            <img
              className={styles.leftGroupIcon}
              alt=""
              src="/left-group@2x.png"
            />
            <div className={styles.integrityWrapper}>
              <h1 className={styles.integrity}>Innovation</h1>
            </div>
            <img
              className={styles.leftGroupIcon1}
              alt=""
              src="/left-group@2x.png"
            />
          </div>
        </div>
        <div className={styles.weOfferAContainer}>
          <p className={styles.weOfferA}>
            We offer a huge arsenal of logistics and expertise to
          </p>
          <p className={styles.weOfferA}>
            strategize and tackle most agro challenges
          </p>
        </div>
      </section>
    </div>
  );
};

export default ParentCaurosol;
