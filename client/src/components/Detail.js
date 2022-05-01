import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { id } = useParams();

  const detailRecipe = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (
    <div className={style.containerPrincipal}>
      <div>
        <div>
          {detailRecipe.length === 0 ? (
            <p>Loading...o</p>
          ) : (
            detailRecipe.length > 0 && (
              <div>
                <div>
                  <h1 className={style.titleDetail}>{detailRecipe[0].title}</h1>
                </div>
                <img
                  className={style.img}
                  src={detailRecipe[0].image}
                  alt="img not found"
                  width="400px"
                  height="250px"
                />

                <div>
                  <div className={""}>
                    <div className={style.puntuacion}>
                      <h2 className={style.score}>
                        <p>
                          Score: {detailRecipe[0].aggregateLikes}
                        </p>
                      </h2>
                      <h2>
                        <p>
                          Health Score: {detailRecipe[0].healthScore + " "}
                        </p>
                      </h2>
                    </div>
                  </div>
                  <div className={style.fondoType}>
                    <h2 className={style.titleText}>
                      Types of diets:

                    </h2>
                    <h2 className={style.parrafoText}>
                      {!detailRecipe[0].createdInDb
                        ? detailRecipe[0].diets + " "
                        : detailRecipe[0].diets.map((e, index) => <p key={index}>{e.name + ", "}</p>)}
                    </h2>
                    <h2 className={style.titleText}>Type of Dish:</h2>
                    <h2 className={style.parrafoText}>{detailRecipe[0].dishTypes}</h2>
                  </div>
                  <h2 className={style.titleText}>Summary:</h2>
                  <h2 className={style.parrafoText} >
                    {detailRecipe[0]
                      ? detailRecipe[0].summary.replace(/<[^>]*>?/g)
                      : "no summary"}
                  </h2>
                  <h2 className={style.titleText}>Instructions:</h2>

                  <h2 className={style.parrafoText}>
                    {detailRecipe[0].createdInDb //si la receta esta en la base de datos
                      ? detailRecipe[0].analyzedInstructions
                      : detailRecipe[0].analyzedInstructions.map((e) =>
                        e.steps.map((e, index) => (
                          <ul key={index}>
                            <li key={e.number}>{e.step}</li>
                          </ul>
                        ))
                      )}
                  </h2>
                </div>

                <Link to="/home">
                  <button className={style.btnVolver}>Volver</button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
