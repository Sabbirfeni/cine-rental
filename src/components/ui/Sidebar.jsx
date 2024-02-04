import { NavLink } from "react-router-dom";
import ComingSoon from "../../assets/icons/commingSoon.svg";
import Favourite from "../../assets/icons/favourite.svg";
import NewRelease from "../../assets/icons/newRelease.svg";
import Trending from "../../assets/icons/trending.svg";
import WatchLater from "../../assets/icons/watchLater.svg";

function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#00D991", color: "#000" }
                : { color: "#fff" }
            }
            href="#"
          >
            <img src={Trending} width="24" height="24" alt="" />
            <span>Trending</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="new-release"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#00D991", color: "#000" }
                : { color: "#fff" }
            }
            href="#"
          >
            <img src={NewRelease} width="24" height="24" alt="" />
            <span>New Releases</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="coming-soon"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#00D991", color: "#000" }
                : { color: "#fff" }
            }
            href="#"
          >
            <img src={ComingSoon} width="24" height="24" alt="" />
            <span>Coming Soon</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="favourite"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#00D991", color: "#000" }
                : { color: "#fff" }
            }
            href="#"
          >
            <img src={Favourite} width="24" height="24" alt="" />
            <span>Favourites</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="watch-later"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: "#00D991", color: "#000" }
                : { color: "#fff" }
            }
            href="#"
          >
            <img src={WatchLater} width="24" height="24" alt="" />
            <span>Watch Later</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
