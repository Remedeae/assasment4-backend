import type { FullSpellOutput } from "../../../types/types";

type SpellProp = Omit<FullSpellOutput, "id"> & {
  display: boolean;
};

export default function SpellCard(props: SpellProp) {
  if (!props.display) return null;
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>
        Type: {props.school} - {props.schoolType}
      </li>
      <li>Description: {props.description}</li>
    </ul>
  );
}
