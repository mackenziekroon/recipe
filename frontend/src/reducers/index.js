import { combineReducers } from "redux";
import users from "./users";
import recipes from "./recipes";
import allergens from "./allergies";
import customer from "./customer";

export default combineReducers({
  users,
  recipes,
  allergens,
  customer,
});
