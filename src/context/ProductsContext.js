import { createContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducer/productsReducer";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    sessionStorage.setItem("stateProducts", JSON.stringify(state.products));
  }, [state]);

  const starWars = state.products.filter((res) => res.category === "Star Wars");
  const consolas = state.products.filter((res) => res.category === "Consolas");
  const diversos = state.products.filter((res) => res.category === "Diversos");

  const data = { state, dispatch, starWars, consolas, diversos };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};
