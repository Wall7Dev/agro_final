import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./product-and-services-sec.module.css";

const ProductAndServicesSec: NextPage = () => {
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
    <div className={styles.productAndServicesSec4}>
      <b className={styles.whatWeOffer} data-animate-on-scroll>
        What we Offer
      </b>
      <div
        className={styles.productAndServicesSec4Inner}
        data-animate-on-scroll
      >
        <div className={styles.inTheHeartOfGhanasVibranWrapper}>
          <div className={styles.inTheHeartContainer}>
            <p
              className={styles.inTheHeart}
            >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
            <p className={styles.inTheHeart}>
              beacon of innovation poised to transform the industry through the
              power of digitalization.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/frame-94@2x.png"
          data-animate-on-scroll
        />
        <div className={styles.frameGroup}>
          <div
            className={styles.inputCreditManagementSystemParent}
            data-animate-on-scroll
          >
            <b className={styles.inputCreditManagementSystem}>
              input-Credit Management Systems
            </b>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.inTheHeartOfGhanasVibranWrapper}>
            <div className={styles.theInputCredit} data-animate-on-scroll>
              the input credit management system allows VCEs and Aggregators to
              give farmers access to input on credit and pay back with produce
            </div>
          </div>
          <div
            className={styles.thisProductDigitalisesTheIWrapper}
            data-animate-on-scroll
          >
            <div className={styles.inTheHeartContainer}>
              This product digitalises the input-credit process while promoting
              efficiency and productivity on the part of the farmer. This
              solution ensures easy documentation and management of inputs given
              at the beginning of the farming season; gives insights to expected
              returns, provides farmers with agronomic advice, allows agents to
              monitor farmers progress during the season and adherence to timely
              schedules of farm practices. It also documents and manages the
              recovery process by the VCEs and aggregators.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectArrowParent}>
        <div className={styles.projectArrow}>
          <img
            className={styles.paginationsIcon}
            alt=""
            src="/paginations.svg"
          />
        </div>
        <div className={styles.navigation}>
          <div className={styles.divider} />
        </div>
      </div>
      <div className={styles.inputCreditManagementSystemGroup}>
        <div className={styles.inputCreditManagementSystem1}>
          input-Credit Management Systems
        </div>
        <div className={styles.thisProductAlsoContainer}>
          <p className={styles.inTheHeart}>
            This product also determines and distinguishes farmers from
            community aggregators by registering such value chain actors and
            their businesses in a system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductAndServicesSec;
