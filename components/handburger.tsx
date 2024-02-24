import type { NextPage } from "next";
import { useState, useCallback } from "react";
import DrwawerMenu from "./drwawer-menu";
import PortalDrawer from "./portal-drawer";
import styles from "./handburger.module.css";

const Handburger: NextPage = () => {
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.handburger} onClick={openDrwawerMenu}>
        <div className={styles.handburgerChild} />
        <div className={styles.handburgerChild} />
        <div className={styles.handburgerInner} />
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

export default Handburger;
