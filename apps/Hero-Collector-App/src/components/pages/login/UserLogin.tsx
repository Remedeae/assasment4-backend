import LoginButton from "../../globals/buttons/LoginButton";

export default function UserLogin() {
  return (
    <div>
      <p>
        In this current iteration of the page we aim to just set you up with
        heroes. Later on we want to provide you with better games to play,
        involving your characters. Eventually we wand you to be able to discover
        the world of Dungeon Delvers Delux, a roleplaying game where you as a
        guild hire heroes to slay goblins, find loot and uncover the mysteries
        of the{" "}
        <em>
          Dungeon<sup>TM</sup>
        </em>
        .
      </p>
      <div>
        <h3>What are you waiting for?</h3>
        <LoginButton />
      </div>
    </div>
  );
}
