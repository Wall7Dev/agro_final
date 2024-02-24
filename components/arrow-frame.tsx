import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./arrow-frame.module.css";

const ArrowFrame: NextPage = () => {
  const onBdp1ImageClick = useCallback(() => {
    window.location.href = "https://bdp.com.gh/";
  }, []);

  const onSpectrum1ImageClick = useCallback(() => {
    window.location.href = "https://sfl.com.gh/";
  }, []);

  const onIsg1ImageClick = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  return (
    <button className={styles.arrowframe}>
      <div className={styles.oursubsiadiries}>
        <img
          className={styles.oursubsiadiriesChild}
          alt=""
          src="/group-939111.svg"
        />
        <img
          className={styles.bdp1Icon}
          alt=""
          src="/bdp-1@2x.png"
          onClick={onBdp1ImageClick}
        />
        <img
          className={styles.spectrum1Icon}
          alt=""
          src="/spectrum-1@2x.png"
          onClick={onSpectrum1ImageClick}
        />
        <img
          className={styles.isg1Icon}
          alt=""
          src="/isg-1@2x.png"
          onClick={onIsg1ImageClick}
        />
      </div>
    </button>
  );
};

export default ArrowFrame;
