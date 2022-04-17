import axios from "axios";
import { GET_RECIPES } from "./types";

export function getRecipes() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: GET_RECIPES,
      payload: json.data,
    });
  };
}
