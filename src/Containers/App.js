import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.module.css'



class App extends Component {
    constructor() {
      super()
      this.state = {
        monsters: [],
        searchfield: ''
      }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ monsters: users})});
      }



      onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
      }
    
      render() {
        const { monsters, searchfield } = this.state;
        const filteredMonsters = monsters.filter(monsters =>{
          return monsters.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !monsters.length ?
          <h1>Loading</h1> :
          (
            <div className='tc'>
              <h1 className='f1'>ROBO MONSTERS</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <CardList monsters={filteredMonsters} />
              </Scroll>
            </div>
          );
      }
    }
    
    export default App;