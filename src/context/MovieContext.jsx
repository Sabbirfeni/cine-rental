import { createContext, useReducer } from "react";
import { cartReducer, initialCartSate } from "../reducer/cartReducer";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  // const [cartData, setCartData] = useState([]);
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartSate);
  return (
    <MovieContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
