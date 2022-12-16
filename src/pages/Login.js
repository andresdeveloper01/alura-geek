import { useState } from "react";
import Footer from "../components/HomeComponets/Footer";
import Header from "../components/HomeComponets/Header";
import users from "../users.json";

const initialForm = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const [login, setLogin] = useState(null);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    FiltrarUsuarios(form.email, form.password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.map(({ email, password }) => {
      if (form.email === email && form.password === password) {
        setLogin(true);
        console.log(login);
      } else {
        setLogin(false);
        console.log(login);
      }
      return login;
    });

    localStorage.setItem("on", login);
  };

  const FiltrarUsuarios = (correo, contra) => {
    // eslint-disable-next-line array-callback-return
    let obtenerUsuarios = user.filter((res) => {
      if (res.email.includes(correo) && res.password.includes(contra)) {
        return res.email && res.password;
      }
    });
    setUsers(obtenerUsuarios);
  };

  return (
    <>
      <Header />
      <div className="bg-[#e5e5e5] p-10 px-2">
        <h3 className="p-6 text-center text-lg font-bold">Inicar Sesión</h3>
        <form
          className=" flex  flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="w-96 rounded border-b-2 border-solid border-[#c8c8c8] p-4 outline-none max-[450px]:w-full"
            placeholder="Escriba su correo electronico"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          <input
            type="text"
            className="w-96 rounded border-b-2 border-solid border-[#c8c8c8] p-4 outline-none max-[450px]:w-full"
            placeholder="Escriba su contraseña"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
          <button className="w-96 bg-blue-500 p-3 font-semibold text-white max-[450px]:w-full">
            Entrar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
