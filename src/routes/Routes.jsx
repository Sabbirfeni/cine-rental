import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ComingSoonMovies from "../pages/ComingSoonMovies";
import FavouriteMovies from "../pages/FavouriteMovies";
import NewReleaseMovies from "../pages/NewReleaseMovies";
import TrendingMovies from "../pages/TrendingMovies";
import WatchLaterMovies from "../pages/WatchLaterMovies";
import PageTransitionWrapper from "../wrapper/PageTransitionWrapper";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PageTransitionWrapper>
            <TrendingMovies />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/new-release",
        element: (
          <PageTransitionWrapper>
            <NewReleaseMovies />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/coming-soon",
        element: (
          <PageTransitionWrapper>
            <ComingSoonMovies />,
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/favourite",
        element: (
          <PageTransitionWrapper>
            <FavouriteMovies />
          </PageTransitionWrapper>
        ),
      },
      {
        path: "/watch-later",
        element: (
          <PageTransitionWrapper>
            <WatchLaterMovies />
          </PageTransitionWrapper>
        ),
      },
    ],
  },
]);

export default routes;
