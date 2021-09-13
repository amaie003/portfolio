import { react, Component } from "react";
import "./styles/Nav.scss";
import { AiFillGithub,AiFillLinkedin,AiOutlineMail,AiFillFacebook } from 'react-icons/ai';
import { IconContext } from "react-icons";

import Logo from "./img/Aicon.png";
class Nav extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="nav-main">
        <a className="nav-logo-container" href="#home">
          <img className="nav-logo" src={Logo} alt="Aierfan Logo" />
        </a>

        <ul className="nav-menu">
          <a href="#about">About</a>

          <a href="#work">Work</a>
          <a href="#project">Project</a>
          <a href="mailto:amaie003@ucr.edu" target="_blank">Contact</a>
        </ul>
        <div className="nav-social">
        <IconContext.Provider value={{ size:"25px",className:"nav-social-items"}}>
            <a href="mailto:amaie003@ucr.edu" target="_blank">
            <AiOutlineMail/>
            </a>
            <a href="https://www.linkedin.com/in/aierfan/" target="_blank">
            <AiFillLinkedin/>
            </a>
            <a href="https://github.com/amaie003" target="_blank">
            <AiFillGithub />
            </a>
            <a href="https://www.facebook.com/imefan" target="_blank">
            <AiFillFacebook/>
            </a >
            </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default Nav;
