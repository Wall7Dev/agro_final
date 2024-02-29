import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import Component from "../components/component";
import Climate from "../components/climate";
import Aggregation from "../components/aggregation";
import FOOTERCOMPONENT1 from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t1";
import styles from "./product-services.module.css";

const ProductServices: NextPage = () => {
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

  return (
    <>
      <div className={styles.productservices}>
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
                      src="/clip-path-group51@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group61@2x.png"
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
                    src="/logo21@2x.png"
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
                      className={styles.linkPricing1}
                      onClick={onLinkPricing2Click}
                    >{`Product & Services`}</div>
                    <img
                      className={styles.producAndServicesChild}
                      alt=""
                      src="/line-123@2x.png"
                    />
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
        <section className={styles.allherops}>
          <Component />
        </section>
        <div className={styles.climate}>
          <div className={styles.frame1082Parent}>
            <img
              className={styles.frame1082}
              alt=""
              src="/frame-108-2@2x.png"
            />
            <div className={styles.subsidyProgramParent}>
              <div className={styles.subsidyProgram}>
                <p className={styles.subsidyProgram1}>
                  <b className={styles.subsidy}>Subsidy</b>
                  <span> Program</span>
                </p>
                <p className={styles.p}></p>
              </div>
              <div className={styles.theSubsidyIs}>
                The Subsidy is a 7step process; which begins with Registration
                or on-boarding of farmers who are not already registered in the
                system, after which there is the establishment of the subsidy
                rate and allocation to beneficiaries.
              </div>
              <div className={styles.theSubsidyIs}>
                Thereafter, a reconciliation and settlement system is also
                established to determine how beneficiaries will get access to
                the inputs. The subsidy module registers input supply chain
                members or providers like wholesalers and retailers to track the
                redemption process.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.climate1}>
          <div className={styles.frame1082Parent}>
            <div className={styles.subsidyProgramParent}>
              <div className={styles.farmerKyc}>
                <p className={styles.subsidyProgram1}>
                  <span>{`Farmer `}</span>
                  <b className={styles.subsidy}>KYC</b>
                  <span className={styles.span}></span>
                </p>
              </div>
              <div
                className={styles.theSubsidyIs}
              >{`This is also known as the farmer registration process. The term KYC refers to know your customer. The farmer KYC takes the farmer through an on-boarding process or registration where data and biometric entries are taken to allow the farmers become integrated into a client’s system. `}</div>
              <div className={styles.theSubsidyIs}>
                It was first used by the Ministry of Food and Agriculture(MOFA)
                for the E- Agric programme for the 5 northern regions of Ghana.
                The application is a mobile and web based software, which all
                other institutions can adopt to collect data devoid of errors.
              </div>
            </div>
            <img
              className={styles.frame1082}
              alt=""
              src="/frame-108-21@2x.png"
            />
          </div>
        </div>
        <Climate
          frame1082="/frame-108-22@2x.png"
          inputCredit="Input-Credit"
          managementSystem="  management System 
"
          theInputCreditManagementS="The input credit management system allows VCEs and Aggregators to give farmers access to input on credit and pay back with produce. This product digitalises the input-credit process while promoting efficiency and productivity on the part of the farmer. "
          theProductAllowsForEasyDo="The product allows for easy documentation and management of inputs given at the beginning of the farming season; expected returns, provides farmers with agronomic advice, allows agents to monitor farmers progress during the season and adherence to timely schedules of farm practices."
        />
        <Aggregation />
        <Climate
          frame1082="/frame-108-24@2x.png"
          inputCredit="Climate"
          managementSystem=" Smart Agric program"
          theInputCreditManagementS="This solution by Agrospectrum limited focuses on providing climate friendly agricultural information, predict weather, disaster risk mitigation and agronomic advice through channels like Interactive Voice Recognition (IVR), a call centre and SMS a to farmers intermittently in various languages."
          theProductAllowsForEasyDo="Currently, it is run in 9 local languages, English and French. It currently provides cultivation advice for twelve crops with plans underway to integrate many other crops."
          propHeight="561px"
          propHeight1="unset"
        />
        <div className={styles.climate1}>
          <div className={styles.frame1082Parent}>
            <div className={styles.subsidyProgramParent}>
              <div className={styles.farmerKyc}>
                <p className={styles.subsidyProgram1}>
                  <b className={styles.subsidy}>{`Farmer `}</b>
                  <span>registration</span>
                </p>
              </div>
              <div className={styles.theSubsidyIs}>
                The farmer registration application is a mobile and web based
                software, which all other institutions can adopt to collect data
                devoid of errors. The registration process starts registering
                basic member data digitally; capturing their photo, fingerprint
                details, digital signatures,
              </div>
              <div className={styles.theSubsidyIs}>
                This solution has been used by MOFA in registering over 1.6
                million farmers in the five northern regions.
              </div>
            </div>
            <img
              className={styles.frame1082}
              alt=""
              src="/frame-108-25@2x.png"
            />
          </div>
        </div>
        <FOOTERCOMPONENT1 />
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

export default ProductServices;
