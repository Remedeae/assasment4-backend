import type { Spell } from "../../../../../Backend/src/schemas/dataSchemas/generalGamedataSchema";

type SpellProp = Omit<Spell, "id"> & {
  display: boolean;
};

export default function SpellCard(props: SpellProp) {
  if (!props.display) return null;
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Type: {props.type}</li>
      <li>Description: {props.description}</li>
    </ul>
  );
}
