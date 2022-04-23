import axios from "axios";
import {
  GET_RECIPES,
  FILTER_CREATED,
  ORDER_BY_NAME,
  GET_NAME_RECIPES,
  ORDER_BY_LIKES,
  GET_DETAILS,
} from "./types";

export function getRecipes() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: GET_RECIPES,
      payload: json.data,
    });
  };
}
export function getNameRecipes(title) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        "http://localhost:3001/recipes?title=" + title
      );
      return dispatch({
        type: GET_NAME_RECIPES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error, "No encontrado el title");
    }
  };
}
export function orderByLikes(payload) {
  return {
    type: ORDER_BY_LIKES,
    payload,
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
export function getDetails(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
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
