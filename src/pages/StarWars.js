import { useContext } from "react";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";
import CardStarWars from "../components/HomeComponets/StarWars/CardStarWars";
import { ProductsContext } from "../context/ProductsContext";

const StarWars = () => {
  const { starWars } = useContext(ProductsContext);

  return (
    <>
      <Header />
      <div className="flex h-64 items-center justify-center bg-blue-900">
        <h2 className=" text-5xl font-bold text-white">Star Wars</h2>
      </div>

      <div className="flex justify-center gap-4 p-7 max-[870px]:flex-wrap">
        {starWars.map(({ name, id, img, price }) => (
          <CardStarWars key={id} price={price} name={name} img={img} id={id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default StarWars;
