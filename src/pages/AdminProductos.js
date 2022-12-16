import { Link } from "react-router-dom";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";
import { RiPencilFill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const AdminProductos = () => {
  const products = JSON.parse(sessionStorage.getItem("stateProducts"));

  return (
    <>
      <Header />
      <main className="bg-[#e5e5e5]">
        <div className="mx-auto my-0 flex max-w-[1124px] justify-between py-3 max-[415px]:flex-col">
          <h2 className="text-3xl font-bold text-preto max-[625px]:text-2xl max-[450px]:text-[22px]">
            Todos los productos
          </h2>
          <Link
            to="/add"
            className="bg-blue-500 p-3 text-white max-[450px]:p-2 max-[415px]:w-[150px]"
          >
            Agregar producto
          </Link>
        </div>
        <section className="flex flex-wrap justify-center gap-4 pb-16 max-[870px]:flex-wrap">
          {products.map(({ name, id, img, price }) => (
            <div key={id}>
              <div className="relative top-7 right-2 flex justify-end gap-2">
                <button>
                  <IoMdTrash className="h-6 w-6 text-white" />
                </button>
                <Link to={`/edit${id}`}>
                  <RiPencilFill className="h-6 w-6 text-white" />
                </Link>
              </div>
              <img
                src={img}
                alt={name}
                className="max-h-[174px] max-w-[140px]"
              />
              <p>{name}</p>
              <p className="font-bold">${price}</p>
              <p>#{id}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AdminProductos;
