import type { Item } from "../../../../../Backend/src/schemas/dataSchemas/generalGamedataSchema";
import ItemCard from "../cards/ItemCard";

export default function AllItems() {
  const items: Item[] = [];
  return (
    <ul>
      {items.length > 0 &&
        items.map((i) => (
          <li key={i.id}>
            <ItemCard
              display={true}
              name={i.name}
              type={i.type}
              description={i.description}
              modifier={i.modifier}
            />
          </li>
        ))}
    </ul>
  );
}
