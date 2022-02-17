import React from "react";
import { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "PROMISE_RESOLVED":
      return {
        isLoading: false,
        products: action.payload,
        error: "",
      };

    case "PROMISE_ERROR":
      return {
        isLoading: false,
        error: "An error occured",
      };

    default:
      return state;
  }
};

function Home() {
  const initialState = {
    isLoading: true,
    error: "",
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products?limit=5")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "PROMISE_RESOLVED", payload: data }));
    } catch (e) {
      dispatch({ type: "PROMISE_ERROR" });
      console.log(e);
    }
  }, []);

  console.log("products ", state.products);

  return (
    <div>
      <ul>
        {state.products.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
