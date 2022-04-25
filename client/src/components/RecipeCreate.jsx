import React, { useState, useEffect } from "react";
import { postRecipe, getTypeOfDiet } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

// import style from "./RecipeCreate.module.css";

// function validate(input) {
//   let errors = {};
//   input.title
//     ? (errors.title = "")
//     : (errors.title = "You must name the recipe");
//   input.summary
//     ? (errors.summary = "")
//     : (errors.summary = "You must provide a summary");
//   input.diets.length < 1
//     ? (errors.diets = "Choose at least one diet")
//     : (errors.diets = "");
//   if (!input.image.includes("https://") && !input.image.includes("http://")) {
//     errors.image = "This isn't a valid image address";
//   } else {
//     errors.image = "";
//   }
//   return errors;
// }

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allDiets = useSelector((state) => state.types);
  // const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    title: "",
    summary: "",
    aggregateLikes: "",
    healthScore: "",
    analyzedInstructions: "",
    image: "",
    diets: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  useEffect(() => {
    dispatch(getTypeOfDiet());
  }, [dispatch]);

  function handleSelect(e) {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value], // le pasamos el input diets que habia y despues el target...
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postRecipe(input));
    alert("Receta creada");
    setInput({
      title: "",
      summary: "",
      aggregateLikes: "",
      healthScore: "",
      analyzedInstructions: "",
      image: "",
      diets: [],
    });
    navigate("/home");
  }
  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>Create your own Recipe here:</h1>
      <div className={""}></div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className={""}>Plate Name:</label>

          <input
            className={""}
            placeholder="Ingrese title"
            type="text"
            value={input.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
          {/* {errors.title && <p>{errors.title}</p>} */}
        </div>
        <div>
          <label>Summary:</label>
          <input
            className={""}
            placeholder="Complete here..."
            type="text"
            value={input.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
          />
          {/* {errors.summary && <p>{errors.summary}</p>} */}
        </div>
        <div>
          <label>Score:</label>
          <input
            className={""}
            type="number"
            value={input.aggregateLikes}
            name="aggregateLikes"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Health Level:</label>
          <input
            className={""}
            type="number"
            value={input.healthScore}
            name="healthScore"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label className={""}>Instructions:</label>
          <textarea
            type="text"
            className={""}
            placeholder="Complete here..."
            rows="5"
            value={input.analyzedInstructions}
            name="analyzedInstructions"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            className={""}
            type="text"
            placeholder="Example: https://..."
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
          {/* {errors.image && <p>{errors.image}</p>} */}
        </div>
        <div>
          <select onChange={(e) => handleSelect(e)}>
            <option key={0} value="ALL">
              Types of diets
            </option>
            {allDiets
              ?.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              })
              .map((e) => {
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
          </select>
          <ul>
            <li>{input.diets.map((el) => el + ",  ")}</li>
          </ul>
        </div>
        <button type="submit" className={""}>
          Create Recipe
        </button>
      </form>
    </div>
  );
}
