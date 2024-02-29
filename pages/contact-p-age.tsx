import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import FrameComponent4 from "../components/frame-component4";
import CONTACTFORM from "../components/c-o-n-t-a-c-t-f-o-r-m";
import FOOTERCOMPONENT3 from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t3";
import styles from "./contact-p-age.module.css";

const ContactPAge: NextPage = () => {
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

  const onArrowIconClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsTextClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  return (
    <>
      <main className={styles.contactus}>
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
                      src="/clip-path-group11@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group12@2x.png"
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
                    src="/images-2-119@2x.png"
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
                    src="/logo5@2x.png"
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
                      src="/line-12@2x.png"
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
                  <img
                    className={styles.contactusContainerChild}
                    alt=""
                    src="/line-117@2x.png"
                  />
                </button>
              </nav>
            </div>
          </nav>
        </header>
        <div className={styles.formsHero}>
          <section className={styles.workwithframe}>
            <section className={styles.frameParent}>
              <FrameComponent4 />
              <CONTACTFORM />
            </section>
          </section>
        </div>
        <div className={styles.outTeam}>
          <div className={styles.dktpTeamFaqCta}>
            <img
              className={styles.dktpTeamFaqCtaChild}
              alt=""
              src="/vector-211@2x.png"
            />
            <img
              className={styles.dktpTeamFaqCtaItem}
              alt=""
              src="/vector-23.svg"
            />
            <div className={styles.outteam}>
              <div className={styles.ourTeam}>{`Our Team & Experts`}</div>
            </div>
            <div className={styles.outteam1}>
              <div className={styles.ourTeam1}>
                Our Team - The big brains behind Agrospectrum
              </div>
            </div>
            <img
              className={styles.dktpTeamFaqCtaInner}
              alt=""
              src="/vector-22.svg"
            />
            <div className={styles.cardgropupo} data-animate-on-scroll>
              <div className={styles.xorse}>
                <div className={styles.xoseAhlijaTeam}>
                  <img
                    className={styles.baseIcon}
                    alt=""
                    src="/base22@2x.png"
                  />
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
                <img className={styles.baseIcon1} alt="" src="/base23@2x.png" />
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
                <img className={styles.baseIcon2} alt="" src="/base24@2x.png" />
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
                    src="/group-20611@2x.png"
                    data-animate-on-scroll
                  />
                  <div className={styles.weSupportAgribusinessIndustParent}>
                    <b
                      className={styles.weSupportAgribusinessContainer}
                      data-animate-on-scroll
                    >
                      <p
                        className={styles.weSupportAgribusiness}
                      >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
                      <p className={styles.weSupportAgribusiness}>
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
                        src="/arrow-9.svg"
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
              <div className={styles.baseWrapper}>
                <div className={styles.base} />
              </div>
            </div>
            <div className={styles.faqframe}>
              <div className={styles.faq}>
                <div className={styles.frequently}>
                  <b className={styles.faq1}>FAQ</b>
                  <b className={styles.frequentlyAskedQueContainer}>
                    <p
                      className={styles.weSupportAgribusiness}
                    >{`Frequently `}</p>
                    <p className={styles.weSupportAgribusiness}>
                      Asked Questions
                    </p>
                  </b>
                  <div className={styles.allowsOrganizations}>
                    <p
                      className={styles.weSupportAgribusiness}
                    >{`Browse through our mostly asked questions and `}</p>
                    <p className={styles.weSupportAgribusiness}>
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
                  <div className={styles.poppup1}>
                    <div className={styles.whatDoesTheContainer}>
                      <p className={styles.whatDoesThe}>
                        What does the platform do?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA}>
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
                      <p className={styles.whatDoesThe}>
                        How can i access the platform ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA}>
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
                      <p className={styles.whatDoesThe}>
                        {" "}
                        Is the platform free ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA}>
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
                  <div className={styles.poppup4}>
                    <div className={styles.whatAreSomeContainer}>
                      <p className={styles.whatAreSome}>
                        What are some of your partners ?
                      </p>
                      <p className={styles.blankLine3}>
                        <b>&nbsp;</b>
                      </p>
                      <p
                        className={styles.weOfferA2}
                      >{`We offer a comprehensive suite of digital solutions `}</p>
                      <p
                        className={styles.weSupportAgribusiness}
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
                      <p className={styles.whatDoesThe}>
                        What do i stand to benefit ?
                      </p>
                      <p className={styles.blankLine}>
                        <b>&nbsp;</b>
                      </p>
                      <p className={styles.weOfferA}>
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
        <FOOTERCOMPONENT3 />
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

export default ContactPAge;
