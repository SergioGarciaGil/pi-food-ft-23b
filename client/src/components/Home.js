import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import style from "./Home.module.css";
import LinkTitle from "./Card.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  return (
    <div>
      <div>
        <div className={style.navbar}>
          <Link to="/recipe">
            <button className={style.allRecipes}>Crear Recepe</button>
          </Link>

          <button className={style.allRecipes} onClick={(e) => handleClick(e)}>
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
            <select>
              <option value="">filtrar creados</option>
              <option value="all">ALL</option>
              <option value="create">Create</option>
              <option value="api"></option>
            </select>
          </div>
        </div>
      </div>

      <div className={style.mainCard}>
        {allRecipes &&
          allRecipes?.map((el) => {
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
    </div>
  );
}
