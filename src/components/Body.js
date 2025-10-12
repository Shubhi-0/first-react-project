import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [resInput, setResInput] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    console.log("use effect in effect");

    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // cors proxy can be used in order to discontinue extensions  
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    // console.log("data->");
    // console.log(json);
    // console.log("data->");
  };

  console.log(listOfRes);

  return (
   listOfRes?.length === 0 ? (
    <Shimmer />
  ) 
  : (
  // return (
    <div className="body">
      <div className="filter">
        <input
          onChange={(e) => {
            setResInput(e.target.value);
          }}
          value={resInput}
        ></input>
        <button
          onClick={() => {
            const filteredResList = listOfRes.filter((res) => {
              // console.log(resInput.toLowerCase());
              return res?.info?.name
                .toLowerCase()
                .includes(resInput.toLowerCase());
            });
            console.log(listOfRes);
            setFilteredRestaurantList(filteredResList);
          }}
        >
          SEARCH
        </button>
        <button
          onClick={() => {
            setFilteredRestaurantList(listOfRes);
            setResInput('')
          }}
        >
          View All
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-con">
        {/* {console.log(restaurantList[0].info)} */}
        {filteredRestaurantList?.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resData={resObj} />
        ))}
      </div>
    </div>
  ))
};

export default Body;
