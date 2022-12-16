import { useState } from "react";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";

const initialForm = {
  name: "",
  price: "",
  img: "",
  id: null,
  category: "",
};

const products = JSON.parse(sessionStorage.getItem("stateProducts"));

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState(initialForm);
  const [productos, setProductos] = useState(products);

  const createData = (data) => {
    data.id = Date.now();
    setProductos([...products, data]);
    sessionStorage.setItem("stateProducts", JSON.stringify(productos));
    console.log(productos);
  };

  const handleChange = (e) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createData(addProduct);
    handleReset();
  };

  const handleReset = (e) => {
    setAddProduct(initialForm);
  };

  return (
    <>
      <div>
        <Header />
        <div className="bg-[#e5e5e5]">
          <form
            className=" mx-auto my-0 w-[500px] py-16"
            onSubmit={handleSubmit}
          >
            <fieldset className="flex flex-col items-center">
              <legend className="text-[32px] font-bold text-preto">
                Agregar producto
              </legend>
              <div className="w-full">
                <label className="relative top-6 left-4 text-xs text-[#A2A2A2] ">
                  URL de imagen
                </label>
                <input
                  type="text"
                  name="img"
                  className="w-full rounded border-b-2 border-solid border-[#c8c8c8] p-5 px-4 pb-3 outline-none"
                  onChange={handleChange}
                  value={addProduct.img}
                />
              </div>
              <div className="w-full">
                <label className="relative top-6 left-4 text-xs text-[#A2A2A2] ">
                  Categoria
                </label>
                <input
                  type="text"
                  name="category"
                  className="w-full rounded border-b-2 border-solid border-[#c8c8c8] p-5 px-4 pb-3 outline-none"
                  onChange={handleChange}
                  value={addProduct.category}
                />
              </div>
              <div className="w-full">
                <label className="relative top-6 left-4 text-xs text-[#A2A2A2] ">
                  Nombre del producto
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded border-b-2 border-solid border-[#c8c8c8] p-5 px-4 pb-3 outline-none"
                  onChange={handleChange}
                  value={addProduct.name}
                />
              </div>
              <div className="w-full">
                <label className="relative top-6 left-4 text-xs text-[#A2A2A2] ">
                  Precio del producto
                </label>
                <input
                  type="text"
                  name="price"
                  className="w-full rounded border-b-2 border-solid border-[#c8c8c8] p-5 px-4 pb-3 outline-none"
                  onChange={handleChange}
                  value={addProduct.price}
                />
              </div>
              <div className="w-full">
                <label className="relative top-6 left-4 text-xs text-[#A2A2A2] ">
                  Descripción del producto
                </label>
                <input
                  name=""
                  className="h-20 w-full rounded border-b-2 border-solid border-[#c8c8c8] p-5 px-4 pb-3 outline-none"
                />
              </div>
              <button className="mt-4 w-full bg-blue-500 p-3 font-semibold text-white">
                Agregar producto
              </button>
            </fieldset>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddProduct;
