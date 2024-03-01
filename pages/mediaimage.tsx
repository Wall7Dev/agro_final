import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mediaimage.module.css";

const Mediaimage: NextPage = () => {
  const router = useRouter();

  const onOurMediaTextClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  return (
    <div className={styles.mediaimage0}>
      <img className={styles.bottomBlurIcon} alt="" src="/bottom-blur@2x.png" />
      <div className={styles.container}>
        <div className={styles.cardText}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img4@2x.png" />
            </div>
          </div>
          <div className={styles.events}>Events</div>
        </div>
        <div className={styles.cardText1}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur4@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img5@2x.png" />
            </div>
          </div>
          <div className={styles.events}>Awards</div>
        </div>
        <div className={styles.cardText2}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img className={styles.blurIcon} alt="" src="/blur5@2x.png" />
              <img className={styles.imgIcon} alt="" src="/img6@2x.png" />
            </div>
          </div>
          <div className={styles.events}>Tidewave</div>
        </div>
        <div className={styles.cardText3}>
          <div className={styles.card3}>
            <div className={styles.img3}>
              <img className={styles.blurIcon3} alt="" src="/blur3@2x.png" />
              <img className={styles.imgIcon3} alt="" src="/img7@2x.png" />
            </div>
          </div>
          <div className={styles.events}>Mountaineer</div>
        </div>
      </div>
      <div className={styles.ourMedia} onClick={onOurMediaTextClick}>
        Our Media
      </div>
      <div className={styles.btns}>
        <div className={styles.btn}>
          <img className={styles.bgBlurIcon} alt="" src="/bg-blur4@2x.png" />
          <div className={styles.button}>
            <div className={styles.div}>←</div>
          </div>
        </div>
        <div className={styles.btn1}>
          <img className={styles.bgBlurIcon} alt="" src="/bg-blur5@2x.png" />
          <div className={styles.button}>
            <div className={styles.div}>→</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediaimage;
