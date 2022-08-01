import "../../css/index.css";

import {
  DiCode,
  DiPython,
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiSass,
  DiCodepen,
} from "react-icons/di";

import {
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiProcessingfoundation,
  SiNim,
  SiNumpy,
  SiFlask,
  SiVisualstudiocode,
  SiPycharm,
  SiIntellijidea,
  SiNeovim,
  SiCodesandbox,
  SiGithub,
  SiVercel,
  SiBootstrap,
} from "react-icons/si";

function Skills() {
  return (
    <>
      <h1 className="tech-title text-4xl font-thin">
        <DiCode className="tech-icon" />
        My tech stack
        <DiCode className="tech-icon" />
      </h1>
      <div className="tech">
        <div className="langs">
          <DiPython className="tech-icons" />
          <DiJava className="tech-icons" />
          <DiJavascript1 className="tech-icons" />
          <DiNodejs className="tech-icons" />
          <DiHtml5 className="tech-icons" />
          <DiCss3 className="tech-icons" />
          <SiNim className="tech-icons" />
        </div>
        <div className="stack">
          <SiTailwindcss className="tech-icons" />
          <SiTensorflow className="tech-icons" />
          <SiPytorch className="tech-icons" />
          <SiProcessingfoundation className="tech-icons" />
          <SiNumpy className="tech-icons" />
          <DiReact className="tech-icons" />
          <SiBootstrap className="tech-icons" />
          <DiSass className="tech-icons" />
          <SiFlask className="tech-icons" />
        </div>
      </div>

      <h1 className="tech-title text-4xl font-thin">
        <DiCode className="tech-icon" />
        Tools
        <DiCode className="tech-icon" />
      </h1>

      <div className="tech">
        <SiVisualstudiocode className="tech-icons" />
        <SiPycharm className="tech-icons" />
        <SiIntellijidea className="tech-icons" />
        <SiNeovim className="tech-icons" />
        <DiCodepen className="tech-icons" />
        <SiCodesandbox className="tech-icons" />
        <SiGithub className="tech-icons" />
        <SiVercel className="tech-icons" />
      </div>

      <h1 className="tech-title text-4xl font-thin">
        <DiCode className="tech-icon" />
        Some more details!
        <DiCode className="tech-icon" />
      </h1>
      <ul className="list-interests ml-20 mb-10 mr-96 text-2xl">
        <li><a href="https://www.python.org/" target="_blank" className="body-link">
            Python
          </a></li>
        <ul className="list-interests ml-10">
          <li>4+ years</li>
          <li>Pygame, Turtle, Tkinter - GUI dev</li>
          <li>Flask - Fullstack Web</li>
          <li>Numpy, Matplotlib - Data analysis and graphing</li>
          <li>Tensorflow, Pytorch - AI/ML</li>
          <li>Requests, BS4 - Web scraping</li>
        </ul>
        <li><a href="https://www.java.com/en/" target="_blank" className="body-link">
            Java
          </a></li>
        <ul className="list-interests ml-10">
          <li>2+ years</li>
          <li>Competitive Programming</li>
          <li>Processing - High-level graphics framework</li>
          <li>APCS - CS courses at school</li>
        </ul>
        <li>
        <a href="https://https://www.learncpp.com/" target="_blank" className="body-link">
            C++
          </a>

        </li>
        <ul className="list-interests ml-10">
          <li>2+ years</li>
          <li>Competitive Programming</li>
          <li>PROS Library for VEXAI robotics</li>
        </ul>
        <li><a href="https://www.javascript.com/" target="_blank" className="body-link">
            HTML/CSS/JS
          </a></li>
        <ul className="list-interests ml-10">
          <li>2+ years</li>
          <li>Node.js - Backend + General-purpose JS</li>
          <li>React.js - Frontend JS development</li>
          <li>Tailwind.css, Bootstrap.css - CSS elements + UI</li>
          <li>Sass.css - Better styling for websites</li>
        </ul>
        <li>
          <a href="https://nim-lang.org/" target="_blank" className="body-link">
            Nim (Nimrod)
          </a>
        </li>
        <ul className="list-interests ml-10">
          <li>1 year</li>
          <li>Learning just for fun!</li>
        </ul>
      </ul>
    </>
  );
}

export default Skills;
