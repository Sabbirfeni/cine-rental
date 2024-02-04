import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Moon from "../../assets/icons/moon.svg";
import Sun from "../../assets/icons/sun.svg";
import Logo from "../../assets/logo.svg";
import Ring from "../../assets/ring.svg";
import Cart from "../../assets/shopping-cart.svg";
import useMovie from "../../hooks/useMovie";
import useTheme from "../../hooks/useTheme";
import CartDetails from "../movie/CartDetails";
function Header() {
  const { cartState } = useMovie();
  const { darkMode, setDarkMode } = useTheme();

  const [showCart, setShowCart] = useState(false);
  const handleCartShow = () => {
    setShowCart(true);
  };

  const activeCart = cartState.cartData.filter(
    (cart) => cart.showCart === true
  );

  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <AnimatePresence mode="wait">
        {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      </AnimatePresence>

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode((prevState) => !prevState)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Cart} width="24" height="24" alt="" />
              <AnimatePresence mode="wait">
                {activeCart.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring", // Use a spring animation
                      stiffness: 260,
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]"
                  >
                    {activeCart.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
