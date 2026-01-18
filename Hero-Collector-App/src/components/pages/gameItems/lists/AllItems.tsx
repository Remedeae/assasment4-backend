import { useEffect, useState } from "react";
import { api } from "../../../../../api/axios";

import type { ItemOutput } from "../../../../../../Shared/types/types";
import ItemCard from "../../collection/cards/ItemCard";

export default function AllItems() {
  const [items, setItems] = useState<ItemOutput[] | []>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api<ItemOutput[]>("get", "/gameitems/items");
      setItems(response ?? []);
    };
    fetchItems();
  }, [items]);
  return (
    <>
      {items?.length !== 0 ? (
        <ul>
          {items.map((i) => (
            <li key={i._id}>
              <ItemCard display={true} item={i} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No items found.</h3>
      )}
    </>
  );
}
