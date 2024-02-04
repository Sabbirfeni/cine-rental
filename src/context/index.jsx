import { MovieContextProvider } from "./MovieContext";
import { ThemeContextProvider } from "./ThemeContext";

const AllContextProvider = ({ children }) => {
  return (
    <MovieContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </MovieContextProvider>
  );
};

export default AllContextProvider;
