const CardStarWars = ({ name, id, img, price }) => {
  return (
    <div id={id}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>$ {price}</p>
      <a href="/">Ver producto</a>
    </div>
  );
};

export default CardStarWars;
