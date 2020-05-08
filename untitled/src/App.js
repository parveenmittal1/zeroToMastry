import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import {robots} from "./robots";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchField:""
        }
    }

    searchChange=(event)=>{
        this.setState({searchField: event.target.value})
    };

  render() {
      const filterRobots =this.state.robots.filter(robot =>{
          return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
      });
      console.log(filterRobots);
    return (

        <div className="tc">
            <h1>ROBO FRIENDS</h1>
            <SearchBox onSearch={this.searchChange}/>
            <CardList robots={filterRobots}/>
        </div>
    );
  }

}

export default App;
