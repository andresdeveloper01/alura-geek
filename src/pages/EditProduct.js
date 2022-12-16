import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";
import jsonProducts from "../alurageek.json";

const initialDb = jsonProducts;

const EditProduct = () => {
  const [db, setDb] = useState(initialDb);
  const params = useParams();
  let productToEdit = initialDb.filter((res) => {
    if (res.id.toString() === params.id) {
      return res.id;
    }
    return false;
  });
  const [editProduct, setEditProduct] = useState(productToEdit);

  console.log(productToEdit);

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
    console.log();
    // sessionStorage.setItem("stateProducts", JSON.stringify(stateProducts));
  };

  const handleChange = (e) => {
    setEditProduct({
      ...editProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateData(editProduct);
  };

  return (
    <>
      {productToEdit.map(({ name, id, img, price, category }) => (
        <div key={id}>
          <Header />
          <div className="bg-[#e5e5e5]">
            <form
              className="mx-auto  my-0 w-[500px] py-16 max-[550px]:w-[450px] max-[480px]:w-full max-[480px]:px-3"
              onSubmit={handleSubmit}
            >
              <fieldset className="flex flex-col items-center">
                <legend className="text-[32px] font-bold text-preto max-[550px]:text-[22px]">
                  Editar producto
                </legend>
                <div className="w-full">
                  <label className="relative top-6 left-4 text-xs text-[#A2A2A2] ">
                    URL de imagen
                  </label>
                  <input
                    type="text"
                    name="img"
                    defaultValue={img}
                    className="w-full rounded border-b-2 border-solid border-[#c8c8c8] p-5 px-4 pb-3 outline-none"
                    onChange={handleChange}
                    value={editProduct.img}
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
                    defaultValue={category}
                    onChange={handleChange}
                    value={editProduct.category}
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
                    defaultValue={name}
                    onChange={handleChange}
                    value={editProduct.name}
                  />
                </div>
                <div className="w-full">
                  <label className="relative top-6 left-4 text-xs text-[#A2A2A2] ">
                    Precio del producto
                  </label>
                  <input
                    type="text"
                    name=""
                    className="w-full rounded border-b-2 border-solid border-[#c8c8c8] p-5 px-4 pb-3 outline-none"
                    defaultValue={`$ ${price}`}
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
                  Editar producto
                </button>
              </fieldset>
            </form>
          </div>
          <Footer />
        </div>
      ))}
    </>
  );
};

export default EditProduct;
