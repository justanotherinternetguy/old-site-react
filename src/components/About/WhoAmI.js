import "../../css/index.css";

import { DiCode } from "react-icons/di";

function WhoAmI() {
  return (
    <>
      <h1 className="tech-title text-4xl font-thin">
        <DiCode className="tech-icon" />
        Who am I?
        <DiCode className="tech-icon" />
      </h1>
      <p className="text-2xl mx-10">
        Hey! I'm a teenager currently living in the United States. While I'm
        currently learning programming on my own. I'm currently trying to learn
        some AI/ML, but I'm pretty much OK with learning{" "}
        <strong>anything.</strong> I'm still trying to figure out what facet of
        CS I want to pursue in the future, so, I try to cast my net wide and
        learn alot. My tech stack and the tools I use are{" "}
        <strong>diverse</strong> and powerful.
      </p>
    </>
  );
}

export default WhoAmI;
