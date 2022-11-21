import Footer from "../components/HomeComponets/Footer";
import hero from "../assets/hero.png";
import Header from "../components/HomeComponets/Header";
import ListOfProducts from "../components/HomeComponets/ListOfProducts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center",
        }}
        className="  h-80 bg-cover bg-no-repeat text-white"
      >
        <div className="my-0 mx-auto flex h-full w-11/12 max-w-[1200px] flex-col items-start justify-end gap-4 p-8 max-[870px]:w-full max-[870px]:p-5 max-[300px]:px-2">
          <h2 className="text-5xl font-bold max-[600px]:text-3xl max-[395px]:text-[22px]">
            Diciembre Promocional
          </h2>
          <p className="text-xl font-bold max-[600px]:text-sm">
            Productos seleccionados con 33% de descuento
          </p>
          <Link to="consolas" className="bg-blue-500 p-3 max-[870px]:text-xs">
            Ver Consolas
          </Link>
        </div>
      </div>
      <ListOfProducts />
      <Footer />
    </>
  );
};

export default Home;
