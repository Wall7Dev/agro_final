import type { NextPage } from "next";
import Footer from "./footer";
import styles from "./f-o-o-t-e-r-c-o-m-p-o-n-e-n-t1.module.css";

const FOOTERCOMPONENT1: NextPage = () => {
  return (
    <div className={styles.footerComponent}>
      <div className={styles.component1}>
        <div className={styles.frameParent}>
          <div className={styles.download5Parent}>
            <img
              className={styles.download5Icon}
              alt=""
              src="/download-5@2x.png"
            />
            <img
              className={styles.download5Icon1}
              alt=""
              src="/download-5@2x.png"
            />
            <img className={styles.captureIcon} alt="" src="/capture@2x.png" />
            <img
              className={styles.mofaColorIcon}
              alt=""
              src="/mofa-color@2x.png"
            />
            <img
              className={styles.download3Icon}
              alt=""
              src="/download-3@2x.png"
            />
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <img
              className={styles.download6Icon}
              alt=""
              src="/download-6@2x.png"
            />
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-1@2x.png"
            />
            <img
              className={styles.downloadIcon}
              alt=""
              src="/download@2x.png"
            />
            <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
            <img
              className={styles.download2Icon}
              alt=""
              src="/download-2@2x.png"
            />
          </div>
          <div className={styles.download5Group}>
            <img
              className={styles.download5Icon}
              alt=""
              src="/download-5@2x.png"
            />
            <img
              className={styles.download5Icon1}
              alt=""
              src="/download-5@2x.png"
            />
            <img className={styles.captureIcon} alt="" src="/capture@2x.png" />
            <img
              className={styles.mofaColorIcon}
              alt=""
              src="/mofa-color@2x.png"
            />
            <img
              className={styles.download3Icon}
              alt=""
              src="/download-3@2x.png"
            />
            <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
            <img
              className={styles.download6Icon}
              alt=""
              src="/download-6@2x.png"
            />
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-1@2x.png"
            />
            <img
              className={styles.downloadIcon}
              alt=""
              src="/download@2x.png"
            />
            <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
            <img
              className={styles.download2Icon}
              alt=""
              src="/download-2@2x.png"
            />
          </div>
        </div>
      </div>
      <Footer />
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

export default FOOTERCOMPONENT1;
