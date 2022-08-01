import "../css/index.css";

import {
  SiGithub
} from "react-icons/si";

function Footer() {
  return (
    <div className="Footer">
      <ul className="bg-gradient-to-b from-blue-500 to-blue-600">
        <li className="text-2xl p-2"><a href="https://github.com/justanotherinternetguy" target="_blank" className="footer-link"><SiGithub /></a></li>
      </ul>
    </div>
  );
}

export default Footer;
