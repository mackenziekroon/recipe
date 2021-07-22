import axios from "axios";
import "regenerator-runtime/runtime";

let GET_RECIPES = "GET_RECIPES";

export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});

//THUNK
export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/recipe/");
      console.log("Data-->", data);
      dispatch(getRecipes(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes;
    default:
      return state;
  }
}
