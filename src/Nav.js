import { react,Component} from 'react';
import './styles/Nav.scss'
class Nav extends Component {
    constructor(){
      super();

  
      this.state = {
        
          }
    }
    
    render(){
    return (
      <div className="nav-main">
        <ul className="nav-menu">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
        </ul>
        <div className="nav-social">
        
        </div>
      </div>
    );
    }
  }
  
  export default Nav;
  