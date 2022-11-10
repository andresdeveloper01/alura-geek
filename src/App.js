import { ProductsContextProvider } from "./context/ProductsContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <Home />
      </ProductsContextProvider>
    </>
  );
}

export default App;
