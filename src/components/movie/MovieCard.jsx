import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMovie from "../../hooks/useMovie";
import { getImgUrl } from "../../utils/cine-utility";
import minimizeText from "../../utils/minimizeText";
import MovieDetailsModal from "./MovieDetailsModal";
import Stars from "./Stars";
function MovieCard({ movie }) {
  const { id, cover, title, genre, rating, price } = movie;

  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartState, cartDispatch } = useMovie();

  const handleAddToCart = (e, movieItem) => {
    e.stopPropagation();
    cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        ...movieItem,
      },
    });
  };

  const checkIsShowCart = (movieId) => {
    const movieCartData = cartState.cartData.find(
      (cart) => cart.id === movieId
    );
    if (movieCartData) {
      return movieCartData.showCart;
    } else {
      return false;
    }
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setShowModal(true);
    setSelectedMovie(movie);
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {showModal && (
          <MovieDetailsModal
            movie={selectedMovie}
            onClose={handleModalClose}
            onCardAdd={handleAddToCart}
            onCheckIsShowCart={checkIsShowCart}
          />
        )}
      </AnimatePresence>

      <figure
        onClick={() => handleMovieSelection(movie)}
        className="p-4 border cursor-pointer border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <div className="relative">
          <motion.span
            layoutId={id}
            className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></motion.span>
          <img
            className="w-full h-72 object-cover"
            src={getImgUrl(cover)}
            alt=""
          />
        </div>

        <div>
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{minimizeText(title, 15)}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Stars value={rating} />
            </div>
            {checkIsShowCart(id) ? (
              <button
                onClick={(e) => handleAddToCart(e, movie)}
                className="bg-[#ffafaf] rounded-lg w-full py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>Remove from Cart</span>
              </button>
            ) : (
              <button
                onClick={(e) => handleAddToCart(e, movie)}
                className="bg-primary rounded-lg w-full py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>${price} | Add to Cart</span>
              </button>
            )}
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default MovieCard;
