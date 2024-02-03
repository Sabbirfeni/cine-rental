import "./App.css";
import MovieList from "./components/movie/MovieList";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import { MovieContextProvider } from "./context";

function App() {
  return (
    <>
      <MovieContextProvider>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContextProvider>
    </>
  );
}

export default App;
