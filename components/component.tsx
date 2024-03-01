import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./component.module.css";

const Component: NextPage = () => {
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
    <div className={styles.div}>
      <div className={styles.bgBlurParent}>
        <img className={styles.bgBlurIcon} alt="" src="/bg-blur1.svg" />
        <div className={styles.empoweringFarmersAndUnlockWrapper}>
          <div className={styles.empoweringFarmersAndContainer}>
            <span className={styles.empowering}>{`Empowering `}</span>
            <span className={styles.farmers}>Farmers</span>
            <span className={styles.empowering}>{`, and `}</span>
            <span className={styles.farmers}>Unlocking Ghana's</span>
            <span className={styles.empowering}>{` `}</span>
            <span className={styles.farmers}>Agricultural</span>
            <span className={styles.empowering}> Potential</span>
          </div>
        </div>
        <div className={styles.aRevolutionaryDigitalInnoWrapper}>
          <div
            className={styles.aRevolutionaryDigital}
          >{`A revolutionary digital & innovative platform, Agrospectrum connects farmers, traders, processors, and other stakeholders, creating a seamless and efficient agro ecosystem.`}</div>
        </div>
        <div className={styles.scrollDown} data-animate-on-scroll>
          <div className={styles.scrollDownChild} />
        </div>
      </div>
    </div>
  );
};

export default Component;
