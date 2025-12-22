import { useEffect, useState } from "react";

type TimerProps = {
  toggleMsg1: string;
  toggleMsg2: string;
  reset: boolean;
};

export default function Timer(props: TimerProps) {
  const [timePlayed, setTimePlayed] = useState<number>(0);
  const [timerStatus, setTimerStatus] = useState<boolean>(true);
  const timerStatusMsg: string = timerStatus
    ? props.toggleMsg1
    : props.toggleMsg2;

  useEffect(() => {
    let i: number;
    if (timerStatus) {
      i = setInterval(() => {
        setTimePlayed((t) => t + 1);
      }, 1500);
    }
    return () => clearInterval(i);
  }, [timerStatus]);

  const handleToggleTimer = () => {
    const toggleOn = !timerStatus;
    setTimerStatus(toggleOn);
    if (toggleOn && props.reset) setTimePlayed(0);
  };

  return (
    <div className="timer">
      <div>
        <h2>Count:</h2>
        <h1>{timePlayed}</h1>
      </div>
      <button onClick={handleToggleTimer}>{timerStatusMsg}</button>
    </div>
  );
}
