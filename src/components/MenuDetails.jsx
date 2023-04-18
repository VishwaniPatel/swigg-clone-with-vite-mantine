import React from "react";
import {
  IconSquareRoundedFilled,
  IconStar,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import { IMG_CDN_URL } from "../environment";
import { Text, Group, Image, Flex, Grid } from "@mantine/core";
function MenuDetails({ menuDetails }) {
  return (
    <>
      {/* Display menu */}
      {menuDetails?.map((menu) => {
        return (
          <Grid
            key={menu.card.info?.id}
            grow
            gutter="sm"
            gutterXs="md"
            gutterMd="xl"
            gutterXl={50}
          >
            <Grid.Col span={6}>
              <Group>
                {/* Check for veg/non veg */}

                {menu.card.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                  <IconSquareRoundedFilled size={20} color="red" />
                ) : (
                  <IconSquareRoundedFilled size={20} color="green" />
                )}

                {/* Check for Bestsellers */}
                {menu?.card?.info?.ribbon?.text === "Bestseller" && (
                  <Group>
                    <IconStar size={14} />
                    <Text>Bestseller</Text>
                  </Group>
                )}
              </Group>
              <Group>
                <Flex direction="column">
                  <Text>{menu.card.info?.name}</Text>

                  <Text>
                    <IconCurrencyRupee />
                    {menu.card.info?.price / 100}
                  </Text>
                  <Text>{menu.card.info?.description}</Text>
                </Flex>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              {/* Display food item name and price */}

              {/* Display food item image */}
              {!menu.card.info?.imageId ? null : (
                <Image
                  maw={240}
                  ml="auto"
                  radius="md"
                  src={IMG_CDN_URL + menu.card.info?.imageId}
                />
              )}
            </Grid.Col>
          </Grid>
        );
      })}
    </>
  );
}

export default MenuDetails;
