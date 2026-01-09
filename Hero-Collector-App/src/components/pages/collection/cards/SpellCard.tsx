import type { SpellOutput } from "../../../../../../Shared/types/types";

type SpellProp = Omit<SpellOutput, "id"> & {
  display: boolean;
};

export default function SpellCard(props: SpellProp) {
  if (!props.display) return null;
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>
        Type: {props.school} - {props.type}
      </li>
      <li>Description: {props.description}</li>
    </ul>
  );
}
