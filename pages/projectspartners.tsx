import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./projectspartners.module.css";

const Projectspartners: NextPage = () => {
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
    <main className={styles.projectspartners} id={`7projects&partermain`}>
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
                    src="/clip-path-group9@2x.png"
                    onClick={onClipPathGroup1Click}
                  />
                  <img
                    className={styles.clipPathGroup2}
                    alt=""
                    src="/clip-path-group10@2x.png"
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
                  src="/images-2-14@2x.png"
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
                  src="/logo4@2x.png"
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
                    src="/line-191@2x.png"
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
                  <img
                    className={styles.clientspartnersChild}
                    alt=""
                    src="/line-112@2x.png"
                  />
                </button>
                <button className={styles.aboutus} onClick={onMediaClick}>
                  <div
                    className={styles.linkPricing3}
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
      <section className={styles.section6partners}>
        <div className={styles.ourprojectframeParent}>
          <div className={styles.ourprojectframe}>
            <div className={styles.mofaColorWrapper}>
              <h1 className={styles.ourProjects}>Our Projects</h1>
              <div className={styles.theNationssBest}>
                The nations’s best digital Agric Platform
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.eSubsidiaryParent}>
                <div className={styles.eSubsidiary}>
                  <div className={styles.nationwide}>@Nationwide</div>
                  <img
                    className={styles.baseIcon}
                    alt=""
                    src="/base16@2x.png"
                  />
                  <div className={styles.aFlagshipProgram}>
                    A flagship program of the MoFA(Ghana) that used
                    Agrospectrum’s mobile application provide input Subsidy to
                    farmers.
                  </div>
                  <div className={styles.eSubsidiaryInner}>
                    <div className={styles.block1Parent}>
                      <div className={styles.block1Parent}>
                        <div className={styles.rectangle} />
                      </div>
                      <div className={styles.eSubsidy}>{`E-Subsidy `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputCredit}>
                  <div className={styles.eSubsidiary}>
                    <div className={styles.nationwide1}>@nationwide</div>
                    <img
                      className={styles.baseIcon}
                      alt=""
                      src="/base17@2x.png"
                    />
                    <div className={styles.aCreditProgramContainer}>
                      <span
                        className={styles.aCreditProgram}
                      >{`A credit program spearheaded by `}</span>
                      <span className={styles.mayAndLotte}>May and Lotte,</span>
                      <span className={styles.aCreditProgram}>
                        {" "}
                        leveraged our cutting-edge solutions at the crucial
                        redemption stage for a streamlined process.
                      </span>
                    </div>
                    <div className={styles.groupWrapper}>
                      <div className={styles.block1Group}>
                        <div className={styles.block1Group}>
                          <div className={styles.rectangle1} />
                        </div>
                        <div
                          className={styles.inputCreditMgt}
                        >{`Input Credit Mgt. `}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.farmerKycParent}>
                <div className={styles.eSubsidiary}>
                  <div className={styles.nationwide2}>@Nationwide</div>
                  <img
                    className={styles.baseIcon2}
                    alt=""
                    src="/base18@2x.png"
                  />
                  <div
                    className={styles.imagineAFuture}
                  >{`Imagine a future of digitization of the agribusiness were reliable technology become your allies for informed decision making `}</div>
                  <div className={styles.farmerKycInner}>
                    <div className={styles.block1Parent}>
                      <div className={styles.block1Parent}>
                        <div className={styles.rectangle} />
                      </div>
                      <div className={styles.farmerKyc1}>FARMER KYC</div>
                    </div>
                  </div>
                </div>
                <div className={styles.aggregation}>
                  <div className={styles.eSubsidiary}>
                    <div className={styles.savanna}>@Savanna</div>
                    <img
                      className={styles.baseIcon}
                      alt=""
                      src="/base19@2x.png"
                    />
                    <div className={styles.runByOurContainer}>
                      <p className={styles.runByOurClientsMayAndLot}>
                        <span
                          className={styles.runByOur}
                        >{`Run by our clients `}</span>
                        <span className={styles.mayAndLotte1}>
                          May and Lotte,
                        </span>
                        <span className={styles.aCreditProgram}>
                          {" "}
                          employed solutions from Agrospectum to streamline
                          purchases and payments for the aggregated commodities.
                        </span>
                      </p>
                    </div>
                    <div className={styles.groupContainer}>
                      <div className={styles.groupDiv}>
                        <div className={styles.groupDiv}>
                          <div className={styles.rectangle3} />
                        </div>
                        <div className={styles.aggregationProgram}>
                          Aggregation Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.farmerKycParent}>
                <div className={styles.eSubsidiary}>
                  <div className={styles.northernGhana}>@Northern Ghana</div>
                  <img
                    className={styles.baseIcon}
                    alt=""
                    src="/base20@2x.png"
                  />
                  <div className={styles.anEnumerationProgram}>
                    An enumeration program by the Government of Ghana through
                    the Ministry of Food and Agriculture that profiles farmers
                    for inclusion.
                  </div>
                  <div className={styles.farmerRregistrationInner}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.farmerRegistrationWrapper}>
                        <div
                          className={styles.farmerRegistration}
                        >{`Farmer Registration   `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.eSubsidiary}>
                  <div className={styles.nationwide3}>@Nationwide</div>
                  <img
                    className={styles.baseIcon}
                    alt=""
                    src="/base21@2x.png"
                  />
                  <div
                    className={styles.ourClimateSmartSolution}
                  >{`Our climate-smart solution empowers farmers across languages with vital information like weather forecasts, disaster preparedness & agro-advice.`}</div>
                  <div className={styles.climateSmartProgramInner}>
                    <div className={styles.block1Parent1}>
                      <div className={styles.block1Parent1}>
                        <div className={styles.rectangle4} />
                      </div>
                      <div className={styles.climateSmartProgram1}>
                        Climate Smart Program
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectArrow}>
              <img
                className={styles.projectArrowChild}
                alt=""
                src="/frame-12101@2x.png"
              />
              <div className={styles.navigation}>
                <div className={styles.divider} />
              </div>
            </div>
          </div>
          <div className={styles.theRenownCompaniesThatTrusParent}>
            <div className={styles.theRenownCompaniesContainer}>
              <span>{`The renown companies that `}</span>
              <span className={styles.trustUs}>Trust Us</span>
            </div>
            <section className={styles.frameContainer} id="partners_logos">
              <div className={styles.frameGroup} data-animate-on-scroll>
                <div className={styles.frameDiv}>
                  <section className={styles.download5Parent}>
                    <img
                      className={styles.download5Icon}
                      alt=""
                      src="/download-522@2x.png"
                    />
                    <img
                      className={styles.download3Icon}
                      alt=""
                      src="/download-311@2x.png"
                    />
                  </section>
                  <section className={styles.captureParent}>
                    <img
                      className={styles.captureIcon}
                      alt=""
                      src="/capture11@2x.png"
                    />
                    <img
                      className={styles.download6Icon}
                      alt=""
                      src="/download-612@2x.png"
                    />
                  </section>
                </div>
                <section className={styles.frameSection}>
                  <section className={styles.download5Group}>
                    <img
                      className={styles.download5Icon1}
                      alt=""
                      src="/download-523@2x.png"
                    />
                    <img
                      className={styles.download2Icon}
                      alt=""
                      src="/download-211@2x.png"
                    />
                    <img
                      className={styles.ignitiaLogo1Icon}
                      alt=""
                      src="/ignitialogo-11@2x.png"
                    />
                  </section>
                  <section className={styles.download1Parent}>
                    <img
                      className={styles.download1Icon}
                      alt=""
                      src="/download-111@2x.png"
                    />
                    <img
                      className={styles.images1Icon}
                      alt=""
                      src="/images-111@2x.png"
                    />
                    <div className={styles.agromiteParent}>
                      <div className={styles.agromite}>AGROMITE</div>
                      <img
                        className={styles.downloadIcon}
                        alt=""
                        src="/download11@2x.png"
                      />
                    </div>
                  </section>
                </section>
                <section className={styles.mofaColorWrapper}>
                  <img
                    className={styles.mofaColorIcon}
                    alt=""
                    src="/mofa-color11@2x.png"
                  />
                </section>
              </div>
            </section>
          </div>
        </div>
      </section>
      <div className={styles.footerComponent}>
        <div className={styles.component1}>
          <div className={styles.frameParent1}>
            <div className={styles.download5Container}>
              <img
                className={styles.download5Icon2}
                alt=""
                src="/download-524@2x.png"
              />
              <img
                className={styles.download5Icon3}
                alt=""
                src="/download-525@2x.png"
              />
              <img
                className={styles.captureIcon1}
                alt=""
                src="/capture12@2x.png"
              />
              <img
                className={styles.mofaColorIcon1}
                alt=""
                src="/mofa-color12@2x.png"
              />
              <img
                className={styles.download3Icon1}
                alt=""
                src="/download-312@2x.png"
              />
              <img
                className={styles.imagesIcon}
                alt=""
                src="/images10@2x.png"
              />
              <img
                className={styles.download6Icon1}
                alt=""
                src="/download-613@2x.png"
              />
              <img
                className={styles.download1Icon1}
                alt=""
                src="/download-112@2x.png"
              />
              <img
                className={styles.downloadIcon1}
                alt=""
                src="/download12@2x.png"
              />
              <img
                className={styles.images1Icon1}
                alt=""
                src="/images-112@2x.png"
              />
              <img
                className={styles.download2Icon1}
                alt=""
                src="/download-212@2x.png"
              />
            </div>
            <div className={styles.download5Parent1}>
              <img
                className={styles.download5Icon2}
                alt=""
                src="/download-526@2x.png"
              />
              <img
                className={styles.download5Icon3}
                alt=""
                src="/download-527@2x.png"
              />
              <img
                className={styles.captureIcon1}
                alt=""
                src="/capture13@2x.png"
              />
              <img
                className={styles.mofaColorIcon1}
                alt=""
                src="/mofa-color13@2x.png"
              />
              <img
                className={styles.download3Icon1}
                alt=""
                src="/download-313@2x.png"
              />
              <img
                className={styles.imagesIcon}
                alt=""
                src="/images11@2x.png"
              />
              <img
                className={styles.download6Icon1}
                alt=""
                src="/download-614@2x.png"
              />
              <img
                className={styles.download1Icon1}
                alt=""
                src="/download-113@2x.png"
              />
              <img
                className={styles.downloadIcon1}
                alt=""
                src="/download13@2x.png"
              />
              <img
                className={styles.images1Icon1}
                alt=""
                src="/images-113@2x.png"
              />
              <img
                className={styles.download2Icon1}
                alt=""
                src="/download-213@2x.png"
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
                    className={styles.runByOurClientsMayAndLot}
                  >{`Transform your agricultural practices and `}</p>
                  <p className={styles.runByOurClientsMayAndLot}>
                    <span className={styles.cultivateSuccessWith}>
                      cultivate success with
                    </span>
                    <b className={styles.cultivateSuccessWith}>
                      {" "}
                      industry's best
                    </b>
                    <span>—empowering farmers, streamlining operations,</span>
                  </p>
                  <p className={styles.runByOurClientsMayAndLot}>
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
                        className={styles.frameChild}
                        alt=""
                        src="/line-110@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent5}>
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
              <div className={styles.frameParent6}>
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
            <div className={styles.frameParent7}>
              <button className={styles.vectorParent}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/arrow-104.svg"
                  onClick={onArrowIconClick}
                />
                <div className={styles.nowWere19} onClick={onNowWereText4Click}>
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
                      className={styles.groupIcon}
                      alt=""
                      src="/group4.svg"
                    />
                  </div>
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector9.svg"
                    />
                  </div>
                  <div className={styles.frame}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector10.svg"
                    />
                  </div>
                  <div className={styles.vectorContainer}>
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
        <div className={styles.mofaColorWrapper}>
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
    </main>
  );
};

export default Projectspartners;
