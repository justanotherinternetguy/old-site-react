import "../../css/index.css";

function Information() {
  return (
    <div className="Info pt-16 mx-10">
      <h1 className="text-6xl mt-10">👋 Hey! I'm justanotherinternetguy</h1>
      <p className="text-2xl mr-96">
        I'm a <strong>developer</strong> from the United States (EST). I'm a
        teenager learning to code and develop in my free time. I fell in love
        with computer science in general when and I have learnt many things...{" "}
        <strong>I hope...</strong>
        <br />
        <br />
        <br />
        My field of interests incude:
        <ul className="list-interests ml-10 mr-96">
          <li>Fullstack Web Development</li>
          <li>AI/ML</li>
          <li>Competitive Programming</li>
          <li>Ethical hacking / Pentesting</li>
          <li>General development</li>
          <li>FOSS contribution</li>
          <li>Linux!</li>
        </ul>
      </p>
    </div>
  );
}

export default Information;
