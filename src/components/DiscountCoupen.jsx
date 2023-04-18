import { Text, Group, Card } from "@mantine/core";
function DiscountCoupen({ coupens }) {
  return (
    <>
      {/* Displaying coupen details */}
      {coupens?.map((items, index) => {
        return (
          <Card shadow="sm" padding="lg" radius="md" withBorder key={index}>
            <Group>
              <Text>{items?.meta}</Text>
            </Group>
          </Card>
        );
      })}
    </>
  );
}

export default DiscountCoupen;
