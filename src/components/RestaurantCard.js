import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (resData) => {
  //   const { cuisines, costForTwo, cloudinaryImageId, name } = resObj?.info;
  // console.log("=>");
  // console.log(resData.resData.info);

  const { cuisines, avgRating, name, costForTwo, cloudinaryImageId } =
    resData.resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#F7E7D7" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_LINK + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating}</div>
      <div>{costForTwo}</div>
    </div>
  );
};

export default RestaurantCard;
