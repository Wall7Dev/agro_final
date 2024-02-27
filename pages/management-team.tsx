import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./management-team.module.css";

const ManagementTeam: NextPage = () => {
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
      <div className={styles.managementTeam}>
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
                      src="/clip-path-group13@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group14@2x.png"
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
                    src="/images-2-123@2x.png"
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
                    src="/logo6@2x.png"
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
                      src="/line-119@2x.png"
                    />
                  </div>
                  <button className={styles.aboutus} onClick={onAboutUsClick}>
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricingClick}
                    >
                      About Us
                    </div>
                    <img
                      className={styles.aboutusChild}
                      alt=""
                      src="/line-13@2x.png"
                    />
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
        <img
          className={styles.managementTeamChild}
          alt=""
          src="/ellipse-4.svg"
        />
        <img
          className={styles.managementTeamItem}
          alt=""
          src="/ellipse-21.svg"
        />
        <img
          className={styles.managementTeamInner}
          alt=""
          src="/ellipse-3.svg"
        />
        <div className={styles.frameDiv}>
          <div className={styles.experienceBoardParent}>
            <div className={styles.experienceBoard}>
              <div className={styles.experienceBoard1}>Experience Board</div>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.mrRazakParent}>
                    <img
                      className={styles.mrRazakIcon}
                      alt=""
                      src="/mr-razak@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.razakAwudulai}>Razak Awudulai</div>
                      <div className={styles.chiefExecutiveOfficer}>
                        Chief Executive Officer
                      </div>
                      <div className={styles.razakIsAn}>
                        Razak is an accomplished business leader with 20+ years.
                        of experience in creating enabling environments and
                        building high-performance teams. He is passionate about
                        the technology ecosystem and has helped to grow many
                        tech businesses both in the public and private sectors
                        globally. More specifically, he has extensive experience
                        working with and helping to provide unique and
                        innovative digital solutions to boost Africa’s digital
                        economy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.mrRazakParent}>
                    <img
                      className={styles.mrNanaDwenohIcon}
                      alt=""
                      src="/mr-nana-dwenoh@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.nanaDwemohBenneh}>
                        Nana Dwemoh Benneh
                      </div>
                      <div className={styles.chairman}>Chairman</div>
                      <div className={styles.priscillaIsA}>
                        Nana has 20+ years of local and international expertise
                        in banking in various management roles across several
                        countries in Africa and the UK. Nana has successfully
                        led the team in significantly growing market share and
                        profitability across the Bank’s Personal and Business
                        Banking franchises. In January 2021, Nana was appointed
                        Managing Director of UMB Bank.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.krisHjmkob1Parent}>
                    <img
                      className={styles.krisHjmkob1Icon}
                      alt=""
                      src="/kris-hjmkob-1@2x.png"
                    />
                    <div className={styles.krisSenanuParent}>
                      <div className={styles.krisSenanu}>Kris Senanu</div>
                      <div className={styles.member}>Member</div>
                      <div className={styles.krisIsAn}>
                        Kris is an accomplished business leader with 20+ years
                        of extensive experience working with and helping to grow
                        Startups, FinTech, and Tertiary Educational
                        Institutions. Kris is a transformational leader and ICT
                        champion with a passion for finding, grooming, and
                        coaching talent, and can navigate ambiguity within
                        multi-level and matrixed organizations.
                      </div>
                    </div>
                  </div>
                  <div className={styles.mrRazakParent}>
                    <img
                      className={styles.edwardD7maaa1Icon}
                      alt=""
                      src="/edward-d7maaa-1@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.edwardAbrokwah}>
                        Edward Abrokwah
                      </div>
                      <div className={styles.member}>Member</div>
                      <div className={styles.edwardHas20}>
                        Edward has 20+ years, first as a Technical Consultant
                        and currently as a Principal Economist within the
                        Ministry of Finance, Ghana. He has worked in various
                        capacities and divisions in the Ministry including the
                        Oil and Gas, Debt Management Division, Public
                        Infrastructure Investments Division, the Economic
                        Research, Forecasting Division, and the Research Desk of
                        the Tax Policy Unit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.managementTeam1}>
              <div className={styles.managementTeam2}>MANAGEMENT TEAM</div>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.baseParent}>
                    <img
                      className={styles.baseIcon}
                      alt=""
                      src="/base25@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Razak Awudulai
                      </div>
                      <div className={styles.groupCfo}>
                        Chief Executive Officer
                      </div>
                      <div className={styles.priscillaIsA}>
                        Razak is an accomplished business leader with 20+ Years
                        of experience in creating enabling environments and
                        building high- performance teams in both the public and
                        private sectors globally. (BSL, SPL, ISG, BDP, and
                        Agrospectrum)
                      </div>
                    </div>
                  </div>
                  <div className={styles.mrRazakParent}>
                    <img
                      className={styles.samOsewKwatiaMa98pa1Icon}
                      alt=""
                      src="/sam-osew-kwatia-ma98pa-1@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Samuel Osew-Kwatia
                      </div>
                      <div className={styles.groupCfo}>Group CFO</div>
                      <div className={styles.priscillaIsA}>
                        Samuel has 20+ years of professional experience in
                        finance, accounting, taxation, and banking in
                        multinational, regional, and local backgrounds in Ghana
                        and beyond. (BSL, SPL, ISG, BDP, and Agrospectrum)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.priscillaAbbanUubwrj1Parent}>
                    <img
                      className={styles.priscillaAbbanUubwrj1Icon}
                      alt=""
                      src="/priscilla-abban-uubwrj-1@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Priscilla Abban
                      </div>
                      <div
                        className={styles.groupCfo}
                      >{`Group Head - HR & Admin`}</div>
                      <div className={styles.priscillaIsA}>
                        Priscilla is a visionary HR Generalist with 20+ years of
                        experience in leading reports through a collaborative
                        management style and creating equitable opportunities
                        for underrepresented employee group across Ghana. (BSL,
                        SPL, ISG, BDP, and Agrospectrum)
                      </div>
                    </div>
                  </div>
                  <div className={styles.harrietEioxar1Parent}>
                    <img
                      className={styles.harrietEioxar1Icon}
                      alt=""
                      src="/harriet-eioxar-1@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Harriet Dodoo
                      </div>
                      <div className={styles.groupLegalcompliance}>
                        Group Legal/Compliance
                      </div>
                      <div className={styles.priscillaIsA}>
                        Harriet has extensive management and leadership
                        experience, altogether, over 10 years of experience in
                        non-profit, banking and finance, and legal practice.
                        (AMLRO, BSL, SPL, ISG, BDP, and Agrospectrum)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.mrRazakParent}>
                    <img
                      className={styles.loveStoneMamatahNk38mw1Icon}
                      alt=""
                      src="/love-stone-mamatah-nk38mw-1@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Lovestone Mamattah
                      </div>
                      <div className={styles.groupCfo}>Group CTO</div>
                      <div className={styles.priscillaIsA}>
                        Lovestone is an experienced professional with 25+ years
                        working in West Africa in the design, implementation,
                        and operations of technology solutions working in both
                        Enterprise and service provider environments.
                      </div>
                    </div>
                  </div>
                  <div className={styles.baseParent}>
                    <img
                      className={styles.nanaAduhene1Toje7z1Icon}
                      alt=""
                      src="/nana-aduhene-1-toje7z-1@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Nana Kwabena Aduhene
                      </div>
                      <div className={styles.groupCfo}>Group Head - PMO</div>
                      <div className={styles.priscillaIsA}>
                        Nana is a seasoned senior Telecommunications and IT
                        executive with 18+ years of experience involved in
                        projects covering end-to-end telecom functions and
                        infrastructure management in Africa and beyond
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.mrRazakParent}>
                    <img
                      className={styles.castroSagwfp1Icon}
                      alt=""
                      src="/castro-sagwfp-1@2x.png"
                    />
                    <div className={styles.castroAntwiDansoParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Castro Antwi-Danso
                      </div>
                      <div className={styles.groupLegalcompliance}>
                        General Manager (AgroSpectrum)
                      </div>
                      <div className={styles.priscillaIsA}>
                        Castro is an experienced expert with 20+ years
                        experience working in IT and agricultural industry. His
                        extensive experience, makes him an invaluable asset in
                        project management, sales marketing, finance and
                        Agriculture (AgroSpectrum)
                      </div>
                    </div>
                  </div>
                  <div className={styles.mrRazakParent}>
                    <img
                      className={styles.richardAdiaseTksps51Icon}
                      alt=""
                      src="/richard-adiase-tksps5-1@2x.png"
                    />
                    <div className={styles.castroAntwiDansoParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Richard Adiase
                      </div>
                      <div className={styles.groupCfo}>
                        Manager, Enterprise Business
                      </div>
                      <div className={styles.priscillaIsA}>
                        Richard is an Enterprise professional with 15+ years of
                        building business units from scratch, developing,
                        launching, building strong brands, and driving
                        cross-functional teams to execute key project
                        deliverables (Spectrum Fibre)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.mrRazakParent}>
                    <img
                      className={styles.morenikeAyodeleKvka9n1Icon}
                      alt=""
                      src="/morenike-ayodele-kvka9n-1@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Morenike Ayodele
                      </div>
                      <div className={styles.groupCfo}>
                        Manager, Marketing and Corp. Communications
                      </div>
                      <div className={styles.morenikeIsAn}>
                        Morenike is an accomplished and enthusiastic
                        professional with 6+ years of managing corporate
                        communications, marketing, and public relations
                        functions.
                      </div>
                    </div>
                  </div>
                  <div className={styles.josephYawsonZ33al81Parent}>
                    <img
                      className={styles.josephYawsonZ33al81Icon}
                      alt=""
                      src="/joseph-yawson-z33al8-1@2x.png"
                    />
                    <div className={styles.razakAwudulaiParent}>
                      <div className={styles.samuelOsewKwatia}>
                        Joseph Yawson
                      </div>
                      <div className={styles.groupCfo}>
                        Head, Deployment and maintenance
                      </div>
                      <div
                        className={styles.priscillaIsA}
                      >{`Joseph is an accomplished professional with 18+ years of experience in Information Systems, Technology, and Project Management. He holds diplomas in Information Systems Management (IMIS, UK), a BSc (Hons) in Computing & Information Systems from the University of Portsmouth, UK, and an M.A. in Information & Telecommunication Technology from KAIST. Currently, he serves as the Technical Deployment Manager at Broadspectrum Ghana Limited, leading project planning and quality management. (ISG)`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerComponent}>
          <div className={styles.component1}>
            <div className={styles.frameParent7}>
              <div className={styles.download5Parent}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-5301@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-5311@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture151@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color151@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-3151@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images14@2x.png"
                />
                <img
                  className={styles.download6Icon}
                  alt=""
                  src="/download-6161@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-1151@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download151@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-1151@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-2151@2x.png"
                />
              </div>
              <div className={styles.download5Group}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-532@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-533@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture16@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color16@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-316@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images15@2x.png"
                />
                <img
                  className={styles.download6Icon}
                  alt=""
                  src="/download-617@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-116@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download16@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-116@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-216@2x.png"
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
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.razakAwudulaiParent}>
                    <div className={styles.nowWere2}>business</div>
                    <div className={styles.frameParent10}>
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
                          src="/line-118@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent11}>
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
                <div className={styles.frameParent12}>
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
              <div className={styles.frameParent13}>
                <button className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/arrow-10.svg"
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
                        className={styles.groupIcon}
                        alt=""
                        src="/group6.svg"
                      />
                    </div>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector12.svg"
                      />
                    </div>
                    <div className={styles.frame}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector13.svg"
                      />
                    </div>
                    <div className={styles.vectorContainer}>
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
          <div className={styles.frameParent14}>
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

export default ManagementTeam;
