import {
  GET_RECIPES,
  FILTER_CREATED,
  GET_NAME_RECIPES,
  ORDER_BY_NAME,
  ORDER_BY_LIKES,
  GET_DETAIL,
  GET_TYPE_OF_DIET,
  FILTER_BY_DIETS,
  POST_RECIPE,
} from "../actions/types";

const initialState = {
  recipes: [],
  filterRecipes: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        filterRecipes: action.payload,
      };
    case GET_TYPE_OF_DIET:
      return {
        ...state,
        types: action.payload,
      };
    case FILTER_BY_DIETS:
      const allDiets = state.filterRecipes;
      const dietsFiltered =
        action.payload === "all"
          ? allDiets
          : allDiets.filter((e) => e.diets?.includes(action.payload));
      return {
        ...state,
        recipes: dietsFiltered,
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

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case POST_RECIPE:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
