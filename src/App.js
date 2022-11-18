import { HashRouter } from "react-router-dom";
import AluraGeekRoutes from "./components/AluraGeekRoutes";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <HashRouter>
      <ProductsContextProvider>
        <AluraGeekRoutes />
      </ProductsContextProvider>
    </HashRouter>
  );
}

export default App;
