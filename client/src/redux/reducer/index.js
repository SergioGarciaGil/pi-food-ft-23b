import { OrderByLikes } from "../actions";
import {
  GET_RECIPES,
  FILTER_CREATED,
  GET_NAME_RECIPES,
  ORDER_BY_NAME,
  ORDER_BY_LIKES,
  GET_DETAILS,
} from "../actions/types";

const initialState = {
  recipes: [],
  filterRecipes: [],
  details: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        filterRecipes: action.payload,
      };
    case FILTER_CREATED:
      const allRecipeCreated = state.filterRecipes;
      const createdFilter =
        action.payload === "created"
          ? allRecipeCreated.filter((e) => e.createdInDb)
          : allRecipeCreated.filter((e) => !e.createdInDb);

      return {
        ...state,
        recipes: action.payload === "all" ? allRecipeCreated : createdFilter,
      };
    case ORDER_BY_NAME:
      // const order =
      //   action.payload === "asc"
      //     ? state.recipes.sort((a, b) => {
      //         //ordena de menor a mayor
      //         if (a.title < b.title) return -1;
      //         if (a.title > b.title) return 1;
      //         return 0;
      //       })
      //     : state.recipes.sort((a, b) => {
      //         //ordena de mayor a menor
      //         if (a.title > b.title) return -1;
      //         if (a.title < b.title) return 1;
      //         return 0;
      //       });
      // return {
      //   ...state,
      //   recipes: order,
      // };

      const allRecipe = state.recipes;
      const order =
        action.payload === "asc"
          ? allRecipe.sort((a, b) => (a.title > b.title ? 1 : -1)) //ordena de mayor a menor
          : allRecipe.sort((a, b) => (a.title < b.title ? 1 : -1)); ///ordena de menor a mayor

      return {
        ...state,
        recipes: order,
      };

    case GET_NAME_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case ORDER_BY_LIKES:
      const allLikes = state.recipes;
      const orderLikes =
        action.payload === "desc"
          ? allLikes.sort((a, b) =>
              a.aggregateLikes > b.aggregateLikes ? 1 : -1
            ) //ordena de mayor a menor
          : allLikes.sort((a, b) =>
              a.aggregateLikes < b.aggregateLikes ? 1 : -1
            ); ///ordena de menor a mayor

      return {
        ...state,
        recipes: orderLikes,
      };

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
