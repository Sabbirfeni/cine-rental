import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
