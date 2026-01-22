import { useEffect, useState } from "react";
import type { ItemInput } from "../../../../../../Shared/types/types";
import {
  weaponType,
  equipHand,
} from "../../../../../../Shared/types/base/generalGamedataSchema";
import { api } from "../../../../../api/axios";

export default function AddItemForm({
  displayFormFalse,
}: {
  displayFormFalse: () => void;
}) {
  type InputTypes = {
    type: string;
    addToArray: boolean;
  };

  const [item, setItem] = useState<ItemInput>({
    name: "",
    type: [],
    quantity: 1,
    description: null,
    modifier: null,
    tier: null,
    equipHand: null,
    weapontype: null,
    price: null,
  });
  const [inputTypes, setInputTypes] = useState<InputTypes[]>([]);
  const [customType, setCustomType] = useState<string>("");
  const selectedTypes = inputTypes
    .filter((t) => t.addToArray)
    .map((t) => t.type);

  const [postSuccess, setPostSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await api<string[]>("GET", "/gameitems/items/types");
      const addBoolean: InputTypes[] = response.map((t) => ({
        type: t,
        addToArray: false,
      }));
      setInputTypes(addBoolean);
    };
    fetchTypes();
  }, []);

  const addCustomType = () => {
    const newType: InputTypes = {
      type: customType,
      addToArray: true,
    };
    setInputTypes((inputTypes) => [...inputTypes, newType]);
    setCustomType("");
  };

  const postItem = async () => {
    const addTypes = { ...item, type: selectedTypes };
    const response = await api<string>("POST", "/gameitems/items", addTypes);
    setPostSuccess(response);
    setTimeout(() => {
      displayFormFalse();
    }, 3000);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Item name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter item name"
          value={item.name}
          onChange={(e) =>
            setItem((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />

        <label htmlFor="type">
          {" "}
          Type
          {inputTypes.map((t) => (
            <div key={t.type}>
              {t.type} :{" "}
              <input
                type="checkbox"
                checked={t.addToArray}
                onChange={(e) => {
                  setInputTypes((prev) =>
                    prev.map((item) =>
                      item.type === t.type
                        ? { ...item, addToArray: e.target.checked }
                        : item,
                    ),
                  );
                }}
              />
            </div>
          ))}
          <div>
            {" "}
            <input
              type="text"
              placeholder="Enter custom type"
              value={customType ?? ""}
              onChange={(e) => setCustomType(e.target.value)}
            />
            <button type="button" onClick={addCustomType}>
              +
            </button>
          </div>
        </label>

        <label htmlFor="modifier">Modifier</label>
        <input
          type="text"
          id="modifier"
          placeholder="Modifier with conditions (eg +2 to melee brawn)"
          value={item.modifier ?? ""}
          onChange={(e) =>
            setItem((prev) => ({
              ...prev,
              modifier: e.target.value === "" ? null : e.target.value,
            }))
          }
        />

        {inputTypes.find((t) => t.type === "weapon")?.addToArray && (
          <>
            <label htmlFor="weaponType">Weapon Type</label>
            <select
              id="weaponType"
              value={item.weapontype ?? weaponType[0]}
              onChange={(e) =>
                setItem((prev) => ({
                  ...prev,
                  weapontype: e.target.value,
                }))
              }
            >
              {weaponType.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <label htmlFor="eqipHand">Hand equipped in</label>
            <select
              id="eqipHand"
              value={item.equipHand ?? equipHand[0]}
              onChange={(e) =>
                setItem((prev) => ({
                  ...prev,
                  equipHand: e.target.value,
                }))
              }
            >
              {equipHand.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </>
        )}

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Enter item description"
          value={item?.description ?? ""}
          onChange={(e) =>
            setItem((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />

        <label htmlFor="quantity">Quantity items in purcahse kit</label>
        <input
          type="number"
          id="quantity"
          value={item.quantity}
          onChange={(e) =>
            setItem((prev) => ({
              ...prev,
              quantity: e.target.value === "" ? 0 : Number(e.target.value),
            }))
          }
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={item.price ?? 0}
          onChange={(e) =>
            setItem((prev) => ({
              ...prev,
              price: e.target.value === "" ? 0 : Number(e.target.value),
            }))
          }
        />
      </div>
      <button onClick={() => postItem()}>Post Item</button>
      {postSuccess && <h3>{postSuccess}</h3>}
    </div>
  );
}
