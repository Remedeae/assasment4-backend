import type { ItemOutput } from "@heroapp/shared";

type ItemCard = {
  item: Omit<ItemOutput, "id">;
  display: boolean;
};

export default function ItemCard({ item, display }: ItemCard) {
  if (!display) return null;

  return (
    <ul className="itemCard">
      <li className="fullRow">{item.name}</li>
      <li className="fullRow">
        Tier:{item.tier && ` ${item.tier}`}
        {item.equipHand && ` ${item.equipHand}`}
        {item.weapontype && ` ${item.weapontype}`} {item.type}
      </li>
      <li className="fullRow">Description: {item.description}</li>
      <li>Modifier: {item.modifier}</li>
      <li>Price: {item.price} gold</li>
    </ul>
  );
}
