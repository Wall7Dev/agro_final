import type { NextPage } from "next";
import styles from "./faq3.module.css";

const Faq: NextPage = () => {
  return (
    <div className={styles.faq3}>
      <div className={styles.whereFrame2}>
        <div className={styles.whatDoesThePlatformDo2}>
          <b className={styles.whatDoesTheContainer}>Is the platform free ?</b>
          <div className={styles.roundplus2}>
            <img
              className={styles.combinedShapeIcon}
              alt=""
              src="/combined-shape.svg"
            />
            <div className={styles.rectangle3} />
          </div>
        </div>
      </div>
      <div className={styles.rectangle4} />
      <div className={styles.poppup2}>
        <div className={styles.whatDoesTheContainer}>
          <p className={styles.whatDoesThe}> Is the platform free ?</p>
          <p className={styles.blankLine}>
            <b>&nbsp;</b>
          </p>
          <p className={styles.withAgrospectrumsSolutions}>
            Agrospectrum Limited is a for-profit entity that provides Agric
            business enterprises with top notch digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
