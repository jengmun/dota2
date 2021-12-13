import React, { useEffect, useState } from "react";
import HeroImg from "../components/hero/HeroImg";
import styles from "./Heroes.module.css";

const Heroes = () => {
  const [data, setData] = useState([]);

  const fetchHeroes = async () => {
    const res = await fetch("https://api.opendota.com/api/heroStats");
    const heroesData = await res.json();
    const sortedData = heroesData.sort(function (a, b) {
      const nameA = a.localized_name;
      const nameB = b.localized_name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setData(sortedData);
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <div className={styles.heroes}>
      <div className={styles.container}>
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
