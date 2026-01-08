import type { ItemOutput } from "../../../../../Shared/types/types";

type ItemCard = {
  item: Omit<ItemOutput, "id">;
  display: boolean;
};

export default function ItemCard({ item, display }: ItemCard) {
  if (!display) return null;

  return (
    <ul>
      <li>Name: {item.name}</li>
      <li>
        Tier:{item.tier && ` ${item.tier}`}
        {item.equipHand && ` ${item.equipHand}`}
        {item.weapontype && ` ${item.weapontype}`} {item.type}
      </li>
      <li>Description: {item.description}</li>
      <li>Modifier: {item.modifier}</li>
      <li>Price: {item.price} gold</li>
    </ul>
  );
}
