import React, { useEffect, useState } from "react";
import HeroImg from "../components/hero/HeroImg";
import styles from "./Heroes.module.css";

const Heroes = () => {
  const [data, setData] = useState([]);

  const fetchHeroes = async () => {
    const res = await fetch("https://api.opendota.com/api/heroStats");
    const heroesData = await res.json();
    setData(heroesData);
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <div className={styles.heroes}>
      {data.map((hero) => {
        return (
          <HeroImg
            name={hero.localized_name}
            image={hero.img}
            attr={hero.primary_attr}
            data={hero}
          ></HeroImg>
        );
      })}
    </div>
  );
};

{
  /* <Route path="/heroes/:hero" component={Hero} />  */
}
{
  /* should only nest routes if you want the parent route to still be visible */
}

export default Heroes;
