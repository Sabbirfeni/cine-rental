import { useState } from "react";
import Moon from "../../assets/icons/moon.svg";
import Logo from "../../assets/logo.svg";
import Ring from "../../assets/ring.svg";
import Cart from "../../assets/shopping-cart.svg";
import useMovie from "../../hooks/useMovie";
import CartDetails from "../movie/CartDetails";

function Header() {
  const { cartData } = useMovie();
  console.log(cartData);
  const [showCart, setShowCart] = useState(false);
  const handleCartShow = () => {
    setShowCart(true);
  };

  const activeCart = cartData.filter((cart) => cart.showCart === true);

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
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
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Cart} width="24" height="24" alt="" />
              {activeCart.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {activeCart.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
