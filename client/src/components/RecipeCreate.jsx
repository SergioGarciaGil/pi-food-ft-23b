import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getTypeOfDiet } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
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
  // const history = useHistory();
  // const diets = useSelector((state) => state.diets);
  // const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   dispatch(getTypeOfDiet());
  // }, [dispatch]);

  // const [input, setInput] = useState({
  //   title: "",
  //   summary: "",
  //   aggregateLikes: 0,
  //   healthScore: 0,
  //   analyzedInstructions: "",
  //   image: "",
  //   diets: [],
  // });

  // function handleChange(e) {
  //   setInput((input) => ({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   }));
  //   setErrors(
  //     validate({
  //       ...input,
  //       [e.target.name]: e.target.value,
  //     })
  //   );
  // }

  // function handleSelectDiet(e) {
  //   setInput((input) => ({
  //     ...input,
  //     diets: [...input.diets, e.target.value],
  //   }));
  //   setErrors(
  //     validate({
  //       ...input,
  //       diets: [...input.diets, e.target.value],
  //     })
  //   );
  // }

  /*  function handleSubmit(e) {
    if (
      input.title === "" ||
      input.summary === "" ||
      !input.aggregateLikes ||
      !input.healthScore ||
      input.analyzedInstructions === "" ||
      input.image === "" ||
      input.diets === []
    ) {
      e.preventDefault();
      alert("You must complete every field");
    } else {
      e.preventDefault();
      dispatch(postRecipe(input));
      alert("Recipe created!");
      setInput({
        title: "",
        summary: "",
        aggregateLikes: 0,
        healthScore: 0,
        analyzedInstructions: "",
        image: "",
        diets: [],
      });
      history.push("/home");
    }
  } */
  // function handleSubmit(e) {
  //   if (input.title && input.summary && input.image && input.diets.length > 0) {
  //     e.preventDefault();
  //     dispatch(postRecipe(input));
  //     alert("Recipe succesfully Created!!");
  //     setInput({
  //       title: "",
  //       summary: "",
  //       aggregateLikes: 0,
  //       healthScore: 0,
  //       analyzedInstructions: "",
  //       image: "",
  //       diets: [],
  //     });
  //     history.push("/home");
  //   } else {
  //     e.preventDefault();
  //     alert("You must complete every field!!");
  //   }
  // }

  // function handleDelete(e, d) {
  //   e.preventDefault();
  //   setInput({
  //     ...input,
  //     diets: input.diets.filter((diet) => diet !== d),
  //   });
  // }

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>Create your own Recipe here:</h1>
      <div className={""}></div>
      <form>
        <div>
          <label className={""}>Plate Name:</label>

          <input
            className={""}
            placeholder="Complete here..."
            type="text"
            value={""}
            name="title"
            // onChange={(e) => handleChange(e)}
          />
          {/* {errors.title && <p>{errors.title}</p>} */}
        </div>
        <div>
          <label>Summary:</label>
          <input
            className={""}
            placeholder="Complete here..."
            type="text"
            value={""}
            name="summary"
            // onChange={(e) => handleChange(e)}
          />
          {/* {errors.summary && <p>{errors.summary}</p>} */}
        </div>
        <div>
          <label>Score:</label>
          <input
            className={""}
            type="text"
            value={""}
            name="aggregateLikes"
            // onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Health Level:</label>
          <input
            className={""}
            type="text"
            value={""}
            name="healthScore"
            // onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label className={""}>Instructions:</label>
          <textarea
            type="text"
            className={""}
            placeholder="Complete here..."
            rows="5"
            value={""}
            name="analyzedInstructions"
            // onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            className={""}
            type="text"
            placeholder="Example: https://..."
            value={""}
            name="image"
            // onChange={(e) => handleChange(e)}
          />
          {/* {errors.image && <p>{errors.image}</p>} */}
        </div>
        <div className={""}>
          <span>Type of Diet:</span>
          {/* <select onChange={(e) => handleSelectDiet(e)}>
            {diets.map((d) => (
              <option value={d.name} key={d.name}>
                {d.name}
              </option>
            ))}
          </select> */}
          {/* {input.diets.map((d, i) => (
            <ul key={i}>
              <li>{d}</li>
              <button onClick={(e) => handleDelete(e, d)}>x</button>
            </ul>
          ))}
          {errors.diets && <p>{errors.diets}</p>} */}
        </div>
        <button type="submit" className={""}>
          Create Recipe
        </button>
      </form>
    </div>
  );
}
