import type { Item } from "../../../../../Backend/src/schemas/dataSchemas/generalGamedataSchema";

type ItemCard = Omit<Item, "id"> & {
  display: boolean;
};

export default function ItemCard(props: ItemCard) {
  if (!props.display) return null;

  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Type: {props.type}</li>
      <li>Description: {props.description}</li>
      <li>Modifier: {props.modifier}</li>
    </ul>
  );
}
