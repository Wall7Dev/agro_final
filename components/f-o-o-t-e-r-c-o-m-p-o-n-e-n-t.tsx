import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Transform from "./transform";
import FooterFrames1 from "./footer-frames1";
import FooterFrames from "./footer-frames";
import styles from "./f-o-o-t-e-r-c-o-m-p-o-n-e-n-t.module.css";

const FOOTERCOMPONENT: NextPage = () => {
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onArrowIconClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereTextClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

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
    <div className={styles.footerComponent}>
      <div className={styles.component1}>
        <div className={styles.frameParent}>
          <div className={styles.download5Parent}>
            <img className={styles.download5Icon} alt="" />
            <img
              className={styles.download5Icon1}
              alt=""
              src="/download-56@2x.png"
            />
            <img className={styles.captureIcon} alt="" src="/capture3@2x.png" />
            <img
              className={styles.mofaColorIcon}
              alt=""
              src="/mofa-color3@2x.png"
            />
            <img
              className={styles.download3Icon}
              alt=""
              src="/download-33@2x.png"
            />
            <img className={styles.imagesIcon} alt="" src="/images2@2x.png" />
            <img
              className={styles.download6Icon}
              alt=""
              src="/download-63@2x.png"
            />
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-13@2x.png"
            />
            <img
              className={styles.downloadIcon}
              alt=""
              src="/download3@2x.png"
            />
            <img
              className={styles.images1Icon}
              alt=""
              src="/images-13@2x.png"
            />
            <img
              className={styles.download2Icon}
              alt=""
              src="/download-23@2x.png"
            />
          </div>
          <div className={styles.download5Group}>
            <img
              className={styles.download5Icon}
              alt=""
              src="/download-57@2x.png"
            />
            <img
              className={styles.download5Icon1}
              alt=""
              src="/download-58@2x.png"
            />
            <img className={styles.captureIcon} alt="" src="/capture4@2x.png" />
            <img
              className={styles.mofaColorIcon}
              alt=""
              src="/mofa-color4@2x.png"
            />
            <img
              className={styles.download3Icon}
              alt=""
              src="/download-34@2x.png"
            />
            <img className={styles.imagesIcon} alt="" src="/images3@2x.png" />
            <img
              className={styles.download6Icon}
              alt=""
              src="/download-64@2x.png"
            />
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-14@2x.png"
            />
            <img
              className={styles.downloadIcon}
              alt=""
              src="/download4@2x.png"
            />
            <img
              className={styles.images1Icon}
              alt=""
              src="/images-14@2x.png"
            />
            <img
              className={styles.download2Icon}
              alt=""
              src="/download-24@2x.png"
            />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div
          className={styles.transformParent}
          id="footercontent"
          data-animate-on-scroll
        >
          <Transform onFramesWithTextClick={onFrameButtonClick} />
          <FooterFrames1 />
          <FooterFrames
            propTop="-23.79%"
            onArrowIconClick={onArrowIconClick}
            onNowWereText19Click={onNowWereTextClick}
          />
        </div>
      </footer>
      <div className={styles.frameGroup}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.nowWereParent}>
          <div className={styles.nowWere}>
            No 24 Maseru Street,East Legon -Accra
          </div>
          <div className={styles.nowWere1}>
            © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOOTERCOMPONENT;
