import { FILTER_CREATED, GET_RECIPES, ORDER_BY_NAME } from "../actions/types";

const initialState = {
  recipes: [],
  filterRecipes: [],
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
      const order =
        action.payload === "asc"
          ? state.recipes.sort((a, b) => {
              //ordena de menor a mayor
              if (a.title < b.title) return -1;
              if (a.title > b.title) return 1;
              return 0;
            })
          : state.recipes.sort((a, b) => {
              //ordena de mayor a menor
              if (a.title > b.title) return -1;
              if (a.title < b.title) return 1;
              return 0;
            });
      return {
        ...state,
        recipes: order,
      };

    // const allRecipe = state.recipes;
    // const orderByName =
    //   action.payload === "asc"
    //     ? allRecipe.sort((a, b) => (a.name > b.name ? 1 : -1))
    //     : allRecipe.sort((a, b) => (a.name < b.name ? 1 : -1));

    // return {
    //   ...state,
    //   recipes: action.payload === "all" ? allRecipe : orderByName,
    // };

    default:
      return state;
  }
}

export default rootReducer;
