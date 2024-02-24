import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./media.module.css";

const Media: NextPage = () => {
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

  const onMrCastroContainerClick = useCallback(() => {
    router.push("/blog-page3");
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

  const onMrCastroAwards11Click = useCallback(() => {
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

  return (
    <>
      <div className={styles.media}>
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
                      src="/clip-path-group@2x.png"
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
                    src="/images-2-1@2x.png"
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
                    src="/logo3@2x.png"
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
                  <button className={styles.media1} onClick={onMediaClick}>
                    <div
                      className={styles.linkPricing3}
                      onClick={onLinkPricing4Click}
                    >
                      Media
                    </div>
                    <img
                      className={styles.mediaChild}
                      alt=""
                      src="/line-1@2x.png"
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
        <header className={styles.whyWorkWithUs}>
          <section className={styles.galleryImages}>
            <img
              className={styles.galleryImagesChild}
              alt=""
              src="/frame-112@2x.png"
            />
            <img
              className={styles.galleryImagesChild}
              alt=""
              src="/frame-113@2x.png"
            />
            <div className={styles.mrcastro} onClick={onMrCastroContainerClick}>
              <img
                className={styles.mrCastroAwards1}
                alt=""
                src="/mr-castro-awards-1@2x.png"
              />
            </div>
            <img
              className={styles.galleryImagesInner}
              alt=""
              src="/frame-114@2x.png"
            />
            <img
              className={styles.frameIcon}
              alt=""
              src="/frame-115@2x.png"
              data-animate-on-scroll
            />
          </section>
          <section className={styles.galleryImages1}>
            <img
              className={styles.galleryImagesChild1}
              alt=""
              src="/frame-113@2x.png"
            />
            <img
              className={styles.mrCastroAwards11}
              alt=""
              src="/mr-castro-awards-1@2x.png"
            />
            <img
              className={styles.galleryImagesChild2}
              alt=""
              src="/frame-114@2x.png"
            />
          </section>
          <div className={styles.labels}>
            <div className={styles.games}>Games</div>
            <div className={styles.games}>Researches</div>
            <div className={styles.games}>Events</div>
            <h1 className={styles.awards}>Awards</h1>
            <div className={styles.games}>Conferences</div>
            <div className={styles.games}>Seminars</div>
            <div className={styles.games}>Games</div>
          </div>
        </header>
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
                        className={styles.mrCastroAwards12}
                        alt=""
                        src="/mr-castro-awards-1@2x.png"
                        onClick={onMrCastroAwards11Click}
                      />
                      <div className={styles.parent}>
                        <div className={styles.div}>23</div>
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
                        src="/image-3@2x.png"
                        onClick={onImage3Click}
                      />
                      <div className={styles.frameContainer}>
                        <div className={styles.group}>
                          <div className={styles.div1}>20</div>
                          <div className={styles.dec}>DEC</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div
                        className={styles.digitalisationAGameChangerParent}
                        onClick={onFrameContainer3Click}
                      >
                        <div
                          className={styles.agrospectrumLimitedWinsContainer}
                        >
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
                        src="/image-1@2x.png"
                        onClick={onImage1Click}
                      />
                      <div className={styles.container}>
                        <div className={styles.div2}>25</div>
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
                        src="/download-6@2x.png"
                        onClick={onDownload6ImageClick}
                      />
                      <div className={styles.frameContainer}>
                        <div className={styles.group}>
                          <div className={styles.div3}>25</div>
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
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div4}>25</div>
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
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div4}>25</div>
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
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div4}>25</div>
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
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div4}>25</div>
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
                        src="/base@2x.png"
                      />
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/vector-17.svg"
                        />
                        <div className={styles.div4}>25</div>
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
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-5@2x.png"
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
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon1}
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
                  className={styles.download5Icon}
                  alt=""
                  src="/download-5@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-5@2x.png"
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
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images@2x.png"
                />
                <img
                  className={styles.download6Icon1}
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
                          src="/line-110@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent19}>
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
                <div className={styles.frameParent20}>
                  <div className={styles.nowWereParent4}>
                    <div className={styles.nowWere13}>BSL HEAD OFFICE</div>
                    <div className={styles.nowWere14}>No 24 Botwe</div>
                    <div className={styles.nowWere14}>Dzorwulu - Accra</div>
                  </div>
                  <div className={styles.nowWereParent5}>
                    <div className={styles.nowWere13}>TAMALE office</div>
                    <div className={styles.nowWereParent6}>
                      <div className={styles.nowWere17}>Tamale.</div>
                      <div className={styles.nowWere18}>16 Dagomba Road,</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent21}>
                <button className={styles.frameButton}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/arrow-103.svg"
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
                        src="/group3.svg"
                      />
                    </div>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector6.svg"
                      />
                    </div>
                    <div className={styles.frame}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                    <div className={styles.vectorFrame}>
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
          <div className={styles.frameParent22}>
            <div className={styles.lineWrapper}>
              <div className={styles.frameInner} />
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
