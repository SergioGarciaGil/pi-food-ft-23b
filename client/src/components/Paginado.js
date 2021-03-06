import React from "react";
import style from "./Paginado.module.css";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    //math.ceil redondea todos las recetas sobre todas las recetas que tengo por  pagina
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className={style.ul}>
          {pageNumbers &&
            pageNumbers.map((number) => (
              <li key={number}>
                <a onClick={() => paginado(number)}>{number}</a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
