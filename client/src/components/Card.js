import React from "react";

export default function Card({ title, image, diets }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="" width="200px" height="250px" />
      <h5>{diets}</h5>
    </div>
  );
}
