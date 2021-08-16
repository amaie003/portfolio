import { react, Component } from "react";
import "./styles/Main.scss";
import bgImg from './img/mainBG.png';
import { FaBeer } from 'react-icons/fa';

class Main extends Component {
  constructor() {
    super();
   
  }
  

  getsubTitle = () => {
    return (
      <span>
        {this.props.subTitle.map((key, index) => (
          <span key={index}>
            <span className="main-sub_title_element">{key}</span>
            {index != this.props.subTitle.length - 1 && (
              <span className="main-sub_title_seperater">|</span>
            )}
          </span>
        ))}
      </span>
    );
  };

  render() {
    return (
      <div className="main-container">

        <div className="main-main" > 
        <img className="main-bg" src={bgImg} alt="Aierfan Portfoil Main Background"/>
          <div className="main-bg_gradient"></div>
          <div className="main-text_zone">
            <h1 className="main-main_title">{this.props.mainTitle} </h1>
            <br />
            <h1 className="main-main_title">{this.props.mainTitleSub}</h1>
            <br />
            <h2 className="main-sub_title">{this.getsubTitle()}</h2>
            <br/>
            <button className="main-contact_button blue_button">Email Me</button>
          </div>
        </div>
        <a id="about"></a>
        <div>about aboutaboutaboutabout</div>
      </div>
    );
  }
}

export default Main;
