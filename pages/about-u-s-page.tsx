import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import Container from "../components/container";
import Leading from "../components/leading";
import LeaderSections from "../components/leader-sections";
import ContainerOurSubsidiar from "../components/container-our-subsidiar";
import FOOTERCOMPONENT2 from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t2";
import styles from "./about-u-s-page.module.css";

const AboutUSPage: NextPage = () => {
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
  return (
    <>
      <main className={styles.aboutusPage} id="6-aboutsUs-pageMain">
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
                    src="/logo1@2x.png"
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
                    <img
                      className={styles.aboutusChild}
                      alt=""
                      src="/line-1@2x.png"
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
        <section className={styles.herosec} id="aboutUs_herosection">
          <div
            className={styles.weAreTransformingAfricanAgWrapper}
            data-animate-on-scroll
          >
            <div
              className={styles.weAreTransformingContainer}
              data-animate-on-scroll
            >
              <p className={styles.weAreTransforming}>
                <span className={styles.weAre}>{`We are `}</span>
                <span className={styles.transforming}>Transforming</span>
              </p>
              <p className={styles.weAreTransforming}>
                <span className={styles.transforming}>{` `}</span>
                <span className={styles.africanAgricultureOne}>
                  {" "}
                  African agriculture, one innovation
                </span>
              </p>
              <p className={styles.atATime}>{` at a time. `}</p>
            </div>
          </div>
        </section>
        <Container />
        <Leading />
        <LeaderSections />
        <ContainerOurSubsidiar />
        <FOOTERCOMPONENT2 />
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

export default AboutUSPage;
