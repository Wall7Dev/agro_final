import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./container-our-subsidiar.module.css";

const ContainerOurSubsidiar: NextPage = () => {
  const router = useRouter();
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

  const onGETINTOUCHClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onGETINTOUCH1Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onGETINTOUCH2Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onGETINTOUCH3Click = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  return (
    <section
      className={styles.containerOursubsidiar}
      id="AboutUS_ourSubsidiaries"
      data-animate-on-scroll
    >
      <div className={styles.greencardholder}>
        <div className={styles.greencardholderInner} data-animate-on-scroll>
          <div className={styles.affiliatesWrapper}>
            <h2
              className={styles.affiliates}
              id="ourSubsidiaries_h2"
              data-animate-on-scroll
            >
              Affiliates
            </h2>
          </div>
        </div>
        <div className={styles.greencardholderChild} data-animate-on-scroll>
          <div className={styles.bslMain1Parent}>
            <img
              className={styles.bslMain1Icon}
              alt=""
              src="/bslmain-1@2x.png"
            />
            <div className={styles.broadspectrumLimitedIs}>
              Broadspectrum Limited is a Ghanaian information and communication
              technology company that plays a key role in the technological
              industry. Broadspectrum has partnered with GCB Bank Limited to
              launch the first bank-backed mobile money service (G- Money) in
              Ghana.
            </div>
            <button className={styles.getInTouchWrapper}>
              <h3
                className={styles.getInTouch}
                onClick={onGETINTOUCHClick}
                data-animate-on-scroll
              >
                Learn More
              </h3>
            </button>
          </div>
        </div>
        <div className={styles.spectrumMain1Parent} data-animate-on-scroll>
          <img
            className={styles.spectrumMain1Icon}
            alt=""
            src="/spectrummain-1@2x.png"
          />
          <div className={styles.broadspectrumLimitedIs}>
            <p className={styles.connectingYouAt}>
              Connecting you at the speed of light
            </p>
            <p className={styles.connectingYouAt}>
              SFL has deployed and runs the second largest and most extensive
              nonpareil fibre optic backbone network in Ghana (+4000 Km).
            </p>
            <p className={styles.connectingYouAt}>
              We are exclusively the backbone Fibre infrastructure the Western
              Region and have 4000+km of Fibre optic cable
            </p>
          </div>
          <button className={styles.getInTouchContainer}>
            <h3
              className={styles.getInTouch1}
              onClick={onGETINTOUCH1Click}
              data-animate-on-scroll
            >
              Learn More
            </h3>
          </button>
        </div>
        <div className={styles.frameDiv} data-animate-on-scroll>
          <div className={styles.instanceWrapper}>
            <div className={styles.isgMain1Parent}>
              <img
                className={styles.isgMain1Icon}
                alt=""
                src="/isgmain-1@2x.png"
              />
              <div className={styles.broadspectrumLimitedIs}>
                <p
                  className={styles.connectingYouAt}
                >{`A well-resourced infrastructure service provider in IE & Telecoms
`}</p>
                <p className={styles.connectingYouAt}>
                  Infra Services Ghana Ltd (ISG) is an infrastructure service
                  company providing logistic, deployment, maintenance, and
                  support services in the power, telecommunication, and mining
                  support service sectors of Ghana. The services of ISG are
                  internally leveraged by all affiliates for efficiency and
                  control. Our Services include:
                </p>
                <p className={styles.connectingYouAt}>
                  - Fiber infrastructure Deployment
                </p>
                <p className={styles.connectingYouAt}>
                  - Microwave Radio Deployment
                </p>
                <p className={styles.connectingYouAt}>
                  - LAN infrastructure deployments
                </p>
                <p className={styles.connectingYouAt}>
                  - Data Centre build and management
                </p>
                <p className={styles.connectingYouAt}>
                  - Service Maintenance and Support
                </p>
              </div>
              <button className={styles.getInTouchFrame}>
                <h3 className={styles.getInTouch2} onClick={onGETINTOUCH2Click}>
                  Learn More
                </h3>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bdpMain1Parent} data-animate-on-scroll>
          <img className={styles.bdpMain1Icon} alt="" src="/bdpmain-1@2x.png" />
          <div className={styles.broadspectrumLimitedIs}>
            <p
              className={styles.connectingYouAt}
            >{`Fully integrated enhanced EPS provider with a 3-tier solution in EMI, Switching and UPG Broadspectrum Digital Payment Ltd (BDP) is an enhanced payment services provider and is licensed and regulated by the Central Bank of Ghana. BDP has deployed a 3- tier electronic solution covering payments, financial transactions switching and Electronic Money issuing solutions. BDP products offerings include Issuance of Electronic Wallets, Digital Banking, utility services, Remittances `}</p>
            <p
              className={styles.connectingYouAt}
            >{`– Send and receive Cash, Airtime, and Internet Data top-up, Utility/Bill pay, Bank Direct `}</p>
            <p
              className={styles.connectingYouAt}
            >{`–Bank 2 Wallet, Wallet 2 Bank, Bulk payment processing. B2B Payment Solutions development & Build `}</p>
            <p
              className={styles.connectingYouAt}
            >{`– Apps and USSD solutions. `}</p>
            <p
              className={styles.connectingYouAt}
            >{`BDP has deployed the widest power revenue collection application for the Northern Electricity Development `}</p>
            <p className={styles.connectingYouAt}>
              Company covering Nine (9) regions of Ghana and serving over 1.5
              million households.
            </p>
          </div>
          <button className={styles.frameButton}>
            <h3 className={styles.getInTouch3} onClick={onGETINTOUCH3Click}>
              Learn More
            </h3>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContainerOurSubsidiar;
