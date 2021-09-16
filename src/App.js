import {Component} from 'react';
import './App.scss';
import './styles/Buttons.scss';

import {portfolioData} from './data/data';
import Nav from './Nav';
import Main from './Main';



class App extends Component {
  constructor(){
    super();
    this.data = portfolioData;

    this.state = {
      selectedView: 0
        }
  }
  changeViewIndex=(i)=>{
    this.setState({
      selectedView:i

    })
  }
  
  
  render(){
  return (
    <div className="app">
     
      <Nav 
      selectedView={this.state.selectedView}
      />

      <Main className="main"
      
      mainTitle={this.data["welcome"]["main_title"]}
      mainTitleSub={this.data["welcome"]["main_title_sub"]}
      subTitle= {this.data["welcome"]["sub_title"]}
      name = {this.data["name"]}
      para = {this.data["about"]["paragraphs"]}
      specialties={this.data["about"]["specialties"]}
      work={this.data["work"]}
      projects = {this.data["projects"]}
      changeViewIndex = {this.changeViewIndex}
      />
    </div>
  );
  }
}

export default App;
