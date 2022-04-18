import React from "react";
import style from "./Card.module.css";

export default function Card({ title, image, diets }) {
  return (
    <div className={style.card}>
      <h3 className={style.linkTitle}>{title}</h3>
      <img
        className={style.img}
        src={image}
        alt={`${title}`}
        width="200px"
        height="250px"
      />
      <p className={style.linkTitle}> {diets}</p>
    </div>
  );
}
