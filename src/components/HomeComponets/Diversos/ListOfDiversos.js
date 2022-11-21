import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardDiversos from "./CardDiversos";

const ListOfDiversos = ({ state, name }) => {
  return (
    <>
      {state && (
        <section className=" my-0 mx-auto w-fit p-16 max-[870px]:p-6 max-[690px]:p-5 max-[300px]:px-0">
          <div className="flex w-full justify-between p-5 pr-0 pl-0 max-[870px]:w-[95%] max-[690px]:w-[100%] max-[688px]:px-5">
            <h2 className="text-3xl font-bold text-preto max-[690px]:text-[22px]">
              {name}
            </h2>
            <div className="flex items-center gap-1 font-bold text-blue-500">
              <Link to="/diversos">Ver todo</Link>
              <FaArrowRight className="cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-4 max-[870px]:flex-wrap max-[752px]:justify-center">
            {state.map(({ name, id, img, price }) => (
              <CardDiversos key={id} price={price} name={name} img={img} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ListOfDiversos;
