"use client";

import styles from "./styles.module.scss";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [mode, setMode] = useState<string>("light");
  const isDarkMode = mode === "dark";
  const isLightMode = mode === "light";

  return (
    <nav className={styles.headerContainer}>
      <h4>SOTR</h4>
      <div className={styles.modes}>
        <div
          className={`${styles.darkModeContainer} ${styles.mode} ${isDarkMode && styles.selected}`}
          onClick={() => setMode("dark")}
        >
          <IoMoonOutline className={styles.icons} />
        </div>
        <div
          className={`${styles.lightModeContainer} ${styles.mode} ${isLightMode && styles.selected}`}
          onClick={() => setMode("light")}
        >
          <IoMdSunny className={styles.icons} />
        </div>
      </div>
    </nav>
  );
}
