import logo from "../../assets/logo.svg";
import hero from "../../assets/hero.png";
import lupa from "../../assets/lupa.svg";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-around p-8">
        <div className=" flex gap-10">
          <img src={logo} alt="Logo de Alura Geek" className="h-10" />
          <div className="flex">
            <input
              type="text"
              placeholder="¿Qué deseas buscar?"
              className="h-10 w-96 rounded-3xl bg-neutral-100 p-3 outline-none"
            />
            <img src={lupa} alt="lupa" className="relative right-8" />
          </div>
        </div>
        <button className=" w-44 border border-solid border-blue-500 p-3 text-blue-500">
          Login
        </button>
      </div>

      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="  h-80 bg-cover bg-no-repeat text-white"
      >
        <div className="my-0 mx-auto flex h-full w-3/4 flex-col items-start justify-end gap-4 p-8">
          <h2 className="text-5xl font-bold">Diciembre Promocional</h2>
          <p className="text-xl font-bold">
            Productos seleccionados con 33% de descuento
          </p>
          <button className="bg-blue-500 p-3 ">Ver Consolas</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
