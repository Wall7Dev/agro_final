import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./climate.module.css";

export type ClimateType = {
  frame1082?: string;
  inputCredit?: string;
  managementSystem?: string;
  theInputCreditManagementS?: string;
  theProductAllowsForEasyDo?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
};

const Climate: NextPage<ClimateType> = ({
  frame1082,
  inputCredit,
  managementSystem,
  theInputCreditManagementS,
  theProductAllowsForEasyDo,
  propHeight,
  propHeight1,
}) => {
  const frame1082Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const inputCreditManagementSystemContainerStyle: CSSProperties =
    useMemo(() => {
      return {
        height: propHeight1,
      };
    }, [propHeight1]);

  return (
    <div className={styles.climate}>
      <div className={styles.frame1082Parent}>
        <img
          className={styles.frame1082}
          alt=""
          src={frame1082}
          style={frame1082Style}
        />
        <div className={styles.inputCreditManagementSystemParent}>
          <div
            className={styles.inputCreditManagementSystemContainer}
            style={inputCreditManagementSystemContainerStyle}
          >
            <p className={styles.inputCreditManagementSyste}>
              <b className={styles.inputCredit}>{inputCredit}</b>
              <span className={styles.managementSystem}>
                {managementSystem}
              </span>
            </p>
          </div>
          <div className={styles.theInputCredit}>
            {theInputCreditManagementS}
          </div>
          <div className={styles.theInputCredit}>
            {theProductAllowsForEasyDo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Climate;
