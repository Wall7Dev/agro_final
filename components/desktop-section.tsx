import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./desktop-section.module.css";

const DesktopSection: NextPage = () => {
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
  return (
    <section className={styles.desktopSection2}>
      <img
        className={styles.desktopSection2Child}
        alt=""
        src="/ellipse-2.svg"
      />
      <img
        className={styles.bgBlurIcon}
        alt=""
        src="/bg-blur.svg"
        data-animate-on-scroll
      />
      <div className={styles.bgBlur2} data-animate-on-scroll />
      <div className={styles.theNationsBestDigitalAgriParent}>
        <div className={styles.theNationsBest}>
          The nation’s best digital Agric Platform
        </div>
        <div
          className={styles.agrospectrumLimitedIs}
        >{`Agrospectrum Limited is a leading force in the agricultural sector, is dedicated to transforming traditional agricultural paradigms and empowering stakeholders across the value chain. With a primary focus on Africa, the company endeavors to create an inclusive marketplace that caters to the diverse needs of farmers, government agencies, financial institutions, and service providers. `}</div>
        <h1 className={styles.whyWorkWithContainer} data-animate-on-scroll>
          <span>Why</span>
          <span className={styles.workWith}>{` Work with `}</span>
          <span>us</span>
          <span className={styles.workWith}>{` `}</span>
          <span>?</span>
        </h1>
      </div>
      <div className={styles.featuresimages}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-940@2x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.weOfferAComprehensiveSuiteParent}>
              <div className={styles.weOfferA} data-animate-on-scroll>
                We offer a Comprehensive Suite of Agriculture Supply Chain
                Management tools.
              </div>
              <div className={styles.inTheHeart} data-animate-on-scroll>
                In the heart of Ghana's vibrant agricultural landscape,
                Agrospectrum emerges as a beacon of innovation, poised to
                transform the industry through the power of digitalization. We
                are committed promoting inclusivity and granting farmers access
                to finances and markets.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.unlockingGhanasAgriculturalParent}>
            <div
              className={styles.unlockingGhanasAgriculturalContainer}
              data-animate-on-scroll
            >
              <p
                className={styles.unlockingGhanasAgricultural}
              >{`Unlocking Ghana's Agricultural `}</p>
              <p className={styles.unlockingGhanasAgricultural}>Potential</p>
            </div>
            <div
              className={styles.ghanasAgriculturalSector}
              data-animate-on-scroll
            >
              Ghana's agricultural sector holds immense potential, brimming with
              untapped opportunities. Agrospectrum is committed to unlocking
              this potential by providing a digital infrastructure that empowers
              all stakeholders, from farmers to processors. Our platform is not
              merely a tool; it is a catalyst for Ghana's agricultural
              revolution.
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-9401@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopSection;
