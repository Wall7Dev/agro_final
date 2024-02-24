import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer-frames.module.css";

export type FooterFramesType = {
  /** Style props */
  propTop?: CSSProperties["top"];

  /** Action props */
  onArrowIconClick?: () => void;
  onNowWereText19Click?: () => void;
};

const FooterFrames: NextPage<FooterFramesType> = ({
  propTop,
  onArrowIconClick,
  onNowWereText19Click,
}) => {
  const nowWereStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.frameParent}>
      <button className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/arrow-105.svg"
          onClick={onArrowIconClick}
        />
        <div className={styles.nowWere} onClick={onNowWereText19Click}>
          GET DIRECTION
        </div>
      </button>
      <div className={styles.nowWereParent}>
        <div className={styles.nowWere1}>
          <div className={styles.nowWere2}>PHONE</div>
        </div>
        <div className={styles.nowWere3}>+233(0) 593 808 064</div>
      </div>
      <div className={styles.nowWereGroup}>
        <div className={styles.nowWere4}>
          <div className={styles.nowWere5} style={nowWereStyle}>
            EMAIL
          </div>
        </div>
        <div className={styles.nowWere6}>
          <div className={styles.nowWere7}>customercare@bsl.com.gh</div>
        </div>
      </div>
      <div className={styles.nowWereContainer}>
        <div className={styles.nowWere8}>
          <div className={styles.nowWere9}>{`FOLLOW US `}</div>
        </div>
        <div className={styles.instagramParent}>
          <div className={styles.instagram}>
            <img className={styles.groupIcon} alt="" src="/group61.svg" />
          </div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector231.svg" />
          </div>
          <div className={styles.frame}>
            <img className={styles.vectorIcon1} alt="" src="/vector110.svg" />
          </div>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon2} alt="" src="/vector24.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFrames;
