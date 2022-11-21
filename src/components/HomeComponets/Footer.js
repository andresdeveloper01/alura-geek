import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-preto3 p-16	max-[600px]:p-4">
        <div className=" mx-auto  my-0 grid max-w-[1140px] grid-cols-[200px_300px_auto] grid-rows-[1fr] gap-4 max-lg:grid-cols-[200px_180px_auto] max-[600px]:grid-cols-1">
          <Link
            className="grid max-[870px]:col-start-1 max-[600px]:col-end-4 max-[600px]:justify-center"
            to="/"
          >
            <img src={logo} alt="Logo Alura Geek" />
          </Link>

          <div className="flex flex-col gap-4 font-medium max-[870px]:col-start-1 max-[600px]:col-end-4 max-[600px]:items-center">
            <a href="/">Quienes somos</a>
            <a href="/">Política de privacidad</a>
            <a href="/">Programa de fidelidad</a>
            <a href="/">Nuestras Tiendas</a>
            <a href="/">Quiero ser franquiciado</a>
            <a href="/">Anúncie aquí</a>
          </div>
          <div className="max-[870px]:col-start-2 max-[870px]:col-end-4 max-[870px]:row-start-1 max-[870px]:row-end-3 max-[600px]:col-start-1 max-[600px]:row-auto">
            <form action="">
              <fieldset>
                <legend className="mb-2 font-bold">Hable con nosotros</legend>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="absolute top-4 left-3.5 text-zinc-400"
                  >
                    Nombre
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full rounded-md border-b-2 border-neutral-100  px-3 pt-4 pb-3.5 shadow-xl outline-none"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="absolute top-4 left-3.5 text-zinc-400 "
                  >
                    Escribe tu mensaje
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    className="w-full resize-none rounded-md border-b-2 border-neutral-100 px-3 pt-4 pb-3.5 shadow-xl outline-none"
                  ></textarea>
                </div>
              </fieldset>
              <button className="bg-blue-500 p-3 text-white max-[870px]:text-sm">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="p-8 text-center">
        <p>
          Desarrollado por{" "}
          <a href="https://github.com/andresdeveloper01">
            <strong>Andres Developer </strong>
          </a>
          2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
