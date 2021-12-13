import React from "react";
import main from "../images/main.jpg";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <a href="https://www.dota2.com/home" target="_blank">
        <img src={main} alt="main" />
      </a>
    </div>
  );
};

export default Main;
