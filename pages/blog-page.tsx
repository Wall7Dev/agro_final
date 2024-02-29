import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./blog-page.module.css";

const BlogPage: NextPage = () => {
  const router = useRouter();
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);

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

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
  }, []);

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

  const onFrameContainerClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onNavRightsvgFillContainerClick = useCallback(() => {
    router.push("/blog-page1");
  }, [router]);

  const onPath2IconClick = useCallback(() => {
    router.push("/blog-page1");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/blog-page3");
  }, [router]);

  const onPath2Icon2Click = useCallback(() => {
    router.push("/blog-page3");
  }, [router]);

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
    <>
      <main className={styles.mayandlotte} id={`7projects&partermain`}>
        <header className={styles.allnavs}>
          <nav className={styles.navdesktop} id="navBar">
            <div className={styles.logorightnavlink}>
              <div className={styles.logoasset}>
                <button className={styles.arrowframe}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group3.svg"
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group19@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group20@2x.png"
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
                    src="/images-2-18@2x.png"
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
                    src="/logo9@2x.png"
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
                      src="/line-121@2x.png"
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
                  <button className={styles.media} onClick={onMediaClick}>
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricing4Click}
                    >
                      Media
                    </div>
                    <img
                      className={styles.mediaChild}
                      alt=""
                      src="/line-11@2x.png"
                    />
                  </button>
                </div>
                <div className={styles.handburger} onClick={openDrwawerMenu}>
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerChild} />
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
        <section className={styles.section6partners}>
          <div className={styles.frameParent}>
            <div className={styles.hotWrapper}>
              <div className={styles.hot}>Hot</div>
            </div>
            <div className={styles.hotWrapper}>
              <div className={styles.hot}>Blogs</div>
            </div>
            <div className={styles.hotWrapper}>
              <div className={styles.hot}>News</div>
            </div>
          </div>
          <div className={styles.mayAndLotteInternationalPaParent}>
            <div className={styles.mayAndLotteContainer}>
              <span className={styles.m}>M</span>
              <span className={styles.ayAnd}>AY AND</span>
              <span className={styles.m}> L</span>
              <span
                className={styles.ayAnd}
              >{`OTTE INTERNATIONAL PARTNERS `}</span>
              <span className={styles.m}>A</span>
              <span className={styles.ayAnd}>GROSPECTRUM.</span>
            </div>
            <div className={styles.december202023Wrapper}>
              <div className={styles.december202023}>December 20, 2023</div>
            </div>
          </div>
          <div className={styles.download6Wrapper}>
            <img
              className={styles.download6Icon}
              alt=""
              src="/download-619@2x.png"
            />
          </div>
          <div className={styles.mayAndLotteContainer1}>
            <p className={styles.mayAndLotte}>
              May and Lotte International; a Ghanaian agricultural company has
              partnered with agritech industry leader, Agrospectrum Limited to
              impact the country’s agricultural industry with its Input credit
              and Aggregation programs respectively in Northern Ghana.
            </p>
            <p
              className={styles.theProgramsThat}
            >{`The programs that are primarily been run in the five Northern regions aim to use Agrospectrum Limited’s groundbreaking solutions to digitalize May and Lotte’s business functions in the bid to promote inclusivity in terms of access to finances, inputs, and markets.  The Input-credit program which is currently in the collection stage began earlier in the year at the start of the farming season leveraging `}</p>
            <p className={styles.mayAndLotte}>&nbsp;</p>
            <p className={styles.theProgramsThat}>
              Agrospectrum Limited’s technology to provide farmers with inputs,
              monitoring services, and insights into their expected returns and
              payment terms. Currently, at the collection stage, Agrospectrum
              limited is facilitating the collection of the commodities and
              ensuring the quality by using an Internet of Things (IoT) system
              to ensure that the commodities collected meet the weight and
              moisture content requirements of the client. A total of 174
              farmers benefited from this years input-credit program.
            </p>
            <p className={styles.mayAndLotte}></p>
            <p
              className={styles.theProgramsThat}
            >{`In the ongoing aggregation program also being run by the former, Agrospectrum Limited’s cutting–edge solution is employed to enact a seamless framework in the aggregation procedure. Features of the Aggregation solution like the special tag system attached to the bags and the direct payments into farmers’ mobile money wallets for the various networks are de-risking the agricultural processes from farm to table.  `}</p>
            <p className={styles.mayAndLotte}>&nbsp;</p>
            <p className={styles.mayAndLotte}>
              The Internet of Things (IoT) system is also employed here to
              ensure that both farmers and aggregators get absolute benefits.
              Agrospectrum limited’s solution intelligently pegs the market rate
              of the commodity to the weight of the bags being collected to
              sanitize the aggregation process and ensure equity.
            </p>
            <p className={styles.mayAndLotte}></p>
            <p className={styles.mayAndLotte}>About Agrospectrum Limited:</p>
            <p
              className={styles.mayAndLotte}
            >{`Agrospectrum Limited is not only a facilitator of transactions; it is a driving force for positive change. The company’s commitment to transforming the agricultural sector is evident in its holistic approach to promoting sustainable and climate-smart agriculture. `}</p>
            <p className={styles.mayAndLotte}>&nbsp;</p>
            <p className={styles.mayAndLotte}>
              Agrospectrum Limited guarantees that its services reach a broad
              audience by utilizing various communication methods such as SMS
              and voice communications.
            </p>
            <p className={styles.mayAndLotte}>
              As a game-changer business entity, Agrospectrum continues to
              introduce new technological solutions that can compete on a global
              scale and is dedicated to producing innovative solutions that will
              shift paradigms in the Agricultural industry in sub-Saharan
              Africa.
            </p>
            <p className={styles.mayAndLotte}></p>
            <p className={styles.mayAndLotte}>Media Contact:</p>
            <p className={styles.theProgramsThat}>
              <b>Audrey A. Oduro</b>
            </p>
            <p className={styles.mayAndLotte}>a.oduro@bsl.com.gh</p>
          </div>
          <div className={styles.gradientmsgWrapper}>
            <div className={styles.gradientmsg}>
              <img
                className={styles.gradientmsgChild}
                alt=""
                src="/group-2065@2x.png"
              />
              <div className={styles.weSupportAgribusinessIndustParent}>
                <b
                  className={styles.weSupportAgribusinessContainer}
                  data-animate-on-scroll
                >
                  <p className={styles.mayAndLotte}>
                    We support Agribusiness Industry
                  </p>
                  <p className={styles.mayAndLotte}>
                    To Utilize modern Equipments
                  </p>
                  <p className={styles.mayAndLotte}>for a Better Result.</p>
                </b>
                <div
                  className={styles.vectorParent}
                  onClick={onFrameContainerClick}
                >
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/arrow-95@2x.png"
                  />
                  <div className={styles.viewProducts}>view produCts</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.arrow}>
            <div
              className={styles.navRightsvgFill}
              onClick={onNavRightsvgFillContainerClick}
            >
              <img className={styles.vectorIcon} alt="" src="/vector221.svg" />
              <img
                className={styles.path2Icon}
                alt=""
                src="/path-25.svg"
                onClick={onPath2IconClick}
              />
            </div>
            <b className={styles.faq}>
              <span className={styles.m}>n</span>
              <span className={styles.ayAnd}>AVIGATE OUR OTHER BLOG PAGES</span>
            </b>
            <div className={styles.navRightsvgFill1}>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector21.svg"
                onClick={onVectorIconClick}
              />
              <img
                className={styles.path2Icon1}
                alt=""
                src="/path-26.svg"
                onClick={onPath2Icon2Click}
              />
            </div>
          </div>
        </section>
        <div className={styles.footerComponent}>
          <div className={styles.component1}>
            <div className={styles.frameGroup}>
              <div className={styles.download5Parent}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-536@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-537@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture19@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color7@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-319@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images18@2x.png"
                />
                <img
                  className={styles.download6Icon1}
                  alt=""
                  src="/download-620@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-119@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download19@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-119@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-219@2x.png"
                />
              </div>
              <div className={styles.download5Group}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-538@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-539@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture20@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color8@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-320@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images19@2x.png"
                />
                <img
                  className={styles.download6Icon1}
                  alt=""
                  src="/download-621@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-120@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download20@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-120@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-220@2x.png"
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
                      className={styles.mayAndLotte}
                    >{`Transform your agricultural practices and `}</p>
                    <p className={styles.mayAndLotte}>
                      <span className={styles.cultivateSuccessWith}>
                        cultivate success with
                      </span>
                      <b className={styles.cultivateSuccessWith}>
                        {" "}
                        industry's best
                      </b>
                      <span>—empowering farmers, streamlining operations,</span>
                    </p>
                    <p className={styles.mayAndLotte}>
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
              <div className={styles.frameContainer}>
                <div className={styles.frameParent}>
                  <div className={styles.nowWereParent}>
                    <div className={styles.nowWere2}>business</div>
                    <div className={styles.frameParent1}>
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
                          src="/line-122@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <div className={styles.nowWereWrapper3}>
                        <div className={styles.nowWere7}>{`CONTACT US `}</div>
                      </div>
                      <div className={styles.agrsopectrumLtd}>
                        <span className={styles.agrsopectrumLtdTxtContainer}>
                          <span className={styles.m}>A</span>
                          <span className={styles.ayAnd}>{`GRSOPECTRUM `}</span>
                          <span className={styles.m}>l</span>
                          <span className={styles.ayAnd}>TD</span>
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
                <div className={styles.frameParent4}>
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
              <div className={styles.frameParent5}>
                <button className={styles.vectorGroup}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/arrow-104.svg"
                    onClick={onArrowIconClick}
                  />
                  <div
                    className={styles.nowWere18}
                    onClick={onNowWereText4Click}
                  >
                    GET DIRECTION
                  </div>
                </button>
                <div className={styles.nowWereParent6}>
                  <div className={styles.nowWere19}>
                    <div className={styles.nowWere20}>PHONE</div>
                  </div>
                  <div
                    className={styles.nowWere21}
                    onClick={onNowWereText5Click}
                  >
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
                        src="/group7.svg"
                      />
                    </div>
                    <div className={styles.facebook}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector9.svg"
                      />
                    </div>
                    <div className={styles.twitter}>
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector17.svg"
                      />
                    </div>
                    <div
                      className={styles.linkedinAgrospectrem}
                      onClick={onLinkedinAgrospectremContainerClick}
                    >
                      <img
                        className={styles.vectorIcon4}
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className={styles.download6Wrapper}>
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
      {isDrwawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu}
        >
          <DrwawerMenu onClose={closeDrwawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default BlogPage;
