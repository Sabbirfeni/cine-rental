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
  const { cartData, setCartData } = useMovie();

  const handleAddToCart = (e, movieItem) => {
    e.stopPropagation();
    const found = cartData.find((item) => {
      return item.id === movieItem.id;
    });
    if (!found) {
      setCartData([...cartData, { ...movieItem, showCart: true }]);
    } else {
      const updatedCart = cartData.map((cart) => {
        if (cart.id === movieItem.id) {
          return { ...cart, showCart: !cart.showCart };
        } else {
          return cart;
        }
      });
      setCartData([...updatedCart]);
    }
  };

  const checkIsShowCart = (movieId) => {
    const movieCartData = cartData.find((cart) => cart.id === movieId);
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
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCardAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          className="w-full h-2/3 object-cover"
          src={getImgUrl(cover)}
          alt=""
        />
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{minimizeText(title, 15)}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Stars value={rating} />
            </div>
            {checkIsShowCart(id) ? (
              <a
                onClick={(e) => handleAddToCart(e, movie)}
                className="bg-[#ffafaf] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>Remove from Cart</span>
              </a>
            ) : (
              <a
                onClick={(e) => handleAddToCart(e, movie)}
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>${price} | Add to Cart</span>
              </a>
            )}
          </figcaption>
        </a>
      </figure>
    </>
  );
}

export default MovieCard;
