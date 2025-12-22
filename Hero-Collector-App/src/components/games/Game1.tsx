import { useState, useEffect } from "react";

export default function Game1() {
  const numberRandomiser = () => Math.floor(Math.random() * 9) + 2;
  const [goal, setGoal] = useState<number>(() => numberRandomiser());

  const [timePlayed, setTimePlayed] = useState<number>(0);
  const [timerStatus, setTimerStatus] = useState<boolean>(true);
  const [winnerStatus, setWinnerStatus] = useState<string | null>(null);
  const timerStatusMsg: string = timerStatus ? "START" : "RESTART";

  useEffect(() => {
    let i: number;
    if (timerStatus) {
      i = setInterval(() => {
        setTimePlayed((t) => t + 1);
      }, 1500);
    }
    return () => clearInterval(i);
  }, [timerStatus]);

  const fetchReward = () => {};
  const getReward = async () => {
    try {
      const reward = await fetchReward();
      setWinnerStatus(
        `Congratulations, you won! ${reward} has been added to your collection. Press restart to play again!`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleTimer = async () => {
    const toggle = !timerStatus;
    setTimerStatus(toggle);
    if (toggle) {
      setWinnerStatus(null);
      setTimePlayed(0);
      setGoal(() => numberRandomiser());
      return;
    }
    if (timePlayed === goal) {
      await getReward();
    } else {
      setWinnerStatus(
        "Awww you missed the mark. Press 'RESTART' to try again!"
      );
    }
  };
  return (
    <div>
      <h1>Counter match!</h1>
      <h5>Press "STOP" when the counter is {goal}</h5>
      <div className="timer">
        <div>
          <h2>Count:</h2>
          <h1>{timePlayed}</h1>
        </div>
        <h3>{winnerStatus}</h3>
        <button onClick={handleToggleTimer}>{timerStatusMsg}</button>
      </div>
    </div>
  );
}
