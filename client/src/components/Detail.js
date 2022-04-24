import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(props) {
  console.log(props);
  const dispatch = useDispatch();
  const { id } = useParams();

  const detailRecipe = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        {detailRecipe.length === 0 ? (
          <p>Loading...o</p>
        ) : (
          detailRecipe.length > 0 && (
            <div>
              <div>
                <h1> {detailRecipe[0].title}</h1>
              </div>
              <img
                src={detailRecipe[0].image}
                alt="img not found"
                width="400px"
                height="250px"
              />

              <div>
                <h2>
                  Types of diets:
                  <p>
                    {!detailRecipe[0].createdInDb
                      ? detailRecipe[0].diets + " "
                      : detailRecipe[0].diets.map((e) => e.title + " ")}
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
  );
}
