import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Hero = () => {
  // const params = useParams();

  const location = useLocation();
  const { data } = location.state;

  //localized_name,  img, primary_attr, attack_type, roles

  console.log(data);
  console.log("hero");

  return (
    <div>
      <img src={`https://steamcdn-a.akamaihd.net${data.img}`}></img>
      <h3>{data.primary_attr.toUpperCase()}</h3>
      <h1>{data.localized_name.toUpperCase()}</h1>

      <h3>ATTACK TYPE</h3>
      <h3>{data.attack_type.toUpperCase()}</h3>

      <ul>
        ATTRIBUTES:
        <li>
          Strength: <span>{data.base_str}</span>
        </li>
        <li>
          <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"></img>
          Agility: <span>{data.base_agi}</span>
        </li>
        <li>
          Intelligence: <span>{data.base_int}</span>
        </li>
      </ul>

      <ul>
        ATTACK:
        <li>
          Base Attack:{" "}
          <span>
            {data.base_attack_min} - {data.base_attack_max}
          </span>
        </li>
        <li>
          Attack Rate: <span>{data.attack_rate}</span>
        </li>
        <li>
          Attack Range: <span>{data.attack_range}</span>
        </li>
        <li>
          Projectile Speed: <span>{data.projectile_speed}</span>
        </li>
      </ul>

      <ul>
        DEFENSE:
        <li>
          Base Armour:
          <span>{data.base_armor}</span>
        </li>
      </ul>

      <ul>
        MOVEMENT:
        <li>
          Movement Speed:
          <span>{data.move_speed}</span>
        </li>
        <li>
          Turn Rate:
          <span>{data.turn_rate}</span>
        </li>
      </ul>

      <ul>
        {data.roles.map((role) => {
          return <li>{role}</li>;
        })}
      </ul>
    </div>
  );
};

export default Hero;
