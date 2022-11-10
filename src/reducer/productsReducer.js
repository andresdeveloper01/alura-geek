import { TYPES } from "../actions/productsActions";
import jsonProducts from "../alurageek.json";

export const initialState = {
  products: JSON.parse(sessionStorage.getItem("stateProducts")) || jsonProducts,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_ALL_DATA:
      return {
        ...state,
        products: action.payload,
      };
    case TYPES.CREATE_DATA:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case TYPES.UPDATE_DATA: {
      let newData = state.products.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        products: newData,
      };
    }
    case TYPES.DELETE_DATA: {
      let newData = state.products.filter((el) => el.id !== action.payload);

      return {
        ...state,
        products: newData,
      };
    }

    default:
      return state;
  }
};
