import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { ListOfStarWars } from "./StarWars/ListOfStarWars";

const ListOfProducts = () => {
  const { state, starWars, consolas, diversos } = useContext(ProductsContext);

  return (
    <main>
      <ListOfStarWars state={starWars} name="Star Wars" />
    </main>
  );
};

export default ListOfProducts;
