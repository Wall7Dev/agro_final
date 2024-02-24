import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./c-o-n-t-a-c-t-f-o-r-m.module.css";

const CONTACTFORM: NextPage = () => {
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
    <section className={styles.contactForm} data-animate-on-scroll>
      <div className={styles.enquiryTypeWrapper}>
        <h3 className={styles.enquiryType}>Enquiry type</h3>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.generalWrapper}>
          <div className={styles.general}>General</div>
        </div>
        <div className={styles.business}>
          <div className={styles.general}>Business</div>
        </div>
        <div className={styles.generalWrapper}>
          <div className={styles.general}>Careers</div>
        </div>
      </div>
      <input
        className={styles.contactFormChild}
        placeholder="Name"
        type="text"
      />
      <input
        className={styles.contactFormChild}
        placeholder="Phone"
        type="text"
      />
      <input
        className={styles.contactFormChild}
        placeholder="Email"
        type="text"
      />
      <input className={styles.frameInput} placeholder="Company" type="text" />
      <textarea
        className={styles.frameTextarea}
        placeholder="Type your message here"
      />
      <div className={styles.frameDiv}>
        <div className={styles.sendWrapper}>
          <div className={styles.send}>send</div>
        </div>
      </div>
    </section>
  );
};

export default CONTACTFORM;
