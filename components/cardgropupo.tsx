import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./cardgropupo.module.css";

const Cardgropupo: NextPage = () => {
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
    <div className={styles.cardgropupo} data-animate-on-scroll>
      <div className={styles.xorse}>
        <div className={styles.xoseAhlijaTeam}>
          <img className={styles.baseIcon} alt="" src="/base6@2x.png" />
          <div className={styles.block1Parent}>
            <div className={styles.block1}>
              <div className={styles.rectangle} />
            </div>
            <div className={styles.xoseAhlijahSweParent}>
              <div className={styles.xoseAhlijahSwe}>Xose Ahlijah, SWE</div>
              <div className={styles.snrTechnologyLead}>
                Snr Technology Lead
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.castro}>
        <img className={styles.baseIcon1} alt="" src="/base7@2x.png" />
        <div className={styles.block11}>
          <div className={styles.rectangle1} />
        </div>
        <div className={styles.castroAntwiDansoParent}>
          <div className={styles.castroAntwiDanso}>Castro Antwi-Danso</div>
          <div className={styles.generalManager}>General Manager</div>
        </div>
      </div>
      <div className={styles.ottisApalooTeam}>
        <img className={styles.baseIcon2} alt="" src="/base8@2x.png" />
        <div className={styles.block1Group}>
          <div className={styles.block12}>
            <div className={styles.rectangle2} />
          </div>
          <div className={styles.otisAApalooParent}>
            <div className={styles.otisAApaloo}>Otis A. Apaloo</div>
            <div className={styles.dataAnalyst}>{`Data Analyst `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardgropupo;
