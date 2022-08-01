import "../../css/index.css";
import GitHubCalendar from "react-github-calendar";
import { DiCode } from "react-icons/di";
function Calendar() {
  return (
    <>
      <h1 className="tech-title text-4xl font-thin">
        <DiCode className="tech-icon" />
        Days I <strong>Code</strong>
        <DiCode className="tech-icon" />
      </h1>
      <div className="cal mb-10">
        <p className="font-extrabold">
          <GitHubCalendar
            className="text-4xl"
            username="justanotherinternetguy"
            blockSize={17}
            blockMargin={4}
            fontSize={16}
          />
        </p>
      </div>
    </>
  );
}

export default Calendar;
