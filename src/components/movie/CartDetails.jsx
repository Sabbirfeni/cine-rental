import { motion } from "framer-motion";
import Delete from "../../assets/delete.svg";
import Checkout from "../../assets/icons/checkout.svg";
import useMovie from "../../hooks/useMovie";
import { getImgUrl } from "../../utils/cine-utility";
function CartDetails({ onClose }) {
  const { cartState, cartDispatch } = useMovie();
  const handleDeleteCart = (e, itemId) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };
  const activeCart = cartState.cartData.filter(
    (cart) => cart.showCart === true
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        {/* <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9"> */}
        <div className="bg-white shadow-md dark:bg-[#12141D]  rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          {activeCart.length === 0 ? (
            <span className="text-xl">The Cart is empty.</span>
          ) : (
            activeCart.map((cartItem) => {
              const { id, cover, title, genre, price } = cartItem;
              return (
                <div
                  key={id}
                  className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14"
                >
                  <div className="grid grid-cols-[1fr_auto] gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        className="rounded w-16 h-auto overflow-hidden"
                        src={getImgUrl(cover)}
                        alt="cover"
                      />
                      <div>
                        <h3 className="text-base md:text-xl font-bold">
                          {title}
                        </h3>
                        <p className="max-md:text-xs text-[#575A6E]">{genre}</p>
                        <span className="max-md:text-xs">{price}</span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <button
                        onClick={(e) => handleDeleteCart(e, id)}
                        className="bg-[#ff5353] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                      >
                        <img className="w-5 h-5" src={Delete} alt="" />
                        <span className="max-md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div className="flex items-center justify-end gap-2">
            {activeCart.length !== 0 && (
              <a
                className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                href="#"
              >
                <img src={Checkout} width="24" height="24" alt="" />
                <span>Checkout</span>
              </a>
            )}

            <a
              onClick={onClose}
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CartDetails;
