import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./arrow.module.css";

const Arrow: NextPage = () => {
  const router = useRouter();

  const onNavRightsvgFillContainerClick = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  const onPath2IconClick = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  const onNavRightsvgFillContainer1Click = useCallback(() => {
    router.push("/blog-page2");
  }, [router]);

  const onPath2Icon2Click = useCallback(() => {
    router.push("/blog-page2");
  }, [router]);

  return (
    <div className={styles.arrow}>
      <div
        className={styles.navRightsvgFill}
        onClick={onNavRightsvgFillContainerClick}
      >
        <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
        <img
          className={styles.path2Icon}
          alt=""
          src="/path-2.svg"
          onClick={onPath2IconClick}
        />
      </div>
      <b className={styles.faq}>
        <span className={styles.n}>n</span>
        <span className={styles.avigateOurOther}>
          AVIGATE OUR OTHER BLOG PAGES
        </span>
      </b>
      <div
        className={styles.navRightsvgFill1}
        onClick={onNavRightsvgFillContainer1Click}
      >
        <img className={styles.vectorIcon1} alt="" src="/vector16.svg" />
        <img
          className={styles.path2Icon1}
          alt=""
          src="/path-21.svg"
          onClick={onPath2Icon2Click}
        />
      </div>
    </div>
  );
};

export default Arrow;
