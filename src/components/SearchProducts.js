const SearchProducts = ({ name, id, img, price }) => {
  return (
    <div
      className="w-max scale-y-100 rounded-md bg-white shadow-lg shadow-zinc-400  duration-700 ease-in-out  hover:scale-110 hover:cursor-pointer hover:duration-500 hover:ease-in-out max-[870px]:w-40"
      id={id}
    >
      <img className="rounded-md" src={img} alt="" />
      <div className="p-2">
        <h3 className="max-[690px]:text-sm">{name}</h3>
        <p className="font-bold">$ {price}</p>
        <a href="/" className="font-bold text-blue-500 max-[690px]:text-sm">
          Ver producto
        </a>
      </div>
    </div>
  );
};

export default SearchProducts;
