import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./f-o-o-t-e-r-c-o-m-p-o-n-e-n-t11.module.css";

const FOOTERCOMPONENT11: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

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

  const onArrowIconClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereText4Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereText5Click = useCallback(() => {
    window.location.href = "tel:+233(0) 593 808 064";
  }, []);

  const onInstagramContainerClick = useCallback(() => {
    window.location.href = "https://www.linkedin.com/company/eagric-gh/";
  }, []);

  const onLinkedinAgrospectremContainerClick = useCallback(() => {
    window.location.href = "https://www.linkedin.com/company/eagric-gh/";
  }, []);

  return (
    <div className={styles.footerComponent}>
      <div className={styles.component1}>
        <div className={styles.frameParent}>
          <div className={styles.download5Parent}>
            <img
              className={styles.download5Icon}
              alt=""
              src="/download-513@2x.png"
            />
            <img
              className={styles.download5Icon1}
              alt=""
              src="/download-514@2x.png"
            />
            <img className={styles.captureIcon} alt="" src="/capture7@2x.png" />
            <img
              className={styles.mofaColorIcon}
              alt=""
              src="/mofa-color7@2x.png"
            />
            <img
              className={styles.download3Icon}
              alt=""
              src="/download-37@2x.png"
            />
            <img className={styles.imagesIcon} alt="" src="/images6@2x.png" />
            <img
              className={styles.download6Icon}
              alt=""
              src="/download-67@2x.png"
            />
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-17@2x.png"
            />
            <img
              className={styles.downloadIcon}
              alt=""
              src="/download7@2x.png"
            />
            <img
              className={styles.images1Icon}
              alt=""
              src="/images-17@2x.png"
            />
            <img
              className={styles.download2Icon}
              alt=""
              src="/download-27@2x.png"
            />
          </div>
          <div className={styles.download5Group}>
            <img
              className={styles.download5Icon}
              alt=""
              src="/download-515@2x.png"
            />
            <img
              className={styles.download5Icon1}
              alt=""
              src="/download-516@2x.png"
            />
            <img className={styles.captureIcon} alt="" src="/capture8@2x.png" />
            <img
              className={styles.mofaColorIcon}
              alt=""
              src="/mofa-color8@2x.png"
            />
            <img
              className={styles.download3Icon}
              alt=""
              src="/download-38@2x.png"
            />
            <img className={styles.imagesIcon} alt="" src="/images7@2x.png" />
            <img
              className={styles.download6Icon}
              alt=""
              src="/download-68@2x.png"
            />
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-18@2x.png"
            />
            <img
              className={styles.downloadIcon}
              alt=""
              src="/download8@2x.png"
            />
            <img
              className={styles.images1Icon}
              alt=""
              src="/images-18@2x.png"
            />
            <img
              className={styles.download2Icon}
              alt=""
              src="/download-28@2x.png"
            />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div
          className={styles.transformParent}
          id="footercontent"
          data-animate-on-scroll
        >
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
                  <b className={styles.cultivateSuccessWith}>
                    {" "}
                    industry's best
                  </b>
                  <span>—empowering farmers, streamlining operations,</span>
                </p>
                <p className={styles.transformYourAgricultural}>
                  <span>{`and fostering a connected `}</span>
                  <b className={styles.cultivateSuccessWith}>
                    global community
                  </b>
                </p>
              </div>
            </div>
            <button
              className={styles.getInTouchWrapper}
              onClick={onFrameButtonClick}
            >
              <div className={styles.getInTouch}>GET IN TOUCH</div>
            </button>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.nowWereParent}>
                <div className={styles.nowWere2}>business</div>
                <div className={styles.frameDiv}>
                  <div className={styles.nowWereFrame}>
                    <div
                      className={styles.nowWere3}
                      onClick={onNowWereTextClick}
                    >
                      CAREERS
                    </div>
                  </div>
                  <div className={styles.nowWereFrame}>
                    <div
                      className={styles.nowWere4}
                      onClick={onNowWereText2Click}
                    >{`ABOUT US `}</div>
                  </div>
                  <div className={styles.nowWereWrapper2}>
                    <div className={styles.nowWere5}>PRIVACY POLICY</div>
                  </div>
                  <div
                    className={styles.nowWereGroup}
                    onClick={onFrameContainer3Click}
                  >
                    <div
                      className={styles.nowWere6}
                      onClick={onNowWereText3Click}
                    >
                      PARTNERS
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/line-112@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.nowWereWrapper3}>
                    <div className={styles.nowWere7}>{`CONTACT US `}</div>
                  </div>
                  <div className={styles.agrsopectrumLtd}>
                    <span className={styles.agrsopectrumLtdTxtContainer}>
                      <span className={styles.a}>A</span>
                      <span
                        className={styles.grsopectrum}
                      >{`GRSOPECTRUM `}</span>
                      <span className={styles.a}>l</span>
                      <span className={styles.grsopectrum}>TD</span>
                    </span>
                  </div>
                </div>
                <div className={styles.nowWereParent1}>
                  <div className={styles.nowWere8}>EAST LEGON office</div>
                  <div className={styles.nowWereParent2}>
                    <div className={styles.nowWere9}>No 24 Maseru St</div>
                    <div className={styles.nowWere9}>East Legon,</div>
                    <div className={styles.nowWere9}>Accra - ghana</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.nowWereParent3}>
                <div className={styles.nowWere12}>BSL HEAD OFFICE</div>
                <div className={styles.nowWere13}>No 24 Botwe</div>
                <div className={styles.nowWere13}>Dzorwulu - Accra</div>
              </div>
              <div className={styles.nowWereParent4}>
                <div className={styles.nowWere12}>TAMALE office</div>
                <div className={styles.nowWereParent5}>
                  <div className={styles.nowWere16}>Tamale.</div>
                  <div className={styles.nowWere17}>16 Dagomba Road,</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <button className={styles.vectorParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/arrow-104.svg"
                onClick={onArrowIconClick}
              />
              <div className={styles.nowWere18} onClick={onNowWereText4Click}>
                GET DIRECTION
              </div>
            </button>
            <div className={styles.nowWereParent6}>
              <div className={styles.nowWere19}>
                <div className={styles.nowWere20}>PHONE</div>
              </div>
              <div className={styles.nowWere21} onClick={onNowWereText5Click}>
                +233(0) 593 808 064
              </div>
            </div>
            <div className={styles.nowWereParent7}>
              <div className={styles.nowWere22}>
                <div className={styles.nowWere23}>EMAIL</div>
              </div>
              <div className={styles.nowWere24}>
                <div className={styles.nowWere25}>customercare@bsl.com.gh</div>
              </div>
            </div>
            <div className={styles.nowWereParent8}>
              <div className={styles.nowWere26}>
                <div className={styles.nowWere27}>{`FOLLOW US `}</div>
              </div>
              <div className={styles.instagramParent}>
                <div
                  className={styles.instagram}
                  onClick={onInstagramContainerClick}
                >
                  <img className={styles.groupIcon} alt="" src="/group7.svg" />
                </div>
                <div className={styles.facebook}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector9.svg"
                  />
                </div>
                <div className={styles.twitter}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector17.svg"
                  />
                </div>
                <div
                  className={styles.linkedinAgrospectrem}
                  onClick={onLinkedinAgrospectremContainerClick}
                >
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.frameParent5}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.nowWereParent9}>
          <div className={styles.nowWere28}>
            No 24 Maseru Street,East Legon -Accra
          </div>
          <div className={styles.nowWere29}>
            © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOOTERCOMPONENT11;
