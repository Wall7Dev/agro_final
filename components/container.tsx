import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./container.module.css";

const Container: NextPage = () => {
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
    <section className={styles.container}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.proudlyGhanaianParent}>
            <div className={styles.proudlyGhanaian} data-animate-on-scroll>
              Proudly Ghanaian
            </div>
            <div
              className={styles.agrospectrumLimitedIsALeadWrapper}
              data-animate-on-scroll
            >
              <div className={styles.agrospectrumLimitedIs}>
                Agrospectrum Limited is a leading force in the agricultural
                sector, dedicated to transforming traditional agricultural
                paradigms and empowering stakeholders across the value chain.
                With a primary focus on Africa, the company endeavors to create
                an inclusive marketplace that caters to the diverse needs of
                farmers, government agencies, financial institutions, and
                service providers. Through a comprehensive suite of services and
                innovative solutions, Agrospectrum addresses challenges faced by
                the sector, facilitating seamless connections between farmers
                and markets, providing support services for farmer well-being,
                leveraging technology for informed decision-making, and
                promoting financial inclusion and access to inputs.
              </div>
            </div>
            <div
              className={styles.agrospectrumsCommitmentExteWrapper}
              data-animate-on-scroll
            >
              <div className={styles.agrospectrumsCommitmentExteContainer}>
                <p className={styles.p}></p>
                <p
                  className={styles.p}
                >{`Agrospectrum's commitment extends to sustainability and innovation, emphasizing climate-smart agriculture to help farmers adapt to changing weather patterns. `}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.droneIcon}
          alt=""
          src="/drone@2x.png"
          data-animate-on-scroll
        />
      </div>
    </section>
  );
};

export default Container;
