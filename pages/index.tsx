import type { NextPage } from "next";
import Head from "next/head";
import { useState, useCallback, useEffect } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import DesktopSection from "../components/desktop-section";
import DesktopStatsSec from "../components/desktop-stats-sec";
import ProductAndServicesSec from "../components/product-and-services-sec";
import ParentCaurosol from "../components/parent-caurosol";
import SearchBar from "../components/search-bar";
import Frameinstagram from "../components/frameinstagram";
import FOOTERCOMPONENT from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t";
import styles from "./index.module.css";

const Homepage: NextPage = () => {
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
    const anchor = document.querySelector("[data-scroll-to='section5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLeftGroupIcon3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLeftGroupIcon11Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLeftGroupIcon19Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onArrowIconClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsTextClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  return (
    <>
      <div className={styles.homepage}>
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
                      src="/clip-path-group@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group1@2x.png"
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
                    src="/images-2-12@2x.png"
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
                    src="/logo10@2x.png"
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
                      src="/line-1@2x.png"
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
        <section className={styles.allhero}>
          <section className={styles.desktop}>
            <b
              className={styles.digitalization}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.frameParent} data-animate-on-scroll>
              <div className={styles.platformWrapper}>
                <b className={styles.platform}>Platform</b>
              </div>
              <b className={styles.forTheFuture}>{`for the  future `}</b>
            </div>
            <div
              className={styles.weProvideAnEcosystemForAlWrapper}
              data-animate-on-scroll
            >
              <div className={styles.weProvideAn}>
                We provide an ecosystem for all the players in the agricultural
                supply chain to function with ease. Agrospectrum Limited is a
                leading force in the sector dedicated to transforming
                traditional agricultural paradigms.
              </div>
            </div>
            <div className={styles.pageNumbers} data-animate-on-scroll>
              <div className={styles.paginations}>
                <Box className={styles.wrapper} sx={{ width: 50.9 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild}
                  alt=""
                  src="/group-188.svg"
                />
                <img
                  className={styles.paginationsItem}
                  alt=""
                  src="/group-189.svg"
                />
              </div>
              <div className={styles.pageNumbersInner}>
                <div className={styles.parent}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer}>
              <img
                className={styles.scrooldowncontainerChild}
                alt=""
                src="/frame-7.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section}>
            <b
              className={styles.digitalization1}
              data-animate-on-scroll
            >{`Digitalization `}</b>
            <div className={styles.frameGroup} data-animate-on-scroll>
              <div className={styles.platformContainer}>
                <b className={styles.platform1}>Platform</b>
              </div>
              <b className={styles.forTheFuture1}>{`for the  future `}</b>
            </div>
            <div
              className={styles.agrospectrumLimitedIsALeadWrapper}
              data-animate-on-scroll
            >
              <div
                className={styles.agrospectrumLimitedIs}
              >{`Agrospectrum Limited is a leading force in the sector dedicated to transforming traditional agricultural paradigms.
We provide an ecosystem for all the players in the agricultural supply chain. `}</div>
            </div>
            <div className={styles.pageNumbers1} data-animate-on-scroll>
              <div className={styles.paginations1}>
                <Box className={styles.wrapper} sx={{ width: 12.6 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsInner}
                  alt=""
                  src="/group-1883.svg"
                />
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-1893.svg"
                />
              </div>
              <div className={styles.pageNumbersChild}>
                <div className={styles.group}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer1}>
              <img
                className={styles.scrooldowncontainerItem}
                alt=""
                src="/frame-73.svg"
                data-animate-on-scroll
              />
            </div>
          </section>
          <section className={styles.section1}>
            <b className={styles.digitalization2}>{`Digitalization `}</b>
            <div className={styles.frameContainer} data-animate-on-scroll>
              <div className={styles.platformFrame}>
                <b className={styles.platform2}>Platform</b>
              </div>
              <b className={styles.forTheFuture2}>{`for the  future `}</b>
            </div>
            <section
              className={styles.agrospectrumLimitedIsALeadContainer}
              data-animate-on-scroll
            >
              <div
                className={styles.agrospectrumLimitedIs1}
              >{`Agrospectrum Limited is a leading force in the sector dedicated to transforming traditional agricultural paradigms.
We provide an ecosystem for all the players in the agricultural supply chain. `}</div>
            </section>
            <div className={styles.pageNumbers2}>
              <div className={styles.paginations2}>
                <Box className={styles.wrapper} sx={{ width: 10.6 }}>
                  <CircularProgress />
                </Box>
                <img
                  className={styles.paginationsChild1}
                  alt=""
                  src="/group-1884.svg"
                />
                <img
                  className={styles.paginationsChild2}
                  alt=""
                  src="/group-1894.svg"
                />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameDiv}>
                  <div className={styles.div}>1</div>
                  <b className={styles.b}>3</b>
                </div>
              </div>
            </div>
            <div className={styles.scrooldowncontainer2}>
              <img
                className={styles.scrooldowncontainerInner}
                alt=""
                src="/frame-71@2x.png"
                data-animate-on-scroll
              />
            </div>
          </section>
        </section>
        <img className={styles.homepageChild} alt="" src="/ellipse-5.svg" />
        <div className={styles.component1}>
          <div className={styles.frameParent1}>
            <div className={styles.download5Parent}>
              <img
                className={styles.download5Icon}
                alt=""
                src="/download-5@2x.png"
              />
              <img
                className={styles.download5Icon1}
                alt=""
                src="/download-51@2x.png"
              />
              <img
                className={styles.captureIcon}
                alt=""
                src="/capture@2x.png"
              />
              <img
                className={styles.mofaColorIcon}
                alt=""
                src="/mofa-color@2x.png"
              />
              <img
                className={styles.download3Icon}
                alt=""
                src="/download-3@2x.png"
              />
              <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
              <img
                className={styles.download6Icon}
                alt=""
                src="/download-6@2x.png"
              />
              <img
                className={styles.download1Icon}
                alt=""
                src="/download-1@2x.png"
              />
              <img
                className={styles.downloadIcon}
                alt=""
                src="/download@2x.png"
              />
              <img
                className={styles.images1Icon}
                alt=""
                src="/images-1@2x.png"
              />
              <img
                className={styles.download2Icon}
                alt=""
                src="/download-2@2x.png"
              />
            </div>
            <div className={styles.download5Group}>
              <img
                className={styles.download5Icon2}
                alt=""
                src="/download-52@2x.png"
              />
              <img
                className={styles.download5Icon3}
                alt=""
                src="/download-53@2x.png"
              />
              <img
                className={styles.captureIcon1}
                alt=""
                src="/capture1@2x.png"
              />
              <img
                className={styles.mofaColorIcon1}
                alt=""
                src="/mofa-color1@2x.png"
              />
              <img
                className={styles.download3Icon1}
                alt=""
                src="/download-31@2x.png"
              />
              <img
                className={styles.imagesIcon1}
                alt=""
                src="/images1@2x.png"
              />
              <img
                className={styles.download6Icon1}
                alt=""
                src="/download-61@2x.png"
              />
              <img
                className={styles.download1Icon1}
                alt=""
                src="/download-11@2x.png"
              />
              <img
                className={styles.downloadIcon1}
                alt=""
                src="/download1@2x.png"
              />
              <img
                className={styles.images1Icon1}
                alt=""
                src="/images-11@2x.png"
              />
              <img
                className={styles.download2Icon1}
                alt=""
                src="/download-21@2x.png"
              />
            </div>
          </div>
        </div>
        <section className={styles.whyWorkUs}>
          <DesktopSection />
        </section>
        <DesktopStatsSec />
        <section className={styles.whatweofferSection}>
          <ProductAndServicesSec />
          <div className={styles.productAndServicesSec4}>
            <b className={styles.whatWeOffer} data-animate-on-scroll>
              What we Offer
            </b>
            <div
              className={styles.productAndServicesSec4Inner}
              data-animate-on-scroll
            >
              <div className={styles.inTheHeartOfGhanasVibranWrapper}>
                <div className={styles.inTheHeartContainer}>
                  <p
                    className={styles.inTheHeart}
                  >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                  <p className={styles.inTheHeart}>
                    beacon of innovation poised to transform the industry
                    through the power of digitalization.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-941@2x.png"
                data-animate-on-scroll
              />
              <div className={styles.frameParent3}>
                <div
                  className={styles.inputCreditManagementSystemParent}
                  data-animate-on-scroll
                >
                  <b className={styles.inputCreditManagementSystem}>
                    input-Credit Management Systems
                  </b>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.inTheHeartOfGhanasVibranWrapper}>
                  <div className={styles.theInputCredit} data-animate-on-scroll>
                    the input credit management system allows VCEs and
                    Aggregators to give farmers access to input on credit and
                    pay back with produce
                  </div>
                </div>
                <div
                  className={styles.thisProductDigitalisesTheIWrapper}
                  data-animate-on-scroll
                >
                  <div className={styles.thisProductDigitalises}>
                    This product digitalises the input-credit process while
                    promoting efficiency and productivity on the part of the
                    farmer. This solution ensures easy documentation and
                    management of inputs given at the beginning of the farming
                    season; gives insights to expected returns, provides farmers
                    with agronomic advice, allows agents to monitor farmers
                    progress during the season and adherence to timely schedules
                    of farm practices. It also documents and manages the
                    recovery process by the VCEs and aggregators.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectArrowParent}>
              <div className={styles.projectArrow}>
                <img
                  className={styles.paginationsIcon}
                  alt=""
                  src="/paginations1.svg"
                />
              </div>
              <div className={styles.navigation}>
                <div className={styles.divider} />
              </div>
            </div>
            <div className={styles.inputCreditManagementSystemGroup}>
              <div className={styles.inputCreditManagementSystem1}>
                input-Credit Management Systems
              </div>
              <div className={styles.thisProductAlsoContainer}>
                <p className={styles.inTheHeart}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productAndServicesSec41}>
            <div className={styles.whatWeOffer1}>
              <b className={styles.whatWeOffer2} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.theInputCredit1} data-animate-on-scroll>
                the input credit management system allows VCEs and Aggregators
                to give farmers access to input on credit and pay back with
                produce
              </div>
              <div className={styles.whatWeOfferInner} data-animate-on-scroll>
                <div className={styles.inTheHeartOfGhanasVibranContainer}>
                  <div className={styles.inTheHeartContainer}>
                    <p
                      className={styles.inTheHeart}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.inTheHeart}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className={styles.whatWeOfferChild}
                alt=""
                src="/frame-942@2x.png"
                data-animate-on-scroll
              />
              <div
                className={styles.thisProductDigitalisesTheIContainer}
                data-animate-on-scroll
              >
                <div className={styles.thisProductDigitalises1}>
                  This product digitalises the input-credit process while
                  promoting efficiency and productivity on the part of the
                  farmer. This solution ensures easy documentation and
                  management of inputs given at the beginning of the farming
                  season; gives insights to expected returns, provides farmers
                  with agronomic advice, allows agents to monitor farmers
                  progress during the season and adherence to timely schedules
                  of farm practices. It also documents and manages the recovery
                  process by the VCEs and aggregators.
                </div>
              </div>
              <div
                className={styles.inputCreditManagementSystemContainer}
                data-animate-on-scroll
              >
                <b className={styles.inputCreditManagementSystem2}>
                  input-Credit Management Systems
                </b>
                <div className={styles.groupChild} />
              </div>
              <div className={styles.navigation1} data-animate-on-scroll>
                <div className={styles.div3}></div>
                <div className={styles.divider1} />
                <div className={styles.div4}></div>
              </div>
              <img
                className={styles.projectArrowIcon}
                alt=""
                src="/project-arrow.svg"
                data-animate-on-scroll
              />
            </div>
            <div
              className={styles.inputCreditManagementSystemParent1}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem3}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer1}>
                <p className={styles.inTheHeart}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productAndServicesSec42}>
            <div className={styles.whatWeOffer3}>
              <b className={styles.whatWeOffer4} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.frameParent4}>
                <div className={styles.inTheHeartOfGhanasVibranFrame}>
                  <div
                    className={styles.inTheHeartContainer2}
                    data-animate-on-scroll
                  >
                    <p
                      className={styles.inTheHeart}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.inTheHeart}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/frame-943@2x.png"
                    data-animate-on-scroll
                  />
                  <div className={styles.frameParent6} data-animate-on-scroll>
                    <div className={styles.inputCreditManagementSystemParent2}>
                      <b className={styles.inputCreditManagementSystem4}>
                        input-Credit Management Systems
                      </b>
                      <div className={styles.rectangleDiv} />
                    </div>
                    <div className={styles.theInputCredit2}>
                      the input credit management system allows VCEs and
                      Aggregators to give farmers access to input on credit and
                      pay back with produce
                    </div>
                    <div className={styles.thisProductDigitalisesTheIFrame}>
                      <div className={styles.thisProductDigitalises}>
                        This product digitalises the input-credit process while
                        promoting efficiency and productivity on the part of the
                        farmer. This solution ensures easy documentation and
                        management of inputs given at the beginning of the
                        farming season.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigationParent}>
              <div className={styles.navigation2}>
                <div className={styles.div5}></div>
                <div className={styles.divider2} />
                <div className={styles.div6}></div>
              </div>
              <img
                className={styles.projectArrowIcon1}
                alt=""
                src="/project-arrow1.svg"
              />
            </div>
          </div>
          <div className={styles.productAndServicesSec43}>
            <div className={styles.whatWeOffer5}>
              <b className={styles.whatWeOffer6} data-animate-on-scroll>
                What we Offer
              </b>
              <div className={styles.frameParent7}>
                <div className={styles.inTheHeartOfGhanasVibranWrapper1}>
                  <div
                    className={styles.inTheHeartContainer3}
                    data-animate-on-scroll
                  >
                    <p
                      className={styles.inTheHeart}
                    >{`In the heart of Ghana's vibrant agricultural landscape, Agrospectrum emerges as `}</p>
                    <p className={styles.inTheHeart}>
                      beacon of innovation poised to transform the industry
                      through the power of digitalization.
                    </p>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-944@2x.png"
                    data-animate-on-scroll
                  />
                  <div className={styles.frameParent9} data-animate-on-scroll>
                    <div className={styles.inputCreditManagementSystemParent3}>
                      <b className={styles.inputCreditManagementSystem5}>
                        input-Credit Management Systems
                      </b>
                      <div className={styles.frameChild1} />
                    </div>
                    <div className={styles.theInputCredit2}>
                      the input credit management system allows VCEs and
                      Aggregators to give farmers access to input on credit and
                      pay back with produce
                    </div>
                    <div className={styles.thisProductDigitalisesTheIWrapper1}>
                      <div className={styles.thisProductDigitalises}>
                        This product digitalises the input-credit process while
                        promoting efficiency and productivity on the part of the
                        farmer. This solution ensures easy documentation and
                        management of inputs given at the beginning of the
                        farming season.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigationGroup}>
              <div className={styles.navigation3}>
                <div className={styles.div7}></div>
                <div className={styles.divider3} />
                <div className={styles.div8}></div>
              </div>
              <img
                className={styles.projectArrowIcon2}
                alt=""
                src="/project-arrow2.svg"
              />
            </div>
            <div
              className={styles.inputCreditManagementSystemParent4}
              data-animate-on-scroll
            >
              <b className={styles.inputCreditManagementSystem6}>
                input-Credit Management Systems
              </b>
              <div className={styles.thisProductAlsoContainer2}>
                <p className={styles.inTheHeart}>
                  This product also determines and distinguishes farmers from
                  community aggregators by registering such value chain actors
                  and their businesses in a system.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.parentCaurosolParent}>
          <ParentCaurosol />
          <div className={styles.parentCaurosol1200}>
            <section className={styles.section2}>
              <div
                className={styles.inner}
                onClick={onFrameContainerClick}
                data-animate-on-scroll
              >
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon}
                    alt=""
                    src="/left-group8@2x.png"
                  />
                  <div className={styles.missionWrapper}>
                    <h1 className={styles.mission}>Mission</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon1}
                    alt=""
                    src="/left-group9@2x.png"
                  />
                </div>
              </div>
              <div className={styles.toExtendDigitalization}>
                To extend digitalization and innovation to agriculture through
                diverse technological channels
              </div>
            </section>
            <section className={styles.section3} data-scroll-to="section5">
              <div className={styles.child} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon}
                    alt=""
                    src="/left-group10@2x.png"
                  />
                  <div className={styles.missionWrapper}>
                    <h1 className={styles.mission}>Integrity</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon3}
                    alt=""
                    src="/left-group11@2x.png"
                    onClick={onLeftGroupIcon3Click}
                  />
                </div>
              </div>
              <div className={styles.ourCredibilityAs}>
                Our credibility as a brand is evident in the authenticity of our
                products but and also in the numerous partnerships with the
                players.
              </div>
            </section>
            <section className={styles.section4} data-scroll-to="section4">
              <div className={styles.inner1} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon}
                    alt=""
                    src="/left-group12@2x.png"
                  />
                  <div className={styles.logorightnavlink}>
                    <h1 className={styles.resourcefulness}>Resourcefulness</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon1}
                    alt=""
                    src="/left-group13@2x.png"
                  />
                </div>
              </div>
              <div className={styles.ourCredibilityAs}>
                Our credibility as a brand is evident in the authenticity of our
                products but and also in the numerous partnerships with the
                players.
              </div>
            </section>
            <section className={styles.section5}>
              <div className={styles.child} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon}
                    alt=""
                    src="/left-group14@2x.png"
                  />
                  <div className={styles.missionWrapper}>
                    <h1 className={styles.mission}>Innovation</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon1}
                    alt=""
                    src="/left-group15@2x.png"
                  />
                </div>
              </div>
              <div className={styles.weOfferAContainer}>
                <p className={styles.inTheHeart}>
                  We offer a huge arsenal of logistics and expertise to
                </p>
                <p className={styles.inTheHeart}>
                  strategize and tackle most agro challenges
                </p>
              </div>
            </section>
          </div>
          <div className={styles.parentCaurosol12001}>
            <section className={styles.section6}>
              <div
                className={styles.inner3}
                onClick={onFrameContainer2Click}
                data-animate-on-scroll
              >
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon8}
                    alt=""
                    src="/left-group16@2x.png"
                  />
                  <div className={styles.missionContainer}>
                    <h1 className={styles.mission}>Mission</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon9}
                    alt=""
                    src="/left-group17@2x.png"
                  />
                </div>
              </div>
              <div className={styles.toExtendDigitalization1}>
                To extend digitalization and innovation to agriculture through
                diverse technological channels
              </div>
            </section>
            <section className={styles.section7} data-scroll-to="section3">
              <div className={styles.inner4} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon8}
                    alt=""
                    src="/left-group18@2x.png"
                  />
                  <div className={styles.missionContainer}>
                    <h1 className={styles.mission}>Integrity</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon11}
                    alt=""
                    src="/left-group19@2x.png"
                    onClick={onLeftGroupIcon11Click}
                  />
                </div>
              </div>
              <div className={styles.ourCredibilityAs2}>
                Our credibility as a brand is evident in the authenticity of our
                products but and also in the numerous partnerships with the
                players.
              </div>
            </section>
            <section className={styles.section8} data-scroll-to="section2">
              <div className={styles.inner1} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon8}
                    alt=""
                    src="/left-group20@2x.png"
                  />
                  <div className={styles.logorightnavlink}>
                    <h1 className={styles.resourcefulness1}>Resourcefulness</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon9}
                    alt=""
                    src="/left-group21@2x.png"
                  />
                </div>
              </div>
              <div className={styles.ourCredibilityAs2}>
                Our credibility as a brand is evident in the authenticity of our
                products but and also in the numerous partnerships with the
                players.
              </div>
            </section>
            <section className={styles.section9}>
              <div className={styles.inner4} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon8}
                    alt=""
                    src="/left-group22@2x.png"
                  />
                  <div className={styles.missionContainer}>
                    <h1 className={styles.mission}>Innovation</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon9}
                    alt=""
                    src="/left-group23@2x.png"
                  />
                </div>
              </div>
              <div className={styles.weOfferAContainer1}>
                <p className={styles.inTheHeart}>
                  We offer a huge arsenal of logistics and expertise to
                </p>
                <p className={styles.inTheHeart}>
                  strategize and tackle most agro challenges
                </p>
              </div>
            </section>
          </div>
          <div className={styles.parentCaurosol12002}>
            <section className={styles.section10}>
              <div
                className={styles.inner7}
                onClick={onFrameContainer3Click}
                data-animate-on-scroll
              >
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon16}
                    alt=""
                    src="/left-group24@2x.png"
                  />
                  <div className={styles.missionFrame}>
                    <h1 className={styles.mission}>Mission</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon17}
                    alt=""
                    src="/left-group25@2x.png"
                  />
                </div>
              </div>
              <div className={styles.toExtendDigitalization2}>
                To extend digitalization and innovation to agriculture through
                diverse technological channels
              </div>
            </section>
            <section className={styles.section11} data-scroll-to="section1">
              <div className={styles.inner8} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon16}
                    alt=""
                    src="/left-group26@2x.png"
                  />
                  <div className={styles.missionFrame}>
                    <h1 className={styles.mission}>Integrity</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon19}
                    alt=""
                    src="/left-group27@2x.png"
                    onClick={onLeftGroupIcon19Click}
                  />
                </div>
              </div>
              <div className={styles.ourCredibilityAs4}>
                Our credibility as a brand is evident in the authenticity of our
                products but and also in the numerous partnerships with the
                players.
              </div>
            </section>
            <section className={styles.section12} data-scroll-to="section">
              <div className={styles.inner1} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon16}
                    alt=""
                    src="/left-group28@2x.png"
                  />
                  <div className={styles.logorightnavlink}>
                    <h1 className={styles.resourcefulness2}>Resourcefulness</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon17}
                    alt=""
                    src="/left-group29@2x.png"
                  />
                </div>
              </div>
              <div className={styles.ourCredibilityAs4}>
                Our credibility as a brand is evident in the authenticity of our
                products but and also in the numerous partnerships with the
                players.
              </div>
            </section>
            <section className={styles.section13}>
              <div className={styles.inner8} data-animate-on-scroll>
                <div className={styles.logorightnavlink}>
                  <img
                    className={styles.leftGroupIcon16}
                    alt=""
                    src="/left-group30@2x.png"
                  />
                  <div className={styles.missionFrame}>
                    <h1 className={styles.mission}>Innovation</h1>
                  </div>
                  <img
                    className={styles.leftGroupIcon17}
                    alt=""
                    src="/left-group31@2x.png"
                  />
                </div>
              </div>
              <div className={styles.weOfferAContainer2}>
                <p className={styles.inTheHeart}>
                  We offer a huge arsenal of logistics and expertise to
                </p>
                <p className={styles.inTheHeart}>
                  strategize and tackle most agro challenges
                </p>
              </div>
            </section>
          </div>
        </div>
        <section className={styles.section6partners}>
          <div className={styles.ourprojectframeParent}>
            <SearchBar />
            <Frameinstagram />
          </div>
        </section>
        <div className={styles.outTeam}>
          <div className={styles.dktpTeamFaqCta}>
            <img className={styles.dktpTeamFaqCtaChild} alt="" />
            <img className={styles.dktpTeamFaqCtaItem} alt="" />
            <div className={styles.outteam}>
              <div className={styles.ourTeam}>{`Our Team & Experts`}</div>
            </div>
            <div className={styles.outteam1}>
              <div className={styles.ourTeam1}>
                Our Team - The big brains behind Agrospectrum
              </div>
            </div>
            <img className={styles.dktpTeamFaqCtaInner} alt="" />
            <div className={styles.cardgropupo} data-animate-on-scroll>
              <div className={styles.xorse}>
                <div className={styles.xoseAhlijaTeam}>
                  <img className={styles.baseIcon} alt="" />
                  <div className={styles.block1Parent}>
                    <div className={styles.block1}>
                      <div className={styles.rectangle} />
                    </div>
                    <div className={styles.xoseAhlijahSweParent}>
                      <div className={styles.xoseAhlijahSwe}>
                        Xose Ahlijah, SWE
                      </div>
                      <div className={styles.snrTechnologyLead}>
                        Snr Technology Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.castro}>
                <img className={styles.baseIcon1} alt="" />
                <div className={styles.block11}>
                  <div className={styles.rectangle1} />
                </div>
                <div className={styles.castroAntwiDansoParent}>
                  <div className={styles.castroAntwiDanso}>
                    Castro Antwi-Danso
                  </div>
                  <div className={styles.generalManager}>General Manager</div>
                </div>
              </div>
              <div className={styles.ottisApalooTeam}>
                <img className={styles.baseIcon2} alt="" />
                <div className={styles.block1Group}>
                  <div className={styles.block12}>
                    <div className={styles.rectangle2} />
                  </div>
                  <div className={styles.otisAApalooParent}>
                    <div className={styles.otisAApaloo}>Otis A. Apaloo</div>
                    <div className={styles.dataAnalyst}>{`Data Analyst `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cta}>
              <div className={styles.gradientmsgWrapper}>
                <div className={styles.gradientmsg}>
                  <img
                    className={styles.gradientmsgChild}
                    alt=""
                    data-animate-on-scroll
                  />
                  <div className={styles.weSupportAgribusinessIndustParent}>
                    <b
                      className={styles.weSupportAgribusinessContainer}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.inTheHeart}
                      >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
                      <p className={styles.inTheHeart}>for a Better Result.</p>
                    </b>
                    <div
                      className={styles.vectorParent}
                      onClick={onFrameContainer4Click}
                    >
                      <img
                        className={styles.arrowIcon}
                        alt=""
                        onClick={onArrowIconClick}
                      />
                      <div
                        className={styles.viewProducts}
                        onClick={onViewProduCtsTextClick}
                      >
                        view produCts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.projectArrow}>
                <div className={styles.base} />
              </div>
            </div>
            <div className={styles.faqframe}>
              <div className={styles.faq}>
                <div className={styles.frequently}>
                  <b className={styles.faq1}>FAQ</b>
                  <b className={styles.frequentlyAskedQueContainer}>
                    <p className={styles.inTheHeart}>{`Frequently `}</p>
                    <p className={styles.inTheHeart}>Asked Questions</p>
                  </b>
                  <div className={styles.allowsOrganizations}>
                    <p
                      className={styles.inTheHeart}
                    >{`Browse through our mostly asked questions and `}</p>
                    <p className={styles.inTheHeart}>
                      enquiries for fast response.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.faqs}>
                <div className={styles.faq11}>
                  <div className={styles.whereFrame}>
                    <div className={styles.logorightnavlink}>
                      <div className={styles.whatDoesThePlatformDo}>
                        <b className={styles.whatIsMean}>
                          What does the platform do ?
                        </b>
                      </div>
                      <div className={styles.roundplus}>
                        <img className={styles.combinedShapeIcon} alt="" />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup1}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        What does the platform do?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.withAgrospectrumsSolutions}>
                        We offer a comprehensive suite of agriculturally
                        inclined digitalsolutions. Use the contact us button at
                        the button of the site to reach us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq2}>
                  <div className={styles.whereFrame}>
                    <div className={styles.logorightnavlink}>
                      <div className={styles.whatDoesThePlatformDo}>
                        <b className={styles.whatIsMean}>
                          How can i access the platform ?
                        </b>
                      </div>
                      <div className={styles.roundplus1}>
                        <img className={styles.combinedShapeIcon} alt="" />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup2}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        How can i access the platform ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.withAgrospectrumsSolutions}>
                        We offer a comprehensive suite of agriculturally
                        inclined digitalsolutions. Use the contact us button at
                        the button of the site to reach us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq3}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer}>
                        Is the platform free ?
                      </b>
                      <div className={styles.roundplus2}>
                        <img className={styles.combinedShapeIcon} alt="" />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup2}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        {" "}
                        Is the platform free ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.withAgrospectrumsSolutions}>
                        Agrospectrum Limited is a for-profit entity that
                        provides Agric business enterprises with top notch
                        digital solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq4}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer}>
                        What are some of your partners ?
                      </b>
                      <div className={styles.roundplus3}>
                        <img className={styles.combinedShapeIcon} alt="" />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup4}>
                    <div className={styles.whatAreSomeContainer}>
                      <p className={styles.whatAreSome}>
                        What are some of your partners ?
                      </p>
                      <p className={styles.blankLine3}>
                        <b>&nbsp;</b>
                      </p>
                      <p
                        className={styles.weOfferA5}
                      >{`We offer a comprehensive suite of digital solutions `}</p>
                      <p
                        className={styles.inTheHeart}
                      >{`We are proud to let you know our diligence and hardwork has paid greatly. MOFA, YARA, IGNITIA, MAY & LOTTE , SMG Agro, Agromite, ISDA, SESI technologies are few of the prominent partners that we deal with.`}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.faq5}>
                  <div className={styles.whereFrame2}>
                    <div className={styles.whatDoesThePlatformDo2}>
                      <b className={styles.whatDoesTheContainer}>
                        What do i stand to benefit ?
                      </b>
                      <div className={styles.roundplus4}>
                        <img className={styles.combinedShapeIcon} alt="" />
                        <div className={styles.rectangle3} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangle4} />
                  <div className={styles.poppup2}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        What do i stand to benefit ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.withAgrospectrumsSolutions}>
                        With Agrospectrum’s solutions your business gets to
                        maximize profit and increase productivity. Farmers can
                        have access to a wide array of extension, agronomic
                        information, climate smart advice and certification that
                        will allow their produce break into global markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FOOTERCOMPONENT />
      </div>
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

export default Homepage;
