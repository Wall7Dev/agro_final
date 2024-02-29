import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./leader-sections.module.css";

const LeaderSections: NextPage = () => {
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

  const onFrameButtonClick = useCallback(() => {
    router.push("/management-team");
  }, [router]);

  const onGETINTOUCHClick = useCallback(() => {
    router.push("/management-team");
  }, [router]);

  return (
    <section className={styles.leadersections}>
      <div className={styles.leadershipteamParent}>
        <div className={styles.leadershipteam} data-animate-on-scroll>
          <h1 className={styles.leadershipTeam} data-animate-on-scroll>
            Leadership Team
          </h1>
        </div>
        <div className={styles.cardCaurosol}>
          <div className={styles.card1}>
            <div className={styles.razakAwudulaiWrapper} data-animate-on-scroll>
              <div className={styles.razakAwudulai}>
                <img className={styles.baseIcon} alt="" src="/base12@2x.png" />
                <div className={styles.razakAwudulaiInner}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.block1Parent}>
                      <div className={styles.block1}>
                        <div className={styles.rectangle} />
                      </div>
                      <div className={styles.frameParent}>
                        <div className={styles.razakAwudulaiContainer}>
                          <div className={styles.razakAwudulai1}>
                            Razak Awudulai
                          </div>
                        </div>
                        <div className={styles.chiefExecutiveOfficer}>
                          Chief Executive Officer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.razakIsAn}
              data-animate-on-scroll
            >{`Razak is an accomplished business leader with 20+ years of experience in creating enabling environments and building high-performance teams. He is passionate about the technology ecosystem and has helped to grow many tech businesses both in the public and private sectors globally. More specifically, `}</div>
          </div>
          <div className={styles.card1}>
            <div
              className={styles.castroDansoTeamWrapper}
              data-animate-on-scroll
            >
              <div className={styles.castroDansoTeam}>
                <img className={styles.baseIcon1} alt="" src="/base13@2x.png" />
                <div className={styles.castroDansoTeamInner}>
                  <div className={styles.frameContainer}>
                    <div className={styles.block1Group}>
                      <div className={styles.block11}>
                        <div className={styles.rectangle1} />
                      </div>
                      <div className={styles.frameGroup}>
                        <div className={styles.razakAwudulaiContainer}>
                          <div className={styles.nanaDwenmoh}>Nana Dwenmoh</div>
                        </div>
                        <div className={styles.chairman}>Chairman</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.nanaHas20}
              data-animate-on-scroll
            >{`Nana has 20+ years of local and international expertise in banking in various management roles across several countries in Africa and the UK. Nana has successfully led the team in significantly growing market share and profitability across the Bank’s Personal and Business Banking franchises. In January 2021, Nana was appointed Managing Director of UMB Bank. `}</div>
          </div>
        </div>
        <button
          className={styles.getInTouchWrapper}
          onClick={onFrameButtonClick}
          data-animate-on-scroll
        >
          <div className={styles.getInTouch} onClick={onGETINTOUCHClick}>
            See Full Team
          </div>
        </button>
        <img className={styles.frameChild} alt="" src="/vector-26@2x.png" />
      </div>
    </section>
  );
};

export default LeaderSections;
