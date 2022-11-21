import { Link } from "react-router-dom";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="bg-[#e5e5e5] p-10 px-2">
        <h3 className="p-6 text-center text-lg font-bold">Inicar Sesión</h3>
        <form
          className=" flex  flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-96 rounded border-b-2 border-solid border-[#c8c8c8] p-4 outline-none max-[450px]:w-full"
            placeholder="Escriba su correo electronico"
          />
          <input
            type="text"
            className="w-96 rounded border-b-2 border-solid border-[#c8c8c8] p-4 outline-none max-[450px]:w-full"
            placeholder="Escriba su contraseña"
          />
          <Link to="/">
            <button className="w-96 bg-blue-500 p-3 font-semibold text-white max-[450px]:w-full">
              Entrar
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
