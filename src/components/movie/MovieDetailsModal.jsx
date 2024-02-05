import { getImgUrl } from "../../utils/cine-utility";
import Stars from "./Stars";

import { motion } from "framer-motion";

function MovieDetailsModal({ movie, onClose, onCardAdd, onCheckIsShowCart }) {
  const { id, cover, title, description, genre, rating, price } = movie;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm"
    >
      <motion.div className=" w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={getImgUrl(cover)}
            alt=""
          />
          <div className="p-5 lg:p-11">
            <div className="">
              <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">
                {title}
              </h2>
              <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                {genre}
              </span>
              <div className="flex items-center space-x-1 mb-5">
                <Stars value={rating} />
              </div>
              <div></div>
            </div>
            <p className="text-sm lg:text-base mb-8 lg:mb-16">{description}</p>
            <div className="grid lg:grid-cols-2 gap-2">
              {onCheckIsShowCart(id) ? (
                <a
                  onClick={(e) => onCardAdd(e, movie)}
                  className="bg-[#ff5353] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                  href="#"
                >
                  <img src="./assets/tag.svg" alt="" />
                  <span>Remove from Cart</span>
                </a>
              ) : (
                <a
                  onClick={(e) => onCardAdd(e, movie)}
                  className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                  href="#"
                >
                  <img src="./assets/tag.svg" alt="" />
                  <span>${price} | Add to Cart</span>
                </a>
              )}
              <a
                onClick={onClose}
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 
                font-semibold text-sm"
                href="#"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MovieDetailsModal;
