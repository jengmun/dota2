import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeroImg.module.css";

const HeroImg = (props) => {
  return (
    <div>
      <NavLink
        to={{ pathname: `/heroes/${props.name}`, state: { data: props.data } }}
        // state must be object
      >
        <div
          className={styles.heroImg}
          style={{
            backgroundImage: `url(https://steamcdn-a.akamaihd.net${props.image})`,
          }}
        >
          <div>
            <h3>
              {props.attr}
              {props.name}
            </h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default HeroImg;
