import "../../css/index.css";

import "animate.css/animate.min.css";
import ReactTypingEffect from "react-typing-effect";

function Heading() {
  return (
    <div className="Heading">
      <h1 className="text-6xl font-thin mt-64 mx-10 tracking-wide">
        justanotherinternetguy
      </h1>
      <h3 className="text-3xl font-thin mt-10 mx-10 tracking-wide">
        <ReactTypingEffect
          text={[
            "Fullstack web developer",
            "Learning AI/ML",
            "Aspiring Competitive Programmer",
          ]}
          speed={100}
          cursor={" "}
          typingDelay={300}
          eraseDelay={1200}
          eraseSpeed={100}
        />
      </h3>

      <p className="text-xl font-thin mt-2 mx-10 tracking-wide">
        "I love overengineering everything"
      </p>
    </div>
  );
}

export default Heading;
