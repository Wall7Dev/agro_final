import type { NextPage } from "next";
import styles from "./transform.module.css";

export type TransformType = {
  /** Action props */
  onFramesWithTextClick?: () => void;
};

const Transform: NextPage<TransformType> = ({ onFramesWithTextClick }) => {
  return (
    <div className={styles.transform}>
      <div className={styles.nowWereWrapper}>
        <div className={styles.nowWere}>TRANSFORM with</div>
      </div>
      <div className={styles.nowWereContainer}>
        <div className={styles.nowWere1}>AGROSPECTRUM</div>
      </div>
      <div className={styles.nuncUltricesTellusWrapper}>
        <div className={styles.nuncUltricesTellusContainer}>
          <p
            className={styles.transformYourAgricultural}
          >{`Transform your agricultural practices and `}</p>
          <p className={styles.transformYourAgricultural}>
            <span className={styles.cultivateSuccessWith}>
              cultivate success with
            </span>
            <b className={styles.cultivateSuccessWith}> industry's best</b>
            <span>—empowering farmers, streamlining operations,</span>
          </p>
          <p className={styles.transformYourAgricultural}>
            <span>{`and fostering a connected `}</span>
            <b className={styles.cultivateSuccessWith}>global community</b>
          </p>
        </div>
      </div>
      <button
        className={styles.getInTouchWrapper}
        onClick={onFramesWithTextClick}
      >
        <div className={styles.getInTouch}>GET IN TOUCH</div>
      </button>
    </div>
  );
};

export default Transform;
