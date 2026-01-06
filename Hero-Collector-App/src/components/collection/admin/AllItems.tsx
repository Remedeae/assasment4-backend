import type { ItemOutput } from "../../../types/types";
import ItemCard from "../cards/ItemCard";

export default function AllItems() {
  const items: ItemOutput[] = [];
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
