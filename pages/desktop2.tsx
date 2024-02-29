import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./desktop2.module.css";

const Desktop2: NextPage = () => {
  const router = useRouter();

  const onBtnContainer1Click = useCallback(() => {
    router.push("/desktop1");
  }, [router]);

  return (
    <div className={styles.desktop}>
      <img className={styles.bottomBlurIcon} alt="" src="/bottom-blur@2x.png" />
      <div className={styles.container}>
        <div className={styles.cardText}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img@2x.png" />
            </div>
          </div>
          <div className={styles.coralReef}>Coral Reef</div>
        </div>
        <div className={styles.cardText1}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img@2x.png" />
            </div>
          </div>
          <div className={styles.coralReef}>Ripples</div>
        </div>
        <div className={styles.cardText2}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img@2x.png" />
            </div>
          </div>
          <div className={styles.coralReef}>Input Credit</div>
        </div>
        <div className={styles.cardText3}>
          <div className={styles.card3}>
            <div className={styles.img3}>
              <img className={styles.blurIcon3} alt="" src="/blur@2x.png" />
              <img className={styles.imgIcon3} alt="" src="/img@2x.png" />
            </div>
          </div>
          <div className={styles.coralReef}>Enumerations</div>
        </div>
      </div>
      <div className={styles.ourMedia}>Our Media</div>
      <div className={styles.btns}>
        <div className={styles.btn}>
          <img className={styles.bgBlurIcon} alt="" src="/bg-blur@2x.png" />
          <div className={styles.button}>
            <div className={styles.div}>←</div>
          </div>
        </div>
        <div className={styles.btn1} onClick={onBtnContainer1Click}>
          <img className={styles.bgBlurIcon} alt="" src="/bg-blur@2x.png" />
          <div className={styles.button}>
            <div className={styles.div}>→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
