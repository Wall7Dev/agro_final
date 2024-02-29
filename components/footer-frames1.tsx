import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const onNowWereTextClick = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onNowWereText2Click = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onNowWereText3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.nowWereParent}>
          <div className={styles.nowWere}>business</div>
          <div className={styles.frameContainer}>
            <div className={styles.nowWereWrapper}>
              <div className={styles.nowWere1} onClick={onNowWereTextClick}>
                CAREERS
              </div>
            </div>
            <div className={styles.nowWereWrapper}>
              <div
                className={styles.nowWere2}
                onClick={onNowWereText2Click}
              >{`ABOUT US `}</div>
            </div>
            <div className={styles.nowWereFrame}>
              <div className={styles.nowWere3}>PRIVACY POLICY</div>
            </div>
            <div
              className={styles.nowWereGroup}
              onClick={onFrameContainer3Click}
            >
              <div className={styles.nowWere4} onClick={onNowWereText3Click}>
                PARTNERS
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-1171@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.nowWereWrapper1}>
              <div className={styles.nowWere5}>{`CONTACT US `}</div>
            </div>
            <div className={styles.agrsopectrumLtd}>
              <span className={styles.agrsopectrumLtdTxtContainer}>
                <span className={styles.a}>A</span>
                <span className={styles.grsopectrum}>{`GRSOPECTRUM `}</span>
                <span className={styles.a}>l</span>
                <span className={styles.grsopectrum}>TD</span>
              </span>
            </div>
          </div>
          <div className={styles.nowWereParent1}>
            <div className={styles.nowWere6}>EAST LEGON office</div>
            <div className={styles.nowWereParent2}>
              <div className={styles.nowWere7}>No 24 Maseru St</div>
              <div className={styles.nowWere7}>East Legon,</div>
              <div className={styles.nowWere7}>Accra - ghana</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.nowWereParent3}>
          <div className={styles.nowWere10}>BSL HEAD OFFICE</div>
          <div className={styles.nowWere11}>No 24 Botwe</div>
          <div className={styles.nowWere11}>Dzorwulu - Accra</div>
        </div>
        <div className={styles.nowWereParent4}>
          <div className={styles.nowWere10}>TAMALE office</div>
          <div className={styles.nowWereParent5}>
            <div className={styles.nowWere14}>Tamale.</div>
            <div className={styles.nowWere15}>16 Dagomba Road,</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFrames1;
