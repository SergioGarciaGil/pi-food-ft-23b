import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  filterCreated,
  orderByName,
  orderByLikes,
  getTypeOfDiet,
  filterByDiets,
} from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import style from "./Home.module.css";

import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const allDiets = useSelector((state) => state.types);


  const [currentPage, setCurrentPage] = useState(1); //creamos un stado local para setear la paginacion o pagina actual
  const [recipesPerPage,] = useState(8); //creamos un stado local para setear la cantidad de recetas por pagina
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
  const nav = useNavigate()
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getTypeOfDiet());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  const [, setOrden] = useState("");
  function HandleSortName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`ordenado ${e.target.value}`);
  }
  function handleFilterDiets(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(filterByDiets(e.target.value));
  }


  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }

  const [, setOrderLike] = useState("");
  function handleOrderByLikes(e) {
    e.preventDefault();
    dispatch(orderByLikes(e.target.value));
    setCurrentPage(1);
    setOrderLike(`ordenado ${e.target.value}`);
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
            <div>
              <SearchBar />
            </div>
            <div className={style.contentSelect}>
              <select onChange={(e) => handleFilterDiets(e)}>

                <option key={0} value="aLL">Tipos de dietas</option>
                {allDiets.sort((a, b) => {
                  if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
                })


                  .map((e) => <option key={e.id} value={e.name}>{e.name}</option>)}


              </select>
            </div>
            <div className={style.contentSelect}>
              <select onClick={(e) => HandleSortName(e)}>
                <option value="">Orden alfabetico</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </div>
            <div className={style.contentSelect}>
              <select onClick={(e) => handleOrderByLikes(e)}>
                <option value="">Ordenar por Score</option>
                <option value="asc">Highest Score</option>
                <option value="desc">Lowest Score</option>
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
          </div>
        </div>

        <div className={style.mainCard}>



          {
            currentRecipes.map((el) => {

              return (
                <div key={el.id} onClick={() => nav("/detail/" + el.id)}>

                  <Card
                    id={el.id}
                    key={el.id}
                    title={el.title}
                    image={el.image}
                    diets={el.diets.map((el) => el.name ? el.name + ", " : el)}//aqui hacemos un map para sacar los nombres de los tipos de dieta
                    likes={el.aggregateLikes}

                  />

                </div>
              )
            })


          }

        </div>

        <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
        />
      </div>

    </div >
  );
}
