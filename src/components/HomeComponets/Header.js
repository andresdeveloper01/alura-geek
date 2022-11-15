import logo from "../../assets/logo.svg";
import hero from "../../assets/hero.png";
import lupa from "../../assets/lupa.svg";

const Header = () => {
  return (
    <header>
      <div className="mx-auto my-0 flex max-w-[1200px] items-center justify-between p-8 max-[870px]:p-6 max-[550px]:justify-evenly max-[550px]:px-2  max-[370px]:justify-start max-[370px]:gap-5">
        <div className=" flex gap-10 max-[870px]:items-center max-[870px]:gap-5">
          <img
            src={logo}
            alt="Logo de Alura Geek"
            className="h-10 max-[870px]:h-8 max-[370px]:h-7"
          />
          <div className="flex max-[550px]:absolute max-[550px]:right-3">
            <input
              type="text"
              placeholder="¿Qué deseas buscar?"
              className="h-10 w-96 rounded-3xl  bg-neutral-100 p-3 outline-none max-[870px]:w-64 max-[550px]:hidden"
            />
            <img
              src={lupa}
              alt="lupa"
              className="relative right-8 max-[550px]:right-0"
            />
          </div>
        </div>
        <button className="w-44 border border-solid border-blue-500 p-3 text-blue-500 max-[870px]:w-32  max-[870px]:p-2 max-[370px]:w-24 max-[370px]:text-[14px]">
          Login
        </button>
      </div>

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
          <button className="bg-blue-500 p-3 max-[870px]:text-xs">
            Ver Consolas
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
