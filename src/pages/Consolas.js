import { useContext } from "react";
import CardConsolas from "../components/HomeComponets/Consolas/CardConsolas";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";
import { ProductsContext } from "../context/ProductsContext";

const Consolas = () => {
  const { consolas } = useContext(ProductsContext);
  return (
    <>
      <Header />
      <div className="flex h-64 items-center justify-center bg-blue-900">
        <h2 className=" text-5xl font-bold text-white">Consolas</h2>
      </div>

      <div className="flex justify-center gap-4 p-7 max-[870px]:flex-wrap">
        {consolas.map(({ name, id, img, price }) => (
          <CardConsolas key={id} price={price} name={name} img={img} id={id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Consolas;
