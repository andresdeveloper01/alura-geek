import { useContext } from "react";
import CardDiversos from "../components/HomeComponets/Diversos/CardDiversos";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";
import { ProductsContext } from "../context/ProductsContext";

const Diversos = () => {
  const { diversos } = useContext(ProductsContext);

  return (
    <>
      <Header />
      <div className="flex h-64 items-center justify-center bg-blue-900">
        <h2 className=" text-5xl font-bold text-white">Consolas</h2>
      </div>

      <div className="flex justify-center gap-4 p-7 max-[870px]:flex-wrap">
        {diversos.map(({ name, id, img, price }) => (
          <CardDiversos key={id} price={price} name={name} img={img} id={id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Diversos;
