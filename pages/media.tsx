import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./media.module.css";

const Media: NextPage = () => {
  const router = useRouter();
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);

  const onClipPathGroup3Click = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup4Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup5Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const onLgoFrameContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHomeCContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAboutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAbout1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onLinkPricing1Click = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProducAndServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onLinkPricing12Click = useCallback(() => {
    // Please sync "product_services" to the project
  }, []);

  const onClientspartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onLinkPricing13Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onLinkPricing14Click = useCallback(() => {
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

  const onContactUsText1Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onCardText1Click = useCallback(() => {
    router.push("/blog-page3");
  }, [router]);

  const onBtnContainerClick = useCallback(() => {
    router.push("/desktop1");
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
    router.push("/blog-page3");
  }, [router]);

  const onMrCastroAwards1Click = useCallback(() => {
    router.push("/blog-page3");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/blog-page3");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/blog-page3");
  }, [router]);

  const onFrameContainer12Click = useCallback(() => {
    router.push("/blog-page1");
  }, [router]);

  const onImage3Click = useCallback(() => {
    router.push("/blog-page1");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/blog-page1");
  }, [router]);

  const onFrameContainer4Click = useCallback(() => {
    router.push("/blog-page2");
  }, [router]);

  const onFrameContainer5Click = useCallback(() => {
    router.push("/blog-page2");
  }, [router]);

  const onImage1Click = useCallback(() => {
    router.push("/blog-page2");
  }, [router]);

  const onFrameContainer13Click = useCallback(() => {
    router.push("/blog-page2");
  }, [router]);

  const onFrameContainer14Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  const onDownload6ImageClick = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  const onFrameContainer15Click = useCallback(() => {
    router.push("/blog-page");
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

  const onFrameContainer32Click = useCallback(() => {
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
      <div className={styles.media}>
        <header className={styles.allnavs}>
          <nav className={styles.navdesktop} id="navBar">
            <div className={styles.logorightnavlink}>
              <div className={styles.logoasset}>
                <button className={styles.arrowframe}>
                  <div
                    className={styles.oursubsidiarylogos1}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group3.svg"
                      onClick={onClipPathGroup3Click}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group7@2x.png"
                      onClick={onClipPathGroup4Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group8@2x.png"
                      onClick={onClipPathGroup5Click}
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
                  onClick={onLgoFrameContainer1Click}
                >
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo3@2x.png"
                  />
                </div>
              </div>
              <nav className={styles.rightnavlink}>
                <div className={styles.homecParent}>
                  <div
                    className={styles.homec}
                    onClick={onHomeCContainer1Click}
                  >
                    <button
                      className={styles.linkAbout}
                      onClick={onLinkAboutClick}
                    >
                      <div
                        className={styles.linkAbout1}
                        onClick={onLinkAbout1Click}
                      >
                        Home
                      </div>
                    </button>
                    <img
                      className={styles.homecChild}
                      alt=""
                      src="/line-15@2x.png"
                    />
                  </div>
                  <button className={styles.aboutus} onClick={onAboutUsClick}>
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricing1Click}
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
                      onClick={onLinkPricing12Click}
                    >{`Product & Services`}</div>
                  </button>
                  <button
                    className={styles.aboutus}
                    onClick={onClientspartnersClick}
                  >
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricing13Click}
                    >{`Clients & Partners`}</div>
                  </button>
                  <button className={styles.media1} onClick={onMediaClick}>
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricing14Click}
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
                    onClick={onContactUsText1Click}
                  >
                    Contact Us
                  </div>
                </button>
              </nav>
            </div>
          </nav>
        </header>
        <div className={styles.desktop}>
          <img
            className={styles.bottomBlurIcon}
            alt=""
            src="/bottom-blur1@2x.png"
          />
          <div className={styles.container}>
            <div className={styles.cardText}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
                  <img className={styles.imgIcon} alt="" src="/img12@2x.png" />
                </div>
              </div>
              <div className={styles.events}>Events</div>
            </div>
            <div className={styles.cardText1} onClick={onCardText1Click}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img className={styles.blurIcon} alt="" src="/blur1@2x.png" />
                  <img className={styles.imgIcon} alt="" src="/img13@2x.png" />
                </div>
              </div>
              <div className={styles.events}>Awards</div>
            </div>
            <div className={styles.cardText2}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img className={styles.blurIcon} alt="" src="/blur7@2x.png" />
                  <img className={styles.imgIcon} alt="" src="/img14@2x.png" />
                </div>
              </div>
              <div className={styles.events}>Input Credit</div>
            </div>
            <div className={styles.cardText3}>
              <div className={styles.card3}>
                <div className={styles.img3}>
                  <img
                    className={styles.blurIcon3}
                    alt=""
                    src="/blur3@2x.png"
                  />
                  <img className={styles.imgIcon3} alt="" src="/img15@2x.png" />
                </div>
              </div>
              <div className={styles.events}>Mountaineer</div>
            </div>
          </div>
          <div className={styles.ourMedia}>Our Media</div>
          <div className={styles.btns}>
            <div className={styles.btn} onClick={onBtnContainerClick}>
              <img
                className={styles.bgBlurIcon}
                alt=""
                src="/bg-blur1@2x.png"
              />
              <div className={styles.button}>
                <div className={styles.div}>←</div>
              </div>
            </div>
            <div className={styles.btn1}>
              <img
                className={styles.bgBlurIcon}
                alt=""
                src="/bg-blur6@2x.png"
              />
              <div className={styles.button}>
                <div className={styles.div}>→</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.labels}>
          <div className={styles.games}>Games</div>
          <div className={styles.games}>Researches</div>
          <div className={styles.games}>Events</div>
          <h1 className={styles.awards1}>Awards</h1>
          <div className={styles.games}>Conferences</div>
          <div className={styles.games}>Seminars</div>
          <div className={styles.games}>Games</div>
        </div>
        <section className={styles.blogpost}>
          <section className={styles.teamFaqCta}>
            <div className={styles.blogNewsParent}>
              <b className={styles.blogNews}>{`Blog & News`}</b>
              <b className={styles.learnRecentNewsContainer}>
                <p className={styles.learnRecentPractices}>
                  Learn Recent Practices
                </p>
                <p className={styles.learnRecentPractices}>News and Blogs</p>
              </b>
              <section className={styles.col1Parent} data-animate-on-scroll>
                <section className={styles.col1}>
                  <div className={styles.frameParent} data-animate-on-scroll>
                    <div
                      className={styles.mrCastroAwards1Parent}
                      onClick={onFrameContainerClick}
                    >
                      <img
                        className={styles.mrCastroAwards1}
                        alt=""
                        src="/mr-castro-awards-11@2x.png"
                        onClick={onMrCastroAwards1Click}
                      />
                      <div className={styles.parent}>
                        <div className={styles.div2}>23</div>
                        <div className={styles.nov}>Nov</div>
                      </div>
                    </div>
                    <div
                      className={styles.frameWrapper}
                      onClick={onFrameContainer1Click}
                    >
                      <div
                        className={styles.agrospectrumLimitedWinsTwoParent}
                        onClick={onFrameContainer2Click}
                      >
                        <div
                          className={styles.agrospectrumLimitedWinsContainer}
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`Agrospectrum Limited wins two `}</p>
                          <p className={styles.learnRecentPractices}>
                            prestigious awards
                          </p>
                        </div>
                        <div className={styles.inTheGhanaianContainer}>
                          <p className={styles.learnRecentPractices}>
                            In the Ghanaian space and beyond we at
                          </p>
                          <p className={styles.agropspectrumHas}>
                            Agropspectrum has equipped...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.baseParent}>
                      <div className={styles.base} />
                      <div className={styles.byAudreyK}>By Audrey K</div>
                      <div className={styles.byAudreyK}>2 Comments</div>
                    </div>
                  </div>
                  <div
                    className={styles.frameGroup}
                    onClick={onFrameContainer12Click}
                    data-animate-on-scroll
                  >
                    <div className={styles.image3Parent}>
                      <img
                        className={styles.image3Icon}
                        alt=""
                        src="/image-31@2x.png"
                        onClick={onImage3Click}
                      />
                      <div className={styles.frameContainer}>
                        <div className={styles.group}>
                          <div className={styles.div3}>20</div>
                          <div className={styles.dec}>DEC</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div
                        className={styles.digitalisationAGameChangerParent}
                        onClick={onFrameContainer3Click}
                      >
                        <div className={styles.digitalisationAGameContainer}>
                          <p
                            className={styles.learnRecentPractices}
                          >{`Digitalisation, A Game Changer For `}</p>
                          <p className={styles.learnRecentPractices}>
                            Ghanaian Farmers.
                          </p>
                        </div>
                        <div className={styles.inTheGhanaianContainer}>
                          <p
                            className={styles.learnRecentPractices}
                          >{`In sub-Saharan Africa, smallholder farmers `}</p>
                          <p className={styles.learnRecentPractices}>
                            make up the largest cohort. They ....
                          </p>
                        </div>
                      </div>
                      <div className={styles.baseGroup}>
                        <div className={styles.base} />
                        <div className={styles.byAudreyK}>By Audrey K</div>
                        <div className={styles.byAudreyK}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className={styles.frameParent1}>
                  <div
                    className={styles.frameParent2}
                    onClick={onFrameContainer4Click}
                  >
                    <div
                      className={styles.image1Parent}
                      onClick={onFrameContainer5Click}
                    >
                      <img
                        className={styles.image1Icon}
                        alt=""
                        src="/image-11@2x.png"
                        onClick={onImage1Click}
                      />
                      <div className={styles.parent1}>
                        <div className={styles.div4}>25</div>
                        <div className={styles.dec1}>DEC</div>
                      </div>
                    </div>
                    <div
                      className={styles.enhancingAgriculturalResilieParent}
                      onClick={onFrameContainer13Click}
                    >
                      <div
                        className={styles.enhancingAgriculturalResilieContainer}
                      >
                        <p className={styles.learnRecentPractices}>
                          <span className={styles.e}>E</span>
                          <span
                            className={styles.nhancingAgriculturalResilien}
                          >{`NHANCING AGRICULTURAL RESILIENCE `}</span>
                        </p>
                        <p className={styles.throughIgnitiasClimate}>
                          THROUGH IGNITIA’S CLIMATE MONITORING.
                        </p>
                      </div>
                      <div className={styles.inTheGhanaianContainer}>
                        <p
                          className={styles.learnRecentPractices}
                        >{`Agrospectrum Limited, a platform solution `}</p>
                        <p
                          className={styles.learnRecentPractices}
                        >{`that aggregates data of all the.... `}</p>
                      </div>
                    </div>
                    <div className={styles.baseContainer}>
                      <div className={styles.base} />
                      <div className={styles.byAudreyK}>By Morenika O</div>
                      <div className={styles.byAudreyK}>2 Comments</div>
                    </div>
                  </div>
                  <div
                    className={styles.frameParent3}
                    onClick={onFrameContainer14Click}
                  >
                    <div className={styles.download6Parent}>
                      <img
                        className={styles.download6Icon}
                        alt=""
                        src="/download-622@2x.png"
                        onClick={onDownload6ImageClick}
                      />
                      <div className={styles.frameContainer}>
                        <div className={styles.group}>
                          <div className={styles.div5}>25</div>
                          <div className={styles.dec2}>DEC</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.enhancingAgriculturalResilieParent}
                      onClick={onFrameContainer15Click}
                    >
                      <div
                        className={styles.enhancingAgriculturalResilieContainer}
                      >
                        <p className={styles.learnRecentPractices}>
                          <span className={styles.m}>M</span>
                          <span
                            className={styles.nhancingAgriculturalResilien}
                          >{`AY AND LOTTE INTERNATIONAL `}</span>
                        </p>
                        <p className={styles.throughIgnitiasClimate}>
                          PARTNERS AGROSPECTRUM.
                        </p>
                      </div>
                      <div className={styles.inTheGhanaianContainer}>
                        <p
                          className={styles.learnRecentPractices}
                        >{`May and Lotte International; a Ghanaian `}</p>
                        <p className={styles.learnRecentPractices}>
                          agricultural company....
                        </p>
                      </div>
                    </div>
                    <div className={styles.baseParent1}>
                      <div className={styles.base} />
                      <div className={styles.byAudreyK}>Audrey M.</div>
                      <div className={styles.byAudreyK}>2 Comments</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className={styles.section}>
            <div className={styles.blogNewsGroup}>
              <b className={styles.blogNews1}>{`Blog & News`}</b>
              <b className={styles.learnRecentNewsContainer1}>
                <p className={styles.learnRecentPractices}>
                  Learn Recent Practices
                </p>
                <p className={styles.learnRecentPractices}>News and Blogs</p>
              </b>
              <section className={styles.frameSection} data-animate-on-scroll>
                <section className={styles.frameParent4}>
                  <div className={styles.frameParent5} data-animate-on-scroll>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base14@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec3}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinParent}
                      >
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer
                          }
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`Agrospectrum is Revolutionizing `}</p>
                          <p className={styles.learnRecentPractices}>
                            Agriculture Through Digital Innovation
                          </p>
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          <p className={styles.learnRecentPractices}>
                            In the Ghanaian space and beyond we at
                          </p>
                          <p className={styles.agropspectrumHas}>
                            Agropspectrum has equipped...
                          </p>
                        </div>
                      </div>
                      <div className={styles.baseParent3}>
                        <div className={styles.base4} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent5} data-animate-on-scroll>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base15@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec3}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinParent}
                      >
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer
                          }
                        >
                          How Digitalization Connects Farmers with Global
                          Opportunities"
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          Digitalisation has being a an huge ddevelopmental step
                          ....
                        </div>
                      </div>
                      <div className={styles.baseParent3}>
                        <div className={styles.base4} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent5} data-animate-on-scroll>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base26@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec3}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinParent}
                      >
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer
                          }
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`A Deep Dive into the Impact of `}</p>
                          <p className={styles.learnRecentPractices}>
                            Agrospectrum on Agricultural Operations
                          </p>
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className={styles.baseParent3}>
                        <div className={styles.base4} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent5} data-animate-on-scroll>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base27@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec3}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinParent}
                      >
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer
                          }
                        >
                          <p
                            className={styles.learnRecentPractices}
                          >{`Enhancing Agricultural Resilience Through `}</p>
                          <p className={styles.learnRecentPractices}>
                            Ignitia's Climate Monitoring"
                          </p>
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className={styles.baseParent3}>
                        <div className={styles.base4} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent5} data-animate-on-scroll>
                    <div className={styles.baseParent2}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base28@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div6}>25</div>
                        <div className={styles.dec3}>DEC</div>
                      </div>
                    </div>
                    <div className={styles.frameParent6}>
                      <div
                        className={styles.agrospectrumIsRevolutionizinParent}
                      >
                        <div
                          className={
                            styles.agrospectrumIsRevolutionizinContainer
                          }
                        >
                          <p className={styles.learnRecentPractices}>
                            A Sustainable Future with Agrospectrum's
                          </p>
                          <p className={styles.learnRecentPractices}>
                            Environmental Impact Monitoring"
                          </p>
                        </div>
                        <div className={styles.digitalisationHasBeing}>
                          Deep dive into Agrospectrum’s misson of
                          revolutioinalizing the Agriculture industry across
                          ....
                        </div>
                      </div>
                      <div className={styles.baseParent3}>
                        <div className={styles.base4} />
                        <div className={styles.byAudreyK2}>By Audrey K</div>
                        <div className={styles.byAudreyK2}>2 Comments</div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <img className={styles.groupIcon} alt="" src="/group2.svg" />
            </div>
          </section>
        </section>
        <div className={styles.footerComponent}>
          <div className={styles.component1}>
            <div className={styles.frameParent15}>
              <div className={styles.download5Parent}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-540@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-541@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture21@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color19@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-321@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images20@2x.png"
                />
                <img
                  className={styles.download6Icon1}
                  alt=""
                  src="/download-623@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-121@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download21@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-121@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-221@2x.png"
                />
              </div>
              <div className={styles.download5Group}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-542@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-543@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture22@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color20@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-322@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images21@2x.png"
                />
                <img
                  className={styles.download6Icon1}
                  alt=""
                  src="/download-624@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-122@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download22@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-122@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-222@2x.png"
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
                      className={styles.learnRecentPractices}
                    >{`Transform your agricultural practices and `}</p>
                    <p className={styles.learnRecentPractices}>
                      <span className={styles.cultivateSuccessWith}>
                        cultivate success with
                      </span>
                      <b className={styles.cultivateSuccessWith}>
                        {" "}
                        industry's best
                      </b>
                      <span>—empowering farmers, streamlining operations,</span>
                    </p>
                    <p className={styles.learnRecentPractices}>
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
              <div className={styles.frameParent16}>
                <div className={styles.frameParent17}>
                  <div className={styles.nowWereParent}>
                    <div className={styles.nowWere2}>business</div>
                    <div className={styles.frameParent18}>
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
                        onClick={onFrameContainer32Click}
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
                          src="/line-124@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent19}>
                    <div className={styles.frameParent20}>
                      <div className={styles.nowWereWrapper3}>
                        <div className={styles.nowWere7}>{`CONTACT US `}</div>
                      </div>
                      <div className={styles.agrsopectrumLtd}>
                        <span className={styles.e}>A</span>
                        <span
                          className={styles.nhancingAgriculturalResilien}
                        >{`GRSOPECTRUM `}</span>
                        <span className={styles.e}>l</span>
                        <span className={styles.nhancingAgriculturalResilien}>
                          TD
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
                <div className={styles.frameParent21}>
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
              <div className={styles.frameParent22}>
                <button className={styles.frameButton}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/arrow-103.svg"
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
                        className={styles.groupIcon1}
                        alt=""
                        src="/group3.svg"
                      />
                    </div>
                    <div className={styles.facebook}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector6.svg"
                      />
                    </div>
                    <div className={styles.twitter}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                    <div
                      className={styles.linkedinAgrospectrem}
                      onClick={onLinkedinAgrospectremContainerClick}
                    >
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className={styles.frameParent23}>
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

export default Media;
