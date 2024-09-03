import NavBar from "./components/NavBar";
import Product from "./components/Product";

const App = () => {
  const product1 = {
    name: "Nike",
    price: "160",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 10,
  };
  const product2 = {
    name: "PC",
    price: "1600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 12,
  };
  const product3 = {
    name: "Gourde",
    price: "16",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock: 1,
  };

  return (
    <div>
      <NavBar />
      <Product
        name={product1.name}
        price={product1.price}
        description={product1.description}
        stock={product1.stock}
      />
      <Product
        name={product2.name}
        price={product2.price}
        description={product2.description}
        stock={product2.stock}
      />
      <Product
        name={product3.name}
        price={product3.price}
        description={product3.description}
        stock={product3.stock}
      />
    </div>
  );
};

export default App;
