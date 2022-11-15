import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ListOfConsolas from "./Consolas/ListOfConsolas";
import ListOfDiversos from "./Diversos/ListOfDiversos";
import { ListOfStarWars } from "./StarWars/ListOfStarWars";

const ListOfProducts = () => {
  const { starWars, consolas, diversos } = useContext(ProductsContext);

  return (
    <main className="bg-neutral-100">
      <ListOfStarWars state={starWars} name="Star Wars" />
      <ListOfConsolas state={consolas} name="Consolas" />
      <ListOfDiversos state={diversos} name="Diversos" />
    </main>
  );
};

export default ListOfProducts;
