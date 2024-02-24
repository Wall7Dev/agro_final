import type { NextPage } from "next";
import styles from "./footer-frames1.module.css";

export type FooterFrames1Type = {
  line1?: string;

  /** Action props */
  onNowWereText3Click?: () => void;
  onNowWereText4Click?: () => void;
  onDownloadButtonsContainer3Click?: () => void;
  onNowWereText6Click?: () => void;
};

const FooterFrames1: NextPage<FooterFrames1Type> = ({
  line1,
  onNowWereText3Click,
  onNowWereText4Click,
  onDownloadButtonsContainer3Click,
  onNowWereText6Click,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.nowWereParent}>
          <div className={styles.nowWere}>business</div>
          <div className={styles.frameContainer}>
            <div className={styles.nowWereWrapper}>
              <div className={styles.nowWere1} onClick={onNowWereText3Click}>
                CAREERS
              </div>
            </div>
            <div className={styles.nowWereWrapper}>
              <div
                className={styles.nowWere2}
                onClick={onNowWereText4Click}
              >{`ABOUT US `}</div>
            </div>
            <div className={styles.nowWereFrame}>
              <div className={styles.nowWere3}>PRIVACY POLICY</div>
            </div>
            <div
              className={styles.nowWereGroup}
              onClick={onDownloadButtonsContainer3Click}
            >
              <div className={styles.nowWere4} onClick={onNowWereText6Click}>
                PARTNERS
              </div>
              <img className={styles.frameChild} alt="" src={line1} />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.nowWereParent1}>
            <div className={styles.nowWere5}>{`CONTACT US `}</div>
            <div className={styles.nowWere6}>Agrospectrum Ltd.</div>
          </div>
          <div className={styles.nowWereParent2}>
            <div className={styles.nowWere7}>EAST LEGON office</div>
            <div className={styles.nowWereParent3}>
              <div className={styles.nowWere8}>No 24 Maseru St</div>
              <div className={styles.nowWere8}>East Legon,</div>
              <div className={styles.nowWere8}>Accra - ghana</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.nowWereParent4}>
          <div className={styles.nowWere11}>BSL HEAD OFFICE</div>
          <div className={styles.nowWere12}>No 24 Botwe</div>
          <div className={styles.nowWere12}>Dzorwulu - Accra</div>
        </div>
        <div className={styles.nowWereParent5}>
          <div className={styles.nowWere11}>TAMALE office</div>
          <div className={styles.nowWereParent6}>
            <div className={styles.nowWere15}>Tamale.</div>
            <div className={styles.nowWere16}>16 Dagomba Road,</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFrames1;
