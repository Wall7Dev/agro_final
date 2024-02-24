import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import Allnavs1 from "../components/allnavs1";
import { useRouter } from "next/router";
import Arrow from "../components/arrow";
import FOOTERCOMPONENT11 from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t11";
import styles from "./blog-page3.module.css";

const BlogPage3: NextPage = () => {
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

  const onFrameContainerClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  return (
    <main className={styles.blogpage1} id={`7projects&partermain`}>
      <Allnavs1 />
      <section className={styles.section6partners}>
        <div className={styles.frameParent}>
          <div className={styles.hotWrapper}>
            <div className={styles.hot}>Hot</div>
          </div>
          <div className={styles.hotWrapper}>
            <div className={styles.hot}>Blogs</div>
          </div>
          <div className={styles.hotWrapper}>
            <div className={styles.hot}>News</div>
          </div>
        </div>
        <div className={styles.agrospectrumLimitedWinsTwoParent}>
          <div className={styles.agrospectrumLimitedWins}>
            Agrospectrum Limited wins two prestigious awards at Africa
            Agricbusiness Awards 2023
          </div>
          <div className={styles.november232023Wrapper}>
            <div className={styles.november232023}>November 23, 2023</div>
          </div>
        </div>
        <img
          className={styles.mrCastroAwards1}
          alt=""
          src="/mr-castro-awards-13@2x.png"
        />
        <div className={styles.agrospectrumLimitedAContainer}>
          <p className={styles.agrospectrumLimitedA}>
            Agrospectrum Limited, a prominent player in the agricultural sector,
            achieved notable recognition by clinching two prestigious awards at
            the Africa Agribusiness Awards 2023, held at the Accra International
            Conference in Accra on November 22, 2023.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            The company received the distinguished titles of "Outstanding
            African Agribusiness Data Management Company of the Year" and
            "African Agritech Company of the Year" during the awards ceremony,
            which took place as part of the 6th edition of Agrofood and
            Plastprintpack Ghana 2023. This significant event, occurring from
            November 21 to 23, served as a vital business platform for the
            Ghanaian industry and was organized by Fairtrade Messe, the German
            trade show specialists, in collaboration with their local partner
            Geovision.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Agrospectrum's leadership team expressed deep gratitude for the
            honors bestowed upon them and reaffirmed the company's unwavering
            commitment to advancing the agricultural sector. Castro Antwi-Danso,
            the General Manager of Agrospectrum Limited, commented on the
            achievement, stating, "This award is a testament to the hard work
            and dedication of the entire Agrospectrum team. We are honored to be
            recognized for our efforts in transforming agriculture and
            contributing to sustainable development in Africa."
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Antwi-Danso emphasized that Agrospectrum would persist in setting
            high standards in agribusiness data management and reiterated the
            company's mission to foster positive change, connect futures, and
            reshape the agricultural landscape for a more sustainable and
            inclusive future.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            These accolades underscore Agrospectrum's dedication to transforming
            traditional agricultural paradigms and empowering stakeholders
            across the agricultural value chain. The company's primary focus on
            Africa reflects its commitment to creating an inclusive marketplace
            that caters to the diverse needs of farmers, government agencies,
            financial institutions, and service providers.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Agrospectrum's innovative solutions address challenges faced by the
            sector, facilitating seamless connections between farmers and
            markets, providing support services for farmer well-being,
            leveraging technology for informed decision-making, and promoting
            financial inclusion and access to inputs. The awards recognize the
            company's commitment to sustainability and innovation, particularly
            its emphasis on climate-smart agriculture to help farmers adapt to
            changing weather patterns.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            By employing diverse delivery channels, including SMS, voice
            messages, and other technological means, Agrospectrum ensures
            widespread access to its services. The company's recognition as the
            Outstanding African Agribusiness Data Management Company of the Year
            and African Agritech Company of the Year highlights its pivotal role
            as a catalyst for positive change in the agricultural landscape.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            As an affiliate of Broadspectrum Limited, Agrospectrum remains
            committed to mainstreaming its agricultural technology services to
            enhance the lives of all agricultural value chain actors.
          </p>
        </div>
        <div className={styles.gradientmsgWrapper}>
          <div className={styles.gradientmsg}>
            <img
              className={styles.gradientmsgChild}
              alt=""
              src="/group-2061@2x.png"
            />
            <div className={styles.weSupportAgribusinessIndustParent}>
              <b
                className={styles.weSupportAgribusinessContainer}
                data-animate-on-scroll
              >
                <p className={styles.blankLine}>
                  We support Agribusiness Industry
                </p>
                <p className={styles.blankLine}>To Utilize modern Equipments</p>
                <p className={styles.blankLine}>for a Better Result.</p>
              </b>
              <div
                className={styles.vectorParent}
                onClick={onFrameContainerClick}
              >
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/arrow-96@2x.png"
                />
                <div className={styles.viewProducts}>view produCts</div>
              </div>
            </div>
          </div>
        </div>
        <Arrow />
      </section>
      <FOOTERCOMPONENT11 />
    </main>
  );
};

export default BlogPage3;
