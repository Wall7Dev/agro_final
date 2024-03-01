import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./frameinstagram.module.css";

const Frameinstagram: NextPage = () => {
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
    <div className={styles.theRenownCompaniesThatTrusParent}>
      <div className={styles.theRenownCompaniesContainer}>
        <span>{`The renown companies that `}</span>
        <span className={styles.trustUs}>Trust Us</span>
      </div>
      <section className={styles.frameWrapper} id="partners_logos">
        <div className={styles.frameParent} data-animate-on-scroll>
          <div className={styles.frameGroup}>
            <section className={styles.download5Parent}>
              <img className={styles.download5Icon} alt="" />
              <img className={styles.download3Icon} alt="" />
            </section>
            <section className={styles.captureParent}>
              <img className={styles.captureIcon} alt="" />
              <img className={styles.download6Icon} alt="" />
            </section>
          </div>
          <section className={styles.frameContainer}>
            <section className={styles.download5Group}>
              <img className={styles.download5Icon1} alt="" />
              <img className={styles.download2Icon} alt="" />
              <img className={styles.ignitiaLogo1Icon} alt="" />
            </section>
            <section className={styles.download1Parent}>
              <img className={styles.download1Icon} alt="" />
              <img className={styles.images1Icon} alt="" />
              <div className={styles.agromiteParent}>
                <div className={styles.agromite}>AGROMITE</div>
                <img className={styles.downloadIcon} alt="" />
              </div>
            </section>
          </section>
          <section className={styles.mofaColorWrapper}>
            <img className={styles.mofaColorIcon} alt="" />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Frameinstagram;
