import axios from "axios";
import "regenerator-runtime/runtime";

let ADD_CUSTOMER = "ADD_CUSTOMER";

export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  customer,
});

// THUNK -> adds new customer data to db

export const postCustomer = (customer) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/customer/", customer);
      console.log("thunk-:", data);
      dispatch(addCustomer(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function customer(state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOMER:
      return action.customer;
    default:
      return state;
  }
}
