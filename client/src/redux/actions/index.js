import axios from "axios";
import { GET_RECIPES, FILTER_CREATED, ORDER_BY_NAME } from "./types";

export function getRecipes() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: GET_RECIPES,
      payload: json.data,
    });
  };
}
export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}
// export function getTypeOfDiet() {
//   return async function (dispatch) {
//     const json = await axios.get("http://localhost:3001/types");
//     return dispatch({
//       type: GET_TYPE_OF_DIET,
//       payload: json.data,
//     });
//   };
// }
