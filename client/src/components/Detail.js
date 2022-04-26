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
                          <h3>Score: {detailRecipe[0].aggregateLikes}</h3>
                        </p>
                      </h2>
                      <h2>
                        <p>
                          {
                            <h3>
                              Health Score: {detailRecipe[0].healthScore + " "}
                            </h3>
                          }
                        </p>
                      </h2>
                    </div>
                  </div>
                  <div className={style.fondoType}>
                    <h2 className={style.titleText}>
                      Types of diets:
                      {/* <p>{detailRecipe[0].diets.join(", ")}</p> */}
                    </h2>
                    <p>
                      {!detailRecipe[0].createdInDb
                        ? detailRecipe[0].diets + " "
                        : detailRecipe[0].diets.map((e) => e.name + ", ")}
                    </p>
                    <h2 className={style.titleText}>Type of Dish:</h2>
                    <p>{detailRecipe[0].dishTypes}</p>
                  </div>
                  <h2 className={style.titleText}>Summary:</h2>
                  <p className={""}>
                    {detailRecipe[0]
                      ? detailRecipe[0].summary.replace(/<[^>]*>?/g)
                      : "no summary"}
                  </p>
                  <h2 className={style.titleText}>Instructions:</h2>

                  <p>
                    {detailRecipe[0].createdInDb //si la receta esta en la base de datos
                      ? detailRecipe[0].analyzedInstructions
                      : detailRecipe[0].analyzedInstructions.map((e) =>
                          e.steps.map((e) => (
                            <ul>
                              <li key={e.number}>{e.step}</li>
                            </ul>
                          ))
                        )}
                  </p>
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
