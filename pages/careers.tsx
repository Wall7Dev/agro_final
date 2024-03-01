import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./careers.module.css";

const Careers: NextPage = () => {
  const router = useRouter();

  const onClipPathGroupClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup2Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const onLgoFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHomeCContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAboutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAbout2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onLinkPricingClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProducAndServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onLinkPricing2Click = useCallback(() => {
    // Please sync "product_services" to the project
  }, []);

  const onClientspartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onLinkPricing3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onLinkPricing4Click = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

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

  const onFrameButton1Click = useCallback(() => {
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
    <main className={styles.careers} id="careerMain">
      <header className={styles.allnavs}>
        <nav className={styles.navdesktop} id="navBar">
          <div className={styles.logorightnavlink}>
            <div className={styles.logoasset}>
              <button className={styles.arrowframe}>
                <div className={styles.oursubsidiarylogos} id="ourSubsidiaries">
                  <img
                    className={styles.clipPathGroup}
                    alt=""
                    src="/clip-path-group3.svg"
                    onClick={onClipPathGroupClick}
                  />
                  <img
                    className={styles.clipPathGroup1}
                    alt=""
                    src="/clip-path-group45@2x.png"
                    onClick={onClipPathGroup1Click}
                  />
                  <img
                    className={styles.clipPathGroup2}
                    alt=""
                    src="/clip-path-group46@2x.png"
                    onClick={onClipPathGroup2Click}
                  />
                  <img
                    className={styles.oursubsidiarylogosChild}
                    alt=""
                    src="/group-93911.svg"
                  />
                </div>
                <img
                  className={styles.images21}
                  alt=""
                  src="/images-2-116@2x.png"
                />
              </button>
              <div
                className={styles.lgoframe}
                onClick={onLgoFrameContainerClick}
              >
                <img
                  className={styles.logoIcon}
                  id="logo"
                  alt=""
                  src="/logo16@2x.png"
                />
              </div>
            </div>
            <nav className={styles.rightnavlink}>
              <div className={styles.homecParent}>
                <div className={styles.homec} onClick={onHomeCContainerClick}>
                  <button
                    className={styles.linkAbout}
                    onClick={onLinkAboutClick}
                  >
                    <div
                      className={styles.linkAbout1}
                      onClick={onLinkAbout2Click}
                    >
                      Home
                    </div>
                  </button>
                  <img
                    className={styles.homecChild}
                    alt=""
                    src="/line-18@2x.png"
                  />
                </div>
                <button className={styles.aboutus} onClick={onAboutUsClick}>
                  <div
                    className={styles.linkPricing}
                    onClick={onLinkPricingClick}
                  >
                    About Us
                  </div>
                </button>
                <button
                  className={styles.producAndServices}
                  onClick={onProducAndServicesClick}
                >
                  <div
                    className={styles.linkPricing}
                    onClick={onLinkPricing2Click}
                  >{`Product & Services`}</div>
                </button>
                <button
                  className={styles.aboutus}
                  onClick={onClientspartnersClick}
                >
                  <div
                    className={styles.linkPricing}
                    onClick={onLinkPricing3Click}
                  >{`Clients & Partners`}</div>
                </button>
                <button className={styles.aboutus} onClick={onMediaClick}>
                  <div
                    className={styles.linkPricing}
                    onClick={onLinkPricing4Click}
                  >
                    Media
                  </div>
                </button>
              </div>
              <div className={styles.handburger}>
                <div className={styles.handburgerChild} />
                <div className={styles.handburgerItem} />
                <div className={styles.handburgerInner} />
              </div>
              <button
                className={styles.contactusContainer}
                onClick={onContactUsContainerClick}
              >
                <div
                  className={styles.contactUs}
                  onClick={onContactUsTextClick}
                >
                  Contact Us
                </div>
              </button>
            </nav>
          </div>
        </nav>
      </header>
      <header className={styles.careersInner}>
        <div className={styles.careersParent}>
          <div className={styles.careers1} data-animate-on-scroll>
            <h1 className={styles.careers2} data-animate-on-scroll>
              Careers
            </h1>
          </div>
          <div className={styles.rec}>
            <div className={styles.recChild} />
          </div>
        </div>
      </header>
      <section className={styles.allMakeAnEnquiry}>
        <div className={styles.desktopMakeEnquiry}>
          <section className={styles.frameParent}>
            <div className={styles.workWithUsWrapper}>
              <h1 className={styles.workWithUsContainer}>
                <span className={styles.workWith}>{`Work with `}</span>
                <span className={styles.us}>Us</span>
              </h1>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.careersWrapper}>
                <h5 className={styles.careers3} data-animate-on-scroll>
                  CAREERS
                </h5>
              </div>
              <p
                className={styles.ourInnovativeGroupBelievesWrapper}
                data-animate-on-scroll
              >
                <div className={styles.ourInnovativeGroup}>
                  Our innovative group believes in the value and talent in team
                  work. Join the ever growing team of creative minds and
                  talents. Browse through our available positions or send an
                  open application by attaching your CV
                </div>
              </p>
            </div>
          </section>
          <div className={styles.contactForm}>
            <div className={styles.enquiryTypeWrapper}>
              <div className={styles.enquiryType}>Enquiry type</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.generalWrapper}>
                <div className={styles.general}>General</div>
              </div>
              <div className={styles.business}>
                <div className={styles.general}>Business</div>
              </div>
              <div className={styles.generalWrapper}>
                <div className={styles.general}>Careers</div>
              </div>
            </div>
            <input
              className={styles.contactFormChild}
              placeholder="Name"
              type="text"
            />
            <input
              className={styles.contactFormChild}
              placeholder="Phone"
              type="text"
            />
            <input
              className={styles.contactFormChild}
              placeholder="Email"
              type="text"
            />
            <div className={styles.frameDiv}>
              <input
                className={styles.frameChild}
                placeholder="Choose file"
                type="text"
              />
              <input
                className={styles.noFileChosen}
                placeholder="No file chosen"
                type="text"
              />
            </div>
            <input
              className={styles.frameInput}
              placeholder="Type your message here"
              type="text"
            />
            <div className={styles.contactFormInner1}>
              <button className={styles.sendWrapper}>
                <div className={styles.send}>send</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.footerComponent}>
        <div className={styles.component1}>
          <div className={styles.frameParent1}>
            <div className={styles.download5Parent}>
              <img
                className={styles.download5Icon}
                alt=""
                src="/download-5221@2x.png"
              />
              <img
                className={styles.download5Icon1}
                alt=""
                src="/download-5231@2x.png"
              />
              <img
                className={styles.captureIcon}
                alt=""
                src="/capture111@2x.png"
              />
              <img
                className={styles.mofaColorIcon}
                alt=""
                src="/mofa-color111@2x.png"
              />
              <img
                className={styles.download3Icon}
                alt=""
                src="/download-3111@2x.png"
              />
              <img
                className={styles.imagesIcon}
                alt=""
                src="/images101@2x.png"
              />
              <img
                className={styles.download6Icon}
                alt=""
                src="/download-6121@2x.png"
              />
              <img
                className={styles.download1Icon}
                alt=""
                src="/download-1111@2x.png"
              />
              <img
                className={styles.downloadIcon}
                alt=""
                src="/download111@2x.png"
              />
              <img
                className={styles.images1Icon}
                alt=""
                src="/images-1111@2x.png"
              />
              <img
                className={styles.download2Icon}
                alt=""
                src="/download-2111@2x.png"
              />
            </div>
            <div className={styles.download5Group}>
              <img
                className={styles.download5Icon}
                alt=""
                src="/download-5241@2x.png"
              />
              <img
                className={styles.download5Icon1}
                alt=""
                src="/download-5251@2x.png"
              />
              <img
                className={styles.captureIcon}
                alt=""
                src="/capture121@2x.png"
              />
              <img
                className={styles.mofaColorIcon}
                alt=""
                src="/mofa-color121@2x.png"
              />
              <img
                className={styles.download3Icon}
                alt=""
                src="/download-3121@2x.png"
              />
              <img
                className={styles.imagesIcon}
                alt=""
                src="/images111@2x.png"
              />
              <img
                className={styles.download6Icon}
                alt=""
                src="/download-6131@2x.png"
              />
              <img
                className={styles.download1Icon}
                alt=""
                src="/download-1121@2x.png"
              />
              <img
                className={styles.downloadIcon}
                alt=""
                src="/download121@2x.png"
              />
              <img
                className={styles.images1Icon}
                alt=""
                src="/images-1121@2x.png"
              />
              <img
                className={styles.download2Icon}
                alt=""
                src="/download-2121@2x.png"
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
              <div className={styles.careersWrapper}>
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
                onClick={onFrameButton1Click}
              >
                <div className={styles.getInTouch}>GET IN TOUCH</div>
              </button>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.nowWereParent}>
                  <div className={styles.nowWere2}>business</div>
                  <div className={styles.frameParent4}>
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
                        className={styles.frameItem}
                        alt=""
                        src="/line-113@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.nowWereWrapper3}>
                      <div className={styles.nowWere7}>{`CONTACT US `}</div>
                    </div>
                    <div className={styles.agrsopectrumLtd}>
                      <span className={styles.a}>A</span>
                      <span
                        className={styles.grsopectrum}
                      >{`GRSOPECTRUM `}</span>
                      <span className={styles.a}>l</span>
                      <span className={styles.grsopectrum}>TD</span>
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
              <div className={styles.frameParent7}>
                <div className={styles.nowWereParent3}>
                  <div className={styles.nowWere8}>BSL HEAD OFFICE</div>
                  <div className={styles.nowWere13}>No 24 Botwe</div>
                  <div className={styles.nowWere13}>Dzorwulu - Accra</div>
                </div>
                <div className={styles.nowWereParent4}>
                  <div className={styles.nowWere8}>TAMALE office</div>
                  <div className={styles.nowWereParent5}>
                    <div className={styles.nowWere16}>Tamale.</div>
                    <div className={styles.nowWere17}>16 Dagomba Road,</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent8}>
              <button className={styles.vectorParent}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/arrow-10.svg"
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
                  <div className={styles.nowWere25}>
                    customercare@bsl.com.gh
                  </div>
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
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group5.svg"
                    />
                  </div>
                  <div className={styles.facebook}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector12.svg"
                    />
                  </div>
                  <div className={styles.twitter}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector13.svg"
                    />
                  </div>
                  <div
                    className={styles.linkedinAgrospectrem}
                    onClick={onLinkedinAgrospectremContainerClick}
                  >
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector14.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className={styles.contactFormInner1}>
          <div className={styles.lineWrapper}>
            <div className={styles.lineDiv} />
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
    </main>
  );
};

export default Careers;
