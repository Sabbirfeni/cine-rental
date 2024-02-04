import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import Sidebar from "../components/ui/Sidebar";
import useTheme from "../hooks/useTheme";
function MainLayout() {
  const { darkMode } = useTheme();

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} transition duration-500`}>
        <Header />
        <main className="pt-28">
          <div className="container h-[100vh] grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <div className="overflow-y-scroll no-scrollbar ">
              <Outlet />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default MainLayout;
