import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./c-t-a.module.css";

const CTA: NextPage = () => {
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

  const onArrowIconClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onViewProduCtsTextClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  return (
    <div className={styles.cta}>
      <div className={styles.gradientmsgWrapper}>
        <div className={styles.gradientmsg}>
          <img
            className={styles.gradientmsgChild}
            alt=""
            src="/group-206@2x.png"
            data-animate-on-scroll
          />
          <div className={styles.weSupportAgribusinessIndustParent}>
            <b
              className={styles.weSupportAgribusinessContainer}
              data-animate-on-scroll
            >
              <p
                className={styles.inTheHeart}
              >{`We support Agribusiness Industry To Utilize modern Equipments `}</p>
              <p className={styles.inTheHeart}>for a Better Result.</p>
            </b>
            <div
              className={styles.vectorParent}
              onClick={onFrameContainer4Click}
            >
              <img
                className={styles.arrowIcon}
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
      <div className={styles.projectArrow}>
        <div className={styles.base} />
      </div>
    </div>
  );
};

export default CTA;
