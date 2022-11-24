import logo from "../../assets/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { state } = useContext(ProductsContext);
  const [busqueda, setBusqueda] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("searchProducts", JSON.stringify(products));
    if ((window.location.href = "/#/search")) {
      window.location.reload();
    }
    navigate("/search");
  };

  const filtrar = (terminoBusqueda) => {
    // eslint-disable-next-line array-callback-return
    let resultadoBusqueda = state.products.filter((res) => {
      if (
        res.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return res.name;
      }
    });
    setProducts(resultadoBusqueda);
    return resultadoBusqueda;
  };

  return (
    <header>
      <div className="mx-auto my-0 flex max-w-[1200px] items-center justify-between p-8 max-[870px]:p-6 max-[550px]:justify-evenly max-[550px]:px-2  max-[370px]:justify-start max-[370px]:gap-5">
        <div className=" flex gap-10 max-[870px]:items-center max-[870px]:gap-5">
          <Link to="/" className="h-5">
            <img
              src={logo}
              alt="Logo de Alura Geek"
              className="h-10 max-[870px]:h-8 max-[370px]:h-7"
            />
          </Link>
          <form
            className="flex items-center max-[550px]:absolute max-[550px]:right-3"
            onSubmit={handleSubmit}
            method="POST"
            action="/search"
          >
            <input
              type="text"
              placeholder="¿Qué deseas buscar?"
              value={busqueda}
              onChange={handleChange}
              className="h-10 w-96 rounded-3xl  bg-neutral-100 p-3 outline-none max-[870px]:w-64 max-[550px]:hidden"
            />
            <button type="submit">
              <AiOutlineSearch className="relative right-8 h-5 w-5  text-slate-400 max-[550px]:right-0" />
            </button>
          </form>
        </div>

        <Link to="/login">
          <button className="w-44 border border-solid border-blue-500 p-3 text-blue-500 max-[870px]:w-32  max-[870px]:p-2 max-[370px]:w-24 max-[370px]:text-[14px]">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
