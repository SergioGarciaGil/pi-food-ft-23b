import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, filterCreated } from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import style from "./Home.module.css";
import LinkTitle from "./Card.module.css";
import Paginado from "./Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  // const allDiets = useSelector((state) => state.diets);

  const [currentPage, setCurrentPage] = useState(1); //creamos un stado local para setear la paginacion o pagina actual
  const [recipesPerPage, setRecipesPerPage] = useState(8); //creamos un stado local para setear la cantidad de recetas por pagina
  const indexOfLastRecipe = currentPage * recipesPerPage; //mis personajes por pagina
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; //aqui restamos la cantidad de personajes por pagina y me da 0
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  ); //aqui hacemos un slice(cortamos porcion ) de los personajes de la pagina actual
  //agregamos y tomamos solamente el indice del primer personaje y el indice del ultimo personaje

  const paginado = (pageNumber) => {
    // me ayuda al renderizado del paginado
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
    // dispatch(getTypeOfDiet());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.fixed}>
          <div className={style.navbar}>
            <Link to="/recipe">
              <button className={style.allRecipes}>Crear Recepe</button>
            </Link>

            <button
              className={style.allRecipes}
              onClick={(e) => handleClick(e)}
            >
              All recipes
            </button>
            <div className={style.contentSelect}>
              <select>
                <option value="">Buscar receta por nombre</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
            <div className={style.contentSelect}>
              <select>
                <option value="">Orden alfabetico</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </div>
            <div className={style.contentSelect}>
              <select>
                <option value="">Ordenar por puntuacion</option>
                <option value="mayor">Mayor</option>
                <option value="menor">Menor</option>
              </select>
            </div>
            <div className={style.contentSelect}>
              <select onChange={(e) => handleFilterCreated(e)}>
                <option value="" hidden>
                  filtrar creados
                </option>
                <option value="all">Todos</option>
                <option value="created">Creados</option>
              </select>
            </div>
            <select></select>
          </div>
        </div>

        <div className={style.mainCard}>
          {currentRecipes &&
            currentRecipes.map((el) => {
              return (
                <div key={el.id}>
                  <Link to={"home" + el.id} className={LinkTitle.linkTitle}>
                    <Card
                      id={el.id}
                      key={el.id}
                      title={el.title}
                      image={el.image}
                      diets={el.diets.join(", ")}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
        <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}
