import frame from "../../assets/frames/corner/sun-dark-corner.svg";
import topframe from "../../assets/frames/horizontal/light-moon-horizontal.svg";

export default function Frame() {
  return (
    <div className="frame">
      <img
        className="border-corner top-left-corner"
        src={frame}
        alt="corner top left frame"
      />
      <img
        className="border-corner top-rigth-corner"
        src={frame}
        alt="corner top right frame"
      />

      <img className="border-top" src={topframe} alt="top mid frame" />
      <img
        className="border-corner bottom-left-corner"
        src={frame}
        alt="corner bottom left frame"
      />
      <img
        className="border-corner bottom-right-corner"
        src={frame}
        alt="corner bottom right frame"
      />
    </div>
  );
}
