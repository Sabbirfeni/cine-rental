import StarGrey from "../../assets/star-grey.svg";
import Star from "../../assets/star.svg";

function Stars({ value }) {
  const stars = Array(5).fill("");
  return (
    <>
      {stars.map((star, index) => {
        return index + 1 <= value ? (
          <img key={index} src={Star} alt="star" />
        ) : (
          <img key={index} src={StarGrey} alt="star-grey" />
        );
      })}
    </>
  );
}

export default Stars;
