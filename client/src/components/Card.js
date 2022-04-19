import React from "react";
import style from "./Card.module.css";

export default function Card({ title, image, diets }) {
  return (
    <div className={style.mainContainer}>
      <div className={style.card}>
        <h5 className={style.linkTitle}>{title}</h5>
        <img
          className={style.img}
          src={image}
          alt={`${title}`}
          width="200px"
          height="250px"
        />
        <h6 className={style.linkTitle}> {diets}</h6>
      </div>
    </div>
  );
}
