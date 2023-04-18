import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../components/GetResDetails";
import RestaurantInfo from "../components/RestaurantInfo.jsx";
import RestaurantMenu from "../components/RestaurantMenu";
function RestaurantDetails() {
  //retrieve restaurant id from params
  const { resId } = useParams();
  // get restaurant details using custom hook
  const restaurant = useRestaurantDetails(resId);
  return (
    <div>
      <RestaurantInfo restaurant={restaurant?.info} key={restaurant?.info.id} />
      <RestaurantMenu menu={restaurant?.menu} />
    </div>
  );
}

export default RestaurantDetails;
