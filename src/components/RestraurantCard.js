//card
const RestaurantCardComponent = (props) => {
  const { restaurantDetail } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } =
    restaurantDetail.info;
  return (
    <div className="restaurant-card">
      <img
        // src="https://as2.ftcdn.net/jpg/13/76/48/09/1000_F_1376480988_qxSL7F1rBAnhgUtbNFqdOEB2TJjVNIqR.jpg"
        src={cloudinaryImageId}
        alt="Dosa"
      />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <button>+ Cart</button>
      <p>{avgRating} ⭐</p>
    </div>
  );
};
export default RestaurantCardComponent;
