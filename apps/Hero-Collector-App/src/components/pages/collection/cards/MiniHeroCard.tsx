import placeholderImg from "../../../../assets/user.png";

type HeroCardProps = {
  name: string;
  image: string | null;
  title: string;
};

export default function MiniHeroCard(props: HeroCardProps) {
  return (
    <div className="heroCardMini">
      <img
        src={props.image ?? placeholderImg}
        alt={`Portray of ${props.name}`}
      />
      <div>
        <h5>Name: {props.name}</h5>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}
