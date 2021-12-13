import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  const location = useLocation();
  const { data } = location.state;

  const baseAttribute =
    data.primary_attr.toLowerCase() === "str"
      ? data.base_str
      : data.primary_attr.toLowerCase() === "agi"
      ? data.base_agi
      : data.base_int;

  return (
    <div className={styles.hero}>
      <img src={`https://steamcdn-a.akamaihd.net${data.img}`}></img>
      <h3>{data.primary_attr.toUpperCase()}</h3>
      <h1>{data.localized_name.toUpperCase()}</h1>

      <h3>ATTACK TYPE</h3>
      <h3>{data.attack_type.toUpperCase()}</h3>
      <div className={styles.stats}>
        <ul>
          <li>
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
              width="20px"
            />
            Strength: <span>{data.base_str}</span>
          </li>
          <li>
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
              width="20px"
            />
            Agility: <span>{data.base_agi}</span>
          </li>
          <li>
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
              width="20px"
            />
            Intelligence: <span>{data.base_int}</span>
          </li>
          ATTRIBUTES
        </ul>

        <ul>
          ATTACK:
          <li>
            Base Attack:{" "}
            <span>
              {`
            ${data.base_attack_min + baseAttribute} - 
            ${data.base_attack_max + baseAttribute}`}
            </span>
          </li>
          <li>
            Attack Rate: <span>{data.attack_rate}</span>
          </li>
          <li>
            Attack Range: <span>{data.attack_range}</span>
          </li>
          {data.projectile_speed !== 0 && (
            <li>
              Projectile Speed: <span>{data.projectile_speed}</span>
            </li>
          )}
        </ul>

        <ul>
          DEFENSE:
          <li>
            Base Armour: <span>{data.base_armor + data.base_agi / 6}</span>
          </li>
          <li>
            Magic Resistance: <span>{data.base_mr}%</span>
          </li>
        </ul>

        <ul>
          MOBILITY:
          <li>
            Movement Speed: <span>{data.move_speed}</span>
          </li>
        </ul>

        <ul>
          {data.roles.map((role) => {
            return <li>{role}</li>;
          })}
          ROLES
        </ul>
      </div>
    </div>
  );
};

export default Hero;
