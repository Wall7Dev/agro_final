import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./desktop-stats-sec.module.css";

const DesktopStatsSec: NextPage = () => {
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
    <div className={styles.desktopStatsSec3}>
      <div className={styles.instanceParent} data-animate-on-scroll>
        <div className={styles.mParent}>
          <div className={styles.m} data-animate-on-scroll>
            <div className={styles.m1}>1. 7 M+</div>
          </div>
          <div className={styles.farmersRegistered} data-animate-on-scroll>
            <div className={styles.farmersRegistered1}>Farmers Registered</div>
          </div>
          <div className={styles.instanceChild} />
          <div className={styles.registratedAndKyc} data-animate-on-scroll>
            registrated and KYC for regular farmers, commercial farmers
            outgrower farmer across the northern region
          </div>
        </div>
        <div className={styles.mParent}>
          <div className={styles.m} data-animate-on-scroll>
            <div className={styles.m3} data-animate-on-scroll>
              60+
            </div>
          </div>
          <div className={styles.farmersRegistered} data-animate-on-scroll>
            <div className={styles.farmersRegistered3} data-animate-on-scroll>
              Districts Covered
            </div>
          </div>
          <div className={styles.instanceChild} />
          <div
            className={styles.registratedAndKycContainer}
            data-animate-on-scroll
          >
            <p className={styles.withOurTechnology}>
              With our technology, we have successfully
            </p>
            <p className={styles.withOurTechnology}>
              run several partner programs across
            </p>
            <p className={styles.withOurTechnology}>sixty districts.</p>
          </div>
        </div>
        <div className={styles.mParent}>
          <div className={styles.m} data-animate-on-scroll>
            <div className={styles.m3} data-animate-on-scroll>
              20M+
            </div>
          </div>
          <div className={styles.farmersRegistered} data-animate-on-scroll>
            <div className={styles.farmersRegistered1}>{`Farming Acres `}</div>
          </div>
          <div className={styles.instanceChild} />
          <div
            className={styles.registratedAndKycContainer1}
            data-animate-on-scroll
          >
            <p
              className={styles.withOurTechnology}
            >{`We have documented millions of farming `}</p>
            <p className={styles.withOurTechnology}>
              lands, detailing their per seasonal
            </p>
            <p className={styles.withOurTechnology}>cultivation and yields.</p>
          </div>
        </div>
        <div className={styles.mParent}>
          <div className={styles.m} data-animate-on-scroll>
            <div className={styles.m7}>5 Acres</div>
          </div>
          <div className={styles.farmersRegistered} data-animate-on-scroll>
            <div className={styles.farmersRegistered7}>Average farm size</div>
          </div>
          <div className={styles.instanceChild} />
          <div className={styles.registratedAndKyc1} data-animate-on-scroll>
            We collected data on average farm size per farmer, including
            thousands of livestock farmers covered.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopStatsSec;
