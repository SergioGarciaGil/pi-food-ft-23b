import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";

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
      <Link to="/recipe">Crear receta</Link>
      <h1>Aguante</h1>
      <button onClick={(e) => handleClick(e)}>
        Volver a cargar todas las recetas
      </button>
      <div>
        <select>
          <option value="">Buscar receta por nombre</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
      <div>
        <select>
          <option value="">Orden alfabetico</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
      <div>
        <select>
          <option value="">Ordenar por puntuacion</option>
          <option value="mayor">Mayor</option>
          <option value="menor">Menor</option>
        </select>
      </div>
      <div>
        <select>
          <option value="">filtrar creados</option>
          <option value="all">ALL</option>
          <option value="create">Create</option>
          <option value="api"></option>
        </select>
      </div>

      {allRecipes?.map((el) => {
        return (
          <div key={el.id}>
            {/* <Link to={"home" + el.id}> */}
            <Card
              key={el.id}
              title={el.title}
              image={el.image}
              tipos={el.diets}
            />
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}
