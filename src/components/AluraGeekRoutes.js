import { Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import AdminProductos from "../pages/AdminProductos";
import Consolas from "../pages/Consolas";
import Diversos from "../pages/Diversos";
import EditProduct from "../pages/EditProduct";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import Search from "../pages/Search";
import StarWars from "../pages/StarWars";

const AluraGeekRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/starwars" element={<StarWars />} />
      <Route path="/consolas" element={<Consolas />} />
      <Route path="/diversos" element={<Diversos />} />
      <Route path="/products:id" element={<Productos />} />
      <Route path="/admin" element={<AdminProductos />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit:id" element={<EditProduct />} />
    </Routes>
  );
};

export default AluraGeekRoutes;
