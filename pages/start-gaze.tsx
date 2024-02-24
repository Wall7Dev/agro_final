import type { NextPage } from "next";
import styles from "./start-gaze.module.css";

const StartGaze: NextPage = () => {
  return (
    <div className={styles.startGaze}>
      <div className={styles.startGazeChild} />
      <img className={styles.startGazeItem} alt="" />
      <img className={styles.startGazeInner} alt="" />
      <div className={styles.lineDiv} />
    </div>
  );
};

export default StartGaze;
