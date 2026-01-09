import placeholderImg from "../../../../assets/user.png";

type HeroCardProps = {
  name: string;
  image: string;
};

export default function MiniHeroCard(props: HeroCardProps) {
  return (
    <>
      <img
        src={props.image ?? placeholderImg}
        alt={`Portray of ${props.name}`}
      />
      <h5>Name: {props.name}</h5>
    </>
  );
}
