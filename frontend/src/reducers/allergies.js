import axios from "axios";
import "regenerator-runtime/runtime";

let GET_ALLERGENS = "GET_ALLERGENS";

export const getAllergens = (allergens) => ({
  type: GET_ALLERGENS,
  allergens,
});

//THUNK -> fetching all allergens
export const fetchAllergens = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/allergen");
      dispatch(getAllergens(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

export default function allergens(state = initialState, action) {
  switch (action.type) {
    case GET_ALLERGENS:
      return action.allergens;
    default:
      return state;
  }
}
