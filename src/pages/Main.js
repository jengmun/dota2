import React from "react";
import main from "../images/main.jpg";

const Main = () => {
  return (
    <div>
      <a href="https://www.dota2.com/home" target="_blank">
        <img src={main} style={{ width: "95vw", margin: 0, padding: 0 }} />
      </a>
    </div>
  );
};

export default Main;
