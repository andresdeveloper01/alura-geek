import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";
import SearchProducts from "../components/SearchProducts";

const Search = () => {
  const searchProducts = JSON.parse(localStorage.getItem("searchProducts"));

  return (
    <>
      <Header />
      <div className="flex justify-center gap-4 p-8 max-[870px]:flex-wrap">
        {searchProducts.length === 0 ? (
          <p className="p-7 text-center text-4xl font-bold">
            No se encuentran resultados
          </p>
        ) : (
          searchProducts.map(({ name, id, img, price }) => (
            <SearchProducts
              name={name}
              key={id}
              img={img}
              price={price}
              id={id}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Search;
