import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./faq3.module.css";

export type FaqType = {
  isThePlatformFree?: string;
  agrospectrumLimitedIsAFor?: string;
  whatIsMeanByHostPlacehold?: string;
  circle?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const Faq: NextPage<FaqType> = ({
  isThePlatformFree,
  agrospectrumLimitedIsAFor,
  whatIsMeanByHostPlacehold,
  circle,
  propHeight,
}) => {
  const isThePlatformContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.faq3}>
      <div className={styles.whereFrame}>
        <div className={styles.whatDoesThePlatformDo}>
          <b
            className={styles.whatIsMean}
            placeholder={whatIsMeanByHostPlacehold}
          >
            Is the platform free ?
          </b>
          <div className={styles.roundplus}>
            <img
              className={styles.combinedShapeIcon}
              alt=""
              src="/combined-shape.svg"
            />
            <div className={styles.rectangle} />
          </div>
        </div>
      </div>
      <div className={styles.rectangle1} />
      <div className={styles.poppup3}>
        <div className={styles.whatIsMean} style={isThePlatformContainerStyle}>
          <p className={styles.isThePlatform}>{isThePlatformFree}</p>
          <p className={styles.blankLine}>
            <b>&nbsp;</b>
          </p>
          <p className={styles.agrospectrumLimitedIs}>
            {agrospectrumLimitedIsAFor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
