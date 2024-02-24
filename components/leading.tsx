import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./leading.module.css";

const Leading: NextPage = () => {
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
    <section className={styles.leading}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div
            className={styles.leadingTheWayInInnovationWrapper}
            data-animate-on-scroll
          >
            <div
              className={styles.leadingTheWay}
            >{`Leading the way in Innovation & technology in the Agriculture Space`}</div>
          </div>
          <div className={styles.frameContainer} data-animate-on-scroll>
            <div className={styles.inTheFertileFieldsOfInnovWrapper}>
              <div className={styles.inTheFertile}>
                In the fertile fields of innovation, we're sowing the seeds of a
                smarter, more sustainable future for agriculture. We harness
                cutting-edge technology to empower every stakeholder – from
                farmer to financier – nurturing connections, optimizing
                resources, and unlocking boundless potential. With each bold
                stride, we lead the way, cultivating a harvest of abundance and
                prosperity for generations to come.
              </div>
            </div>
            <button className={styles.cta} data-animate-on-scroll>
              <div className={styles.getInTouch}>GET IN TOUCH</div>
            </button>
          </div>
        </div>
        <img
          className={styles.unsplashyo5m9vczbcmIcon}
          alt=""
          src="/unsplashyo5m9vczbcm@2x.png"
          data-animate-on-scroll
        />
      </div>
    </section>
  );
};

export default Leading;
