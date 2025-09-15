import React from "react";

const RestraurantMenuCard = (props) => {
  const {
    name,
    description,
    isBestseller = false,
    price,
    defaultPrice,
  } = props.menuList;

  const spriteUrl = new URL(
    "../../public/icons/sprites.svg",
    import.meta.url
  ).toString();

  return (
    <div className="menu-item-container">
      <div className="food-info">
        <div className="veg-icon">
          <svg height="16" width="16">
            <use xlinkHref={`${spriteUrl}#vegVeg16`}></use>
          </svg>
          {isBestseller && (
            <svg height="16" width="74" style={{ marginLeft: "4px" }}>
              <use xlinkHref={`${spriteUrl}#bestseller16`} />
            </svg>
          )}
        </div>

        <p className="food-name">{name}</p>

        <div className="price">
          <p>
            ₹<span>{(price || defaultPrice) / 100}</span>
          </p>
        </div>
        <div className="rating">
          <p>
            ⭐ 4.3
            {`(${306})`}
          </p>
        </div>

        <div className="description">{description}</div>
      </div>
      <div className="food-image">
        <img
          style={{ height: "144px", objectFit: "cover", borderRadius: "12px" }}
          src="https://i0.wp.com/cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg?fit=1344%2C768&ssl=1"
        />
        <div className="add-item-btn-container">
          <button className="add-item-btn">+ ADD</button>
        </div>
      </div>
    </div>
  );
};

export default RestraurantMenuCard;
