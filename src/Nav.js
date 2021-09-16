import { Component } from "react";
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
          <a className={this.props.selectedView === 1 ? "nav-selected":"nav-menu-item"} href="#about">About</a>

          <a className={this.props.selectedView === 2 ? "nav-selected":"nav-menu-item"} href="#work">Work</a>
          <a className={this.props.selectedView === 3 ? "nav-selected":"nav-menu-item"} href="#project">Project</a>
          <a className={this.props.selectedView === 4 ? "nav-selected":"nav-menu-item"}href="mailto:amaie003@ucr.edu" rel="noopener noreferrer"  target="_blank">Contact</a>
        </ul>
        <div className="nav-social">
        <IconContext.Provider value={{ size:"25px",className:"nav-social-items"}}>
            <a  href="mailto:amaie003@ucr.edu" rel="noopener noreferrer" target="_blank">
            <AiOutlineMail/>
            </a>
            <a href="https://www.linkedin.com/in/aierfan/" rel="noopener noreferrer" target="_blank">
            <AiFillLinkedin/>
            </a>
            <a href="https://github.com/amaie003" rel="noopener noreferrer" target="_blank">
            <AiFillGithub />
            </a>
            <a href="https://www.facebook.com/imefan" rel="noopener noreferrer" target="_blank">
            <AiFillFacebook/>
            </a >
            </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default Nav;
