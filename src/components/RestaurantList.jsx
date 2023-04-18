import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { Grid } from "@mantine/core";
function RestaurantList({ restaurants }) {
  console.log(restaurants);
  return (
    <div>
      <Grid grow gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        {restaurants?.map((data) => {
          return (
            <Grid.Col span={4}>
              <Link to={"/restaurant/" + data.data.id} key={data.data.id}>
                <RestaurantCard key={data.id} cardData={data.data} />
              </Link>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
}

export default RestaurantList;
