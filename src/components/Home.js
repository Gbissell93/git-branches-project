import React from "react";
import { useReducer, useEffect } from "react";

const productReducer = (state, action) => {
  switch (action.type) {
    case "store_Products_recieved":
      return {
        isLoading: false,
        products: action.payload,
        error: "",
      };

    case "store_products_not_recieved":
      return {
        isLoading: false,
        error: "An error occured",
      };

    case "add_product_to_cart":
      return {};

    default:
      return state;
  }
};

function Home() {
  const initialState = {
    isLoading: true,
    error: "",
    products: [],
  };

  const [productDataState, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products?limit=5")
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: "store_Products_recieved", payload: data })
        );
    } catch (e) {
      dispatch({ type: "store_products_not_recieved" });
      console.log(e);
    }
  }, []);

  console.log("products ", productDataState.products);

  return (
    <div className="product-container">
      <ul>
        {productDataState.products.map((item) => (
          <li key={item.id} className="product-item">
            {item.title}
            <div>
              <img
                src={item.image}
                alt={item.title}
                width="150px"
                height="200px"
              />
            </div>
            <div className="buy-button-container">
              <p>${item.price}</p>
              <button
                id={item.id - 1}
                onClick={(e) => console.log(e.target.id)}
              >
                add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
