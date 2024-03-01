import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./desktop1.module.css";

const Desktop1: NextPage = () => {
  const router = useRouter();

  const onBtnContainerClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onBtnContainer1Click = useCallback(() => {
    router.push("/desktop");
  }, [router]);

  return (
    <div className={styles.desktop}>
      <img className={styles.bottomBlurIcon} alt="" src="/bottom-blur@2x.png" />
      <div className={styles.container}>
        <div className={styles.cardText}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img4@2x.png" />
            </div>
          </div>
          <div className={styles.coralReef}>Coral Reef</div>
        </div>
        <div className={styles.cardText1}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur4@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img5@2x.png" />
            </div>
          </div>
          <div className={styles.coralReef}>Awards</div>
        </div>
        <div className={styles.cardText2}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur4@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img6@2x.png" />
            </div>
          </div>
          <div className={styles.coralReef}>Input Credit</div>
        </div>
        <div className={styles.cardText1}>
          <div className={styles.card3}>
            <div className={styles.img3}>
              <img className={styles.blurIcon3} alt="" src="/blur3@2x.png" />
              <img className={styles.imgIcon3} alt="" src="/img7@2x.png" />
            </div>
          </div>
          <div className={styles.coralReef}>Enumeration</div>
        </div>
      </div>
      <div className={styles.ourMedia}>Our Media</div>
      <div className={styles.btns}>
        <div className={styles.btn} onClick={onBtnContainerClick}>
          <img className={styles.bgBlurIcon} alt="" src="/bg-blur2@2x.png" />
          <div className={styles.button}>
            <div className={styles.div}>←</div>
          </div>
        </div>
        <div className={styles.btn} onClick={onBtnContainer1Click}>
          <img className={styles.bgBlurIcon} alt="" src="/bg-blur3@2x.png" />
          <div className={styles.button}>
            <div className={styles.div}>→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
