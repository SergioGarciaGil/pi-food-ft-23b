import React, { useState, useEffect } from "react";
import { postRecipe, getTypeOfDiet } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import style from "./RecipeCreate.module.css";

function validate(input) {
  let errors = {};
  if (!input.title) {
    errors.name = "Name es requerido";
  } else if (!input.summary) {
    errors.summary = "Summary es requerido";
  } else if (!input.aggregateLikes) {
    errors.aggregateLikes = "Campo no debe estar vacio";
  } else if (isNaN(input.aggregateLikes)) {
    errors.aggregateLikes = "Campo debe ser un numero";
  } else if (isNaN(input.healthScore)) {
    errors.healthScore = "Health Score debe ser un numero";

  } else if (!input.healthScore) {
    errors.healthScore = "Campo no debe estar vacio";
  } else if (input.analyzedInstructions.length < 10) {
    errors.analyzedInstructions = "Debe tener mas de 10 caracteres";
  } else if (!input.image.includes("https://")) {
    errors.image = "Debe ingresar una imagen";
  }
  return errors;
}

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allDiets = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    title: "",
    summary: "",
    aggregateLikes: "",
    healthScore: "",
    analyzedInstructions: "",
    image: "",
    diets: [],
    dishTypes: ""
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      //seteamos el estado errores pasandole la funcion validate
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
  function handleDelete(e) {
    setInput({
      ...input,
      diets: input.diets.filter((el) => el !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!errors.name && !errors.summary && !errors.diets && !errors.image) {
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
        dishTypes: "",
      });
    } else {
      return alert("Receta no ha sido creada");
    }
    navigate("/home");
  }

  return (
    <div className={style.todo}>
      <Link className={style.btnVolver} to="/home">
        <botton>VOLVER</botton>
      </Link>
      <h1 className={style.textCreate}>Create your Recipe:</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className={style.label}>Plate Name:</label>

          <input
            className={style.input}
            placeholder="Ingrese Title"
            type="text"
            value={input.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>
        <div>
          <label className={style.label}>Summary:</label>
          <input
            className={style.input}
            placeholder="Complete here..."
            type="text"
            value={input.summary}
            name="summary"
            onChange={(e) => handleChange(e)}
          />
          {errors.summary && <p className={style.error}>{errors.summary}</p>}
        </div>
        <div>
          <label className={style.label}>Score:</label>
          <input
            className={style.input}
            type="text"
            value={input.aggregateLikes}
            name="aggregateLikes"
            onChange={(e) => handleChange(e)}
          />
          {errors.aggregateLikes && <p className={style.error}>{errors.aggregateLikes}</p>}
        </div>
        <div>
          <label>Health Level:</label>
          <input
            className={style.input}
            type="text"
            value={input.healthScore}
            name="healthScore"
            onChange={(e) => handleChange(e)}
          />
          {errors.healthScore && <p className={style.error}>{errors.healthScore}</p>}
        </div>
        <label className={style.labelI}>Instructions:</label>
        <div>

          <textarea
            type="text"
            className={style.input}
            placeholder="Instructions..."
            rows="5"
            value={input.analyzedInstructions}
            name="analyzedInstructions"
            onChange={(e) => handleChange(e)}
          />
          {errors.analyzedInstructions && <p className={style.error}>{errors.analyzedInstructions}</p>}
        </div>
        <div>
          <label>Types of Dish </label>
          <input
            className={style.input}
            placeholder="Complete here... postre, comida, etc"
            type="text"
            value={input.dishTypes}
            name="dishTypes"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label className={style.label}>Image:</label>
          <input
            className={style.input}
            type="text"
            placeholder="Example: https://..."
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
          {errors.image && <p className={style.error}>{errors.image}</p>}
        </div>

        <div>
          <select onChange={(e) => handleSelect(e)}>
            <option key={0} value="ALL">
              Types of diets
            </option>
            {allDiets
              ?.sort(function (a, b) {//
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

          <ul >
            <li>{input.diets.map((e) => e + ",  ")}</li>
          </ul>
        </div>

        <button type="submit">Create Recipe</button>
      </form>
      {input.diets.map((e) => (
        <div key={e}>
          <p >{e}</p>
          <button onClick={() => handleDelete(e)}>X</button>
        </div>
      ))}


    </div>

  );

}
