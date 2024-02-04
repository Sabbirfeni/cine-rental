import { RouterProvider } from "react-router-dom";
import "./App.css";
import AllContextProvider from "./context";
import routes from "./routes/Routes";

function App() {
  return (
    <>
      <AllContextProvider>
        <RouterProvider router={routes} />
      </AllContextProvider>
    </>
  );
}

export default App;
