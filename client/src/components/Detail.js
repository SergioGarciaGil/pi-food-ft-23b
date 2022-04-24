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
      <div className={style.container}>
        <div>
          {detailRecipe.length === 0 ? (
            <p>Loading...o</p>
          ) : (
            detailRecipe.length > 0 && (
              <div>
                <div>
                  <h1 className={style.titleDetail}>
                    {" "}
                    {detailRecipe[0].title}
                  </h1>
                </div>
                <img
                  className={style.img}
                  src={detailRecipe[0].image}
                  alt="img not found"
                  width="400px"
                  height="250px"
                />

                <div>
                  <h2>
                    {!detailRecipe[0].aggregateLikes !== 0 ? (
                      <h3>Score: {detailRecipe[0].aggregateLikes}</h3>
                    ) : (
                      <h3>Score: - </h3>
                    )}
                  </h2>
                  <h2>
                    {detailRecipe[0].healthScore !== 0 ? (
                      <h3>Health Score: {detailRecipe[0].healthScore}</h3>
                    ) : (
                      <h3>Health Score: - </h3>
                    )}
                  </h2>
                  <h2>
                    Types of diets:
                    {/* <p>{detailRecipe[0].diets.join(", ")}</p> */}
                    <p>
                      {!detailRecipe[0].createdInDb
                        ? detailRecipe[0].diets.join(", ")
                        : "No diet info"}
                    </p>
                  </h2>
                  <h3>
                    Type of Dish:
                    <p>
                      {!detailRecipe[0].createdDb
                        ? detailRecipe[0].dishTypes.join(", ")
                        : "No dish types"}
                    </p>
                  </h3>
                  <h2>
                    Summary:
                    <p>
                      {!detailRecipe[0].createdInDb
                        ? detailRecipe[0].summary.replace(/<[^>]*>?/g)
                        : "no summary"}
                    </p>
                  </h2>
                  <h2>
                    Instructions:
                    <p>
                      {detailRecipe[0].analyzedInstructions[0].steps.map(
                        (e) => e.step
                      )}
                    </p>
                  </h2>
                </div>

                <Link to="/home">
                  <button>Volver</button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
