import { react,Component} from 'react';
import './App.scss';
import {portfolioData} from './data/data';
import Nav from './Nav';
import Main from './Main';



class App extends Component {
  constructor(){
    super();
    this.data = portfolioData;

    this.state = {
      
        }
  }
  
  render(){
  return (
    <div className="app">
      <Nav className="nav"/>
      <Main className="main"
      mainTitle={this.data["welcome"]["main_title"]}
      mainTitleSub={this.data["welcome"]["main_title_sub"]}
      subTitle= {this.data["welcome"]["sub_title"]}
      />
    </div>
  );
  }
}

export default App;
