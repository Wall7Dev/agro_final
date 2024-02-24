import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
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
    <div className={styles.frameParent}>
      <div className={styles.makeAnEnquiryWrapper} data-animate-on-scroll>
        <h1 className={styles.makeAnEnquiryContainer}>
          <span className={styles.makeAn}>{`Make an `}</span>
          <span className={styles.enquiry}>enquiry</span>
        </h1>
      </div>
      <div className={styles.contactUsParent}>
        <h2 className={styles.contactUs}>CONTACT US</h2>
        <h2 className={styles.agrospectrumLtd}>Agrospectrum Ltd.</h2>
        <h2 className={styles.headOffice}>HEAD OFFICE</h2>
        <h2 className={styles.headOffice}>{`No. 24 Maseru St `}</h2>
        <div className={styles.eastLegonGa}>East Legon, G/A</div>
        <h2 className={styles.headOffice}>Accra - Ghana</h2>
      </div>
      <div className={styles.phoneParent} data-animate-on-scroll>
        <h2 className={styles.phone}>PHONE</h2>
        <div className={styles.div}>+233(0) 593 808 064</div>
      </div>
      <div className={styles.emailParent} data-animate-on-scroll>
        <h2 className={styles.email}>EMAIL</h2>
        <div className={styles.customercarebslcomgh}>
          customercare@bsl.com.gh
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
