import type { NextPage } from "next";
import styles from "./aggregation.module.css";

const Aggregation: NextPage = () => {
  return (
    <section className={styles.aggregation}>
      <div className={styles.ladycard}>
        <div className={styles.frameParent}>
          <div className={styles.aggregationParent}>
            <b className={styles.aggregation1}>
              <p className={styles.aggregation2}>Aggregation</p>
            </b>
            <div className={styles.theAggregationModule}>
              The Aggregation module looks at ensuring convenience in the
              produce aggregation process. It allows aggregators to purchase
              produce from both Farmers and community aggregators at the market
              rate. The module uses an internet- of things (IOT) system.
            </div>
            <div
              className={styles.theAggregationModule}
            >{`Thus it is integrated with hardware components to ensure that both the quality and quantity meets the right pricing. This solution is linked to the Broadspectrum digital payments platform which is integrated with Telco’s to facilitate the payments been made to the farmers. `}</div>
          </div>
          <img className={styles.frame1082} alt="" src="/frame-108-2@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default Aggregation;
