import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./blog-page2.module.css";

const BlogPage2: NextPage = () => {
  const router = useRouter();
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);
  const [isDrwawerMenu1Open, setDrwawerMenu1Open] = useState(false);

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

  const onClipPathGroup3Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup12Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup22Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
  }, []);

  const onContactUsContainer1Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsText2Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onClipPathGroup4Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup13Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup23Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const openDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(true);
  }, []);

  const closeDrwawerMenu1 = useCallback(() => {
    setDrwawerMenu1Open(false);
  }, []);

  const onContactUsContainer2Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsText3Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onClipPathGroup5Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup14Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup24Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

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
    router.push("/blog-page3");
  }, [router]);

  const onPath2IconClick = useCallback(() => {
    router.push("/blog-page3");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/blog-page1");
  }, [router]);

  const onPath2Icon2Click = useCallback(() => {
    router.push("/blog-page1");
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

  return (
    <>
      <main className={styles.blogpage2} id={`7projects&partermain`}>
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
                      src="/clip-path-group70.svg"
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group79@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group80@2x.png"
                      onClick={onClipPathGroup2Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-93916.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-129@2x.png"
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
                    src="/logo30@2x.png"
                  />
                </div>
              </div>
              <nav className={styles.rightnavlink}>
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
                    src="/line-125@2x.png"
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
                  className={styles.clientspartners}
                  onClick={onClientspartnersClick}
                >
                  <div
                    className={styles.linkPricing}
                    onClick={onLinkPricing3Click}
                  >{`Clients & Partners`}</div>
                </button>
                <button className={styles.media} onClick={onMediaClick}>
                  <div
                    className={styles.linkPricing3}
                    onClick={onLinkPricing4Click}
                  >
                    Media
                  </div>
                  <img
                    className={styles.mediaChild}
                    alt=""
                    src="/line-123@2x.png"
                  />
                </button>
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
                <div className={styles.handburger}>
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerItem} />
                  <div className={styles.handburgerInner} />
                </div>
              </nav>
            </div>
          </nav>
          <nav className={styles.nav} id="navBar">
            <div className={styles.logorightnavlink1}>
              <div className={styles.logoasset1}>
                <button className={styles.arrowframe1}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group40.svg"
                      onClick={onClipPathGroup3Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group81@2x.png"
                      onClick={onClipPathGroup12Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group82@2x.png"
                      onClick={onClipPathGroup22Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-93917.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-130@2x.png"
                  />
                </button>
                <div className={styles.lgoframe1}>
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo31@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rightnavlink1}>
                <div className={styles.handburger1} onClick={openDrwawerMenu}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.handburgerChild2} />
                </div>
                <button
                  className={styles.contactusContainer1}
                  onClick={onContactUsContainer1Click}
                >
                  <div
                    className={styles.contactUs1}
                    onClick={onContactUsText2Click}
                  >
                    Contact Us
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <nav className={styles.nav1} id="navBar">
            <div className={styles.logorightnavlink1}>
              <div className={styles.logoasset1}>
                <button className={styles.arrowframe2}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group40.svg"
                      onClick={onClipPathGroup4Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group81@2x.png"
                      onClick={onClipPathGroup13Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group82@2x.png"
                      onClick={onClipPathGroup23Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-93917.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-130@2x.png"
                  />
                </button>
                <div className={styles.lgoframe1}>
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo31@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rightnavlink1}>
                <div className={styles.handburger1} onClick={openDrwawerMenu1}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.handburgerChild2} />
                </div>
                <button
                  className={styles.contactusContainer1}
                  onClick={onContactUsContainer2Click}
                >
                  <div
                    className={styles.contactUs1}
                    onClick={onContactUsText3Click}
                  >
                    Contact Us
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <nav className={styles.nav2} id="navBar">
            <div className={styles.logorightnavlink1}>
              <div className={styles.logoasset1}>
                <button className={styles.arrowframe3}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group40.svg"
                      onClick={onClipPathGroup5Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group83@2x.png"
                      onClick={onClipPathGroup14Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group84@2x.png"
                      onClick={onClipPathGroup24Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-93918.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-131@2x.png"
                  />
                </button>
                <div className={styles.lgoframe1}>
                  <img
                    className={styles.logoIcon3}
                    id="logo"
                    alt=""
                    src="/logo32@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.rightnavlinkIcon}
                alt=""
                src="/rightnavlink9@2x.png"
              />
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
          <div className={styles.enhancingAgriculturalResilieParent}>
            <div className={styles.enhancingAgriculturalResilieContainer}>
              <span className={styles.e}>E</span>
              <span className={styles.nhancing}>{`NHANCING `}</span>
              <span className={styles.e}>A</span>
              <span
                className={styles.nhancing}
              >{`GRICULTURAL RESILIENCE THROUGH `}</span>
              <span className={styles.e}>I</span>
              <span className={styles.nhancing}>
                GNITIA’S CLIMATE MONITORING.
              </span>
            </div>
            <div className={styles.november232023Wrapper}>
              <div className={styles.november232023}>November 23, 2023</div>
            </div>
          </div>
          <div className={styles.image1Wrapper}>
            <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
          </div>
          <div className={styles.agrospectrumLimitedAContainer}>
            <p className={styles.agrospectrumLimitedA}>
              Agrospectrum Limited, a platform solution that aggregates data of
              all the Agric Value chain actors in Ghana is partnering with
              Ignitia to aid farmers with weather information.
            </p>
            <p className={styles.agrospectrumLimitedA}>
              In an era of rising climate concerns, the Agricultural sector is
              likely to suffer most as climate change adversely affects its
              output. This strategic partnership is aimed at ensuring farmers
              are armed with enough information that allows them to cope and
              survive in the harshest of climate situations
            </p>
            <p className={styles.agrospectrumLimitedA}>&nbsp;</p>
            <p className={styles.agrospectrumLimitedA}>&nbsp;</p>
            <p className={styles.agrospectrumLimitedA}>&nbsp;</p>
            <p className={styles.agrospectrumLimitedA}>
              Ignitia, is a tropical weather forecasting company, and its
              partners as part of efforts to address the climate crisis in the
              continent have introduced a climate intelligence solution to give
              accurate weather forecasts ranging from 48-hour rainfall forecasts
              to monthly and seasonal predictions.
            </p>
            <p className={styles.agrospectrumLimitedA}>&nbsp;</p>
            <p className={styles.agrospectrumLimitedA}>
              The partnership is expected to enhance Agricultural Resilience
              through Climate Monitoring with the aid of Data Analytics and
              educate the farmers on how digitalization connects them to global
              opportunities.
            </p>
            <p className={styles.agrospectrumLimitedA}>
              Ignitia is a third-party agency that provides climatic
              information, hence Agrospectrum is partnering with them to provide
              that service as part of our solutions.
            </p>
            <p className={styles.agrospectrumLimitedA}>&nbsp;</p>
            <p className={styles.agrospectrumLimitedA}>
              {" "}
              At Agrospectrum, climate technology is not part of our mandate,
              but it's a good mix to infuse in our solutions and so in order not
              to divert, we are teaming up with an entity like Ignitia with such
              capacity.
            </p>
            <p className={styles.agrospectrumLimitedA}>&nbsp;</p>
            <p className={styles.agrospectrumLimitedA}>
              {" "}
              Additionally, we will also introduce an Interactive Voice Response
              (IVR) that currently runs in nine Ghanaian local languages, French
              and English with plans to expand.
            </p>
            <p className={styles.agrospectrumLimitedA}>&nbsp;</p>
            <p
              className={styles.agrospectrumLimitedA}
            >{`This technology will allow telephone users to interact with a computer-operated telephone system through voice and Dual Tone Multi Frequency (DTMF) tones that would route them to our call centers. It can also be used for various purposes, such as customer service, healthcare, education, and finance. `}</p>
            <p className={styles.agrospectrumLimitedA}>&nbsp;</p>
            <p className={styles.agrospectrumLimitedA}>
              As farmers lack access to the requisite information; It is the
              expectation of Agrospectrum that, this integration would go a long
              way to impact lives and economy. Especially, that of farmers while
              bridging the wide information gap in the sector.
            </p>
          </div>
          <div className={styles.gradientmsgWrapper}>
            <div className={styles.gradientmsg}>
              <img
                className={styles.gradientmsgChild}
                alt=""
                src="/group-20612@2x.png"
              />
              <div className={styles.weSupportAgribusinessIndustParent}>
                <b
                  className={styles.weSupportAgribusinessContainer}
                  data-animate-on-scroll
                >
                  <p className={styles.agrospectrumLimitedA}>
                    We support Agribusiness Industry
                  </p>
                  <p className={styles.agrospectrumLimitedA}>
                    To Utilize modern Equipments
                  </p>
                  <p className={styles.agrospectrumLimitedA}>
                    for a Better Result.
                  </p>
                </b>
                <div
                  className={styles.vectorParent}
                  onClick={onFrameContainerClick}
                >
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/arrow-97@2x.png"
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
              <img className={styles.vectorIcon} alt="" src="/vector18.svg" />
              <img
                className={styles.path2Icon}
                alt=""
                src="/path-22.svg"
                onClick={onPath2IconClick}
              />
            </div>
            <b className={styles.faq}>
              <span className={styles.e}>n</span>
              <span className={styles.nhancing}>
                AVIGATE OUR OTHER BLOG PAGES
              </span>
            </b>
            <div className={styles.navRightsvgFill1}>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector19.svg"
                onClick={onVectorIconClick}
              />
              <img
                className={styles.path2Icon1}
                alt=""
                src="/path-23.svg"
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
                  src="/capture19@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color19@2x.png"
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
                  className={styles.download6Icon}
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
                  src="/download-540@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-5411@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture20@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color20@2x.png"
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
                  className={styles.download6Icon}
                  alt=""
                  src="/download-6211@2x.png"
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
                      className={styles.agrospectrumLimitedA}
                    >{`Transform your agricultural practices and `}</p>
                    <p className={styles.agrospectrumLimitedA}>
                      <span className={styles.cultivateSuccessWith}>
                        cultivate success with
                      </span>
                      <b className={styles.cultivateSuccessWith}>
                        {" "}
                        industry's best
                      </b>
                      <span>—empowering farmers, streamlining operations,</span>
                    </p>
                    <p className={styles.agrospectrumLimitedA}>
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
                          src="/line-1201@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.nowWereParent1}>
                      <div className={styles.nowWere7}>{`CONTACT US `}</div>
                      <div className={styles.nowWere8}>Agrospectrum Ltd.</div>
                    </div>
                    <div className={styles.nowWereParent2}>
                      <div className={styles.nowWere9}>EAST LEGON office</div>
                      <div className={styles.nowWereParent3}>
                        <div className={styles.nowWere10}>No 24 Maseru St</div>
                        <div className={styles.nowWere10}>East Legon,</div>
                        <div className={styles.nowWere10}>Accra - ghana</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.nowWereParent4}>
                    <div className={styles.nowWere9}>BSL HEAD OFFICE</div>
                    <div className={styles.nowWere14}>No 24 Botwe</div>
                    <div className={styles.nowWere14}>Dzorwulu - Accra</div>
                  </div>
                  <div className={styles.nowWereParent5}>
                    <div className={styles.nowWere9}>TAMALE office</div>
                    <div className={styles.nowWereParent6}>
                      <div className={styles.nowWere17}>Tamale.</div>
                      <div className={styles.nowWere18}>16 Dagomba Road,</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <button className={styles.vectorGroup}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/arrow-104.svg"
                    onClick={onArrowIconClick}
                  />
                  <div
                    className={styles.nowWere19}
                    onClick={onNowWereText4Click}
                  >
                    GET DIRECTION
                  </div>
                </button>
                <div className={styles.nowWereParent7}>
                  <div className={styles.nowWere20}>
                    <div className={styles.nowWere21}>PHONE</div>
                  </div>
                  <div className={styles.nowWere22}>+233(0) 593 808 064</div>
                </div>
                <div className={styles.nowWereParent8}>
                  <div className={styles.nowWere23}>
                    <div className={styles.nowWere24}>EMAIL</div>
                  </div>
                  <div className={styles.nowWere25}>
                    <div className={styles.nowWere26}>
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
                <div className={styles.nowWereParent9}>
                  <div className={styles.nowWere27}>
                    <div className={styles.nowWere28}>{`FOLLOW US `}</div>
                  </div>
                  <div className={styles.instagramParent}>
                    <div className={styles.instagram}>
                      <img
                        className={styles.groupIcon1}
                        alt=""
                        src="/group7.svg"
                      />
                    </div>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector9.svg"
                      />
                    </div>
                    <div className={styles.frame}>
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector17.svg"
                      />
                    </div>
                    <div className={styles.vectorContainer}>
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
          <div className={styles.frameParent5}>
            <div className={styles.lineWrapper}>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.nowWereParent10}>
              <div className={styles.nowWere29}>
                No 24 Maseru Street,East Legon -Accra
              </div>
              <div className={styles.nowWere30}>
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
      {isDrwawerMenu1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu1}
        >
          <DrwawerMenu onClose={closeDrwawerMenu1} />
        </PortalDrawer>
      )}
    </>
  );
};

export default BlogPage2;
