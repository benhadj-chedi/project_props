import Header from "./components/Header";
import ProductList from "./components/ProductList";
import products from "./data/products";

const App = () => {
  return (
    <>
      <Header title="My Store" />
      <ProductList products={products} />
    </>
  );
};

export default App;
