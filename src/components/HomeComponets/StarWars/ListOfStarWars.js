import CardStarWars from "./CardStarWars";

export const ListOfStarWars = ({ state, name }) => {
  return (
    <>
      {state && (
        <section>
          <h2 className="text-3xl font-bold text-preto">{name}</h2>
          {state.map(({ name, id, img, price }) => (
            <CardStarWars key={id} price={price} name={name} img={img} />
          ))}
        </section>
      )}
    </>
  );
};
