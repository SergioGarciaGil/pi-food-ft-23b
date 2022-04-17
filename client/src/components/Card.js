import React from "react";

export default function Card({ title, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="" width="200px" height="250px" />
      <h5>{}</h5>
    </div>
  );
}
