import type { SpellOutput } from "@heroapp/shared";
import { firstLetterToUpperCase } from "../../../../formatters/textFormatters";

type SpellProp = Omit<SpellOutput, "_id"> & {
  display: boolean;
};

export default function SpellCard(props: SpellProp) {
  if (!props.display) return null;
  return (
    <ul className="spellCard">
      <li>{props.name}</li>
      <li>
        {firstLetterToUpperCase(props.school)} -{" "}
        {firstLetterToUpperCase(props.type)}
      </li>
      <li>Description: {props.description}</li>
    </ul>
  );
}
