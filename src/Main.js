import { react, Component } from "react";
import "./styles/Main.scss";
import "./styles/About.scss";
import "./styles/Work.scss";
import "./styles/Project.scss";
import bgImg from "./img/mainBG.png";
import { FaChevronDown } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { IconContext } from "react-icons";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import reactIcon from "./img/reactIcon.png";
import databaseIcon from "./img/databaseIcon.png";
import APIIcon from "./img/APIIcon.png";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      shownSpecialty: false,
      selectedWork: 0,
      selectedProject: -1,
      selectedScreenShot: 0,
    };
    this.scroller = null;
  }

  componentDidMount = () => {
    if (this.scroller) {
      this.scroller.addEventListener(
        "scroll",
        this.handleScroll.bind(this),
        false
      );
    }
  };

  componentWillUnmount = () => {
    if (this.scroller) {
      this.scroller.removeEventListener(
        "scroll",
        this.handleScroll.bind(this),
        false
      );
    }
  };
  handleScroll = () => {
    if (this.scroller == null) return;
    const { scrollHeight, scrollTop, clientHeight } = this.scroller;
    if (scrollTop > clientHeight - clientHeight / 3) {
      this.setState({
        shownSpecialty: true,
      });
    }
  };
  paragraphs = () => {
    return (
      <div>
        {this.props.para.map((key, index) => (
          <p key="index">{key}</p>
        ))}
      </div>
    );
  };

  specialties = () => {
    return (
      <div className="main-about-specialties" ref={this.specialtiesRef}>
        {this.props.specialties.map((key, index) => (
          <div className="main-about-specialty-item" key={index}>
            <p>{key["body"]}</p>
            <h1>{key["title"]}</h1>
            <div className="main-about-specialty-img-container">
              <img
                className="main-about-specialty-img"
                alt={
                  index == 0
                    ? `React Web Application`
                    : index == 1
                    ? `Database Construction`
                    : index == 2
                    ? `Rest API Development`
                    : ""
                }
                src={
                  index == 0
                    ? reactIcon
                    : index == 1
                    ? databaseIcon
                    : index == 2
                    ? APIIcon
                    : ""
                }
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  workContent = (i) => {
    var { work } = this.props;
    work = work[i];
    return (
      <div>
        <h1>{work["title"]}</h1>
        <div className="main-work-subTextContainer">
          <div className="main-work-subText-item">
            <b>Company</b>: {work["company"]}
          </div>
          <div className="main-work-subText-item">
            <b>Type</b>: {work["type"]}
          </div>
          <div className="main-work-subText-item">
            <b>Start</b>: {work["start"]}
          </div>
          <div className="main-work-subText-item">
            <b>End</b>: {work["end"]}
          </div>
        </div>
        <div className="main-work-description pushInEffect">
          {work["des"].map((key, index) => (
            <ul>
              <li key={index}>{key}</li>
            </ul>
          ))}
        </div>

        <h4></h4>
      </div>
    );
  };

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
  handleWorkSelection = (i) => {
    this.setState({
      selectedWork: i,
    });
  };
  changeProjectDetail = (i) => {
    this.setState({
      selectedProject: i,
    });
  };
  switchImage=(i,length)=>{
    if (i>=0 && i < length){
      this.setState({
        selectedScreenShot:i

      })
    }

  }

  projectDetail = () => {
    var { projects } = this.props;

    if (
      this.state.selectedProject === -1 ||
      this.state.selectedProject === null ||
      this.state.selectedProject === undefined
    ) {
      return <div className="main-project-detail"></div>;
    }
    var project = projects[this.state.selectedProject];
    return (
      <div className="main-project-detail">
        <div className="main-project-detail-body">
          <div className="main-project-detail-back-container">
            <div
              className="main-project-detail-back"
              onClick={() => this.changeProjectDetail(-1)}
            >
              <IconContext.Provider
                value={{
                  color: "white",
                  size: 30,
                  className: "main-project-close",
                }}
              >
                <VscChromeClose />
              </IconContext.Provider>
            </div>
          </div>
          <div className="main-project-detail-content">
            <h1 className="main-project-detail-title">{project["title"]}</h1>
            <div className="main-project-detail-info">
              <div className="main-project-info-item">
                <b>Tech</b>: {project["tech"]}
              </div>
              <div className="main-project-info-item">
                <b>Type</b>: {project["type"]}
              </div>
            
              <div className="main-project-info-item">
                <b>Date</b>: {project["end"]}
              </div>
            </div>
            {project["imgs"].length > 0 && (
              <div className="main-project-detail-screenshot-container">
                ScreenShots:
                <div className="main-project-detail-img-container pushInEffect">
                  <div className="main-project-detail-img">
                    {this.state.selectedScreenShot>0 &&
                    <div onClick={()=>this.switchImage(this.state.selectedScreenShot-1,project["imgs"].length)} className="main-project-detail-img-arrow main-project-detail-arrow-left">
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: 30,
                         
                        }}
                      >
                        <BsChevronLeft />
                      </IconContext.Provider>
                    </div>
                    }
                    <div className="main-project-detail-display-img">
                      <img
                        src={
                          require("" +
                            project["imgs"][this.state.selectedScreenShot])
                            .default
                        }
                      />
                    </div>

                   { this.state.selectedScreenShot < project["imgs"].length -1 && 
                    <div onClick={()=>this.switchImage(this.state.selectedScreenShot+1,project["imgs"].length)} className="main-project-detail-img-arrow main-project-detail-arrow-right">
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: 30,
                         
                        }}
                      >
                        <BsChevronRight />
                      </IconContext.Provider>
                    </div>
                }

                    <div className="main-project-detail-img-position">
                      {this.state.selectedScreenShot + 1} of{" "}
                      {project["imgs"].length}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <ul className="main-project-detail-des pushInEffect">
                {project["des"].map((key,index)=>(
                  <li key={"project_detail_item_"+index}>
                    {key}
                  </li>
                ))}
            </ul>
            <div className="main-project-detail-buttons">
              {project["links"].map((key,index)=>(
                <a className="blue_button" target="_blank" key={"project-detail-button-"+index} href={key["url"]} >{key["title"]}</a>
              ))
           
              }
            </div>
          </div>
        </div>
      </div>
    );
  };

  projectGrid = () => {
    var { projects } = this.props;
    return projects.map((key, index) => (
      <div
        className="main-project-grid-item pushInEffect"
        onClick={() => this.changeProjectDetail(index)}
        key={"projectItem-" + index}
      >
        <div className="main-project-icon-container">
          <img
            className="main-project-icon"
            src={require("" + key["logo_img"]).default}
            alt={key["title_short"]}
          />
          <div className="main-project-grid-item-title-container">
            <div className="main-project-grid-item-title">
              {key["title_short"]}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    var { work } = this.props;
    return (
      <div className="main-container" ref={(rf) => (this.scroller = rf)}>
        <div className="main-main">
          <a id="home"></a>
          <img
            className="main-bg"
            src={bgImg}
            alt="Aierfan Portfoil Main Background"
          />
          <div className="main-scroll_indicater">
            <IconContext.Provider
              value={{
                color: "white",
                size: 20,
                className: "main-down_arrow main-down_arrow1",
              }}
            >
              <div>
                <FaChevronDown />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "white",
                size: 20,
                className: "main-down_arrow main-down_arrow2",
              }}
            >
              <div>
                <FaChevronDown />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "white",
                size: 20,
                className: "main-down_arrow main-down_arrow3",
              }}
            >
              <div>
                <FaChevronDown />
              </div>
            </IconContext.Provider>
            <div className="main_scroll_text">Scroll Down</div>
          </div>
          <div className="main-bg_gradient"></div>
          <div className="main-text_zone">
            <h1 className="main-main_title">
              {this.props.mainTitle}{" "}
              <span className="main-title_name">{this.props.name}</span>{" "}
            </h1>
            <br />
            <h1 className="main-main_title">{this.props.mainTitleSub}</h1>
            <br />
            <h2 className="main-sub_title">{this.getsubTitle()}</h2>
            <br />
            <a href="mailto:amaie003@ucr.edu" className="main-contact_button blue_button">
              Email Me
            </a>
          </div>
        </div>
        <div className="main-screen-block">
          <a id="about"></a>
          <div className="main-textBox">
            <div className="main-title-container">
              <div className="main-title">About</div>
              <div className="main-title-underline"></div>
            </div>
            {this.state.shownSpecialty == true && this.specialties()}
          </div>
        </div>
        <div className="main-screen-block">
          <div className="main-textBox">
            <div className="main-title-container">
              <div className="main-title">Work</div>
              <div className="main-title-underline"></div>
            </div>
            <div className="main-body-container">
              <div className="main-work-menu">
                <ul>
                  <li
                    className={
                      this.state.selectedWork === 0
                        ? "highLight-button"
                        : "main-menu-item"
                    }
                    onClick={() => {
                      this.handleWorkSelection(0);
                    }}
                  >
                    {work[0]["title"]}
                  </li>
                  <li
                    className={
                      this.state.selectedWork === 1
                        ? "highLight-button"
                        : "main-menu-item"
                    }
                    onClick={() => {
                      this.handleWorkSelection(1);
                    }}
                  >
                    {work[1]["title"]}
                  </li>

                  <li
                    className={
                      this.state.selectedWork === 2
                        ? "highLight-button"
                        : "main-menu-item"
                    }
                    onClick={() => {
                      this.handleWorkSelection(2);
                    }}
                  >
                    {work[2]["title"]}
                  </li>
                </ul>
              </div>
              <div className="main-work-body">
                <a id="work"></a>
                {this.state.selectedWork === 0 ||
                this.state.selectedWork === undefined ||
                this.state.selectedWork === null
                  ? this.workContent(0)
                  : this.workContent(this.state.selectedWork)}
              </div>
            </div>
          </div>
        </div>
        <div className="main-screen-block">
          {this.state.selectedProject !== -1 &&
            this.state.selectedProject !== null &&
            this.state.selectedProject !== undefined &&
            this.projectDetail(this.state.projectDetail)}
          <div className="main-textBox">
            <div className="main-title-container">
              <a id="project"></a>
              <div className="main-title">Project</div>
              <div className="main-title-underline"></div>
            </div>

            <div className="main-project-container">{this.projectGrid()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
