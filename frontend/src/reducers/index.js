import { combineReducers } from "redux";
import users from "./users";
import recipes from "./recipes";
import allergens from "./allergies";

export default combineReducers({
  users,
  recipes,
  allergens,
});
