import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardConsolas from "../components/HomeComponets/Consolas/CardConsolas";
import CardDiversos from "../components/HomeComponets/Diversos/CardDiversos";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";
import CardStarWars from "../components/HomeComponets/StarWars/CardStarWars";
import { ProductsContext } from "../context/ProductsContext";

const Productos = () => {
  const { state, starWars, consolas, diversos } = useContext(ProductsContext);
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    let resultadoBusqueda = state.products.filter((res) => {
      if (res.id.toString() === params.id) {
        return res.id;
      }
      return false;
    });
    setProduct(resultadoBusqueda);
  }, [params.id, state.products]);

  return (
    <>
      <Header />
      <section className="flex justify-center bg-[#e5e5e5]">
        {product.map(({ name, id, img, price }) => (
          <div
            key={id}
            className="grid max-w-[1024px] grid-cols-[auto_1fr] gap-4 py-5"
          >
            <img
              className=" h-64 w-[300px] rounded-md object-cover"
              src={img}
              alt="producto"
            />
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-[52px] font-medium text-preto">{name}</h3>
              <p className="pb-2 font-bold text-preto">$ {price}</p>
              <p className="mb-4 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                possimus voluptatibus at quas totam laborum obcaecati voluptate
                nulla temporibus, error qui earum, sint ratione excepturi.
                Similique saepe minima voluptatum quidem. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Facere odio, animi ad
                nostrum quis qui sequi alias, accusantium consectetur, in
                dolores consequuntur nisi pariatur corrupti. Sed, quidem
                sapiente? Quas, ipsam?
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center bg-[#e5e5e5] py-5">
        <div className="max-w-[1024px]">
          <h2 className="text-3xl font-bold text-preto">Productos similares</h2>
          <div
            className="flex justify-center gap-4
        "
          >
            {product.map(({ category }) => {
              if (category === "Star Wars") {
                return starWars.map(({ name, img, price, id }) => (
                  <CardStarWars
                    name={name}
                    img={img}
                    price={price}
                    key={id}
                    id={id}
                  />
                ));
              } else if (category === "Consolas") {
                return consolas.map(({ name, img, price, id }) => (
                  <CardConsolas
                    name={name}
                    img={img}
                    price={price}
                    key={id}
                    id={id}
                  />
                ));
              } else if (category === "Diversos") {
                return diversos.map(({ name, img, price, id }) => (
                  <CardDiversos
                    name={name}
                    img={img}
                    price={price}
                    key={id}
                    id={id}
                  />
                ));
              }
              return <CardStarWars /> || <CardConsolas /> || <CardDiversos />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productos;
