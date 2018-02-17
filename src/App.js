import React, { Component } from 'react';
import logo from './logo.svg';
import { array1, array2 } from './initData'; 
import MovieList from './MovieList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: true,
      selectedList: array1
    }
  }

  onChange(option) {
    
    if(option === 'option1') {
      this.setState({ selectedOption:true, selectedList: array1 });
    } else {
      this.setState({ selectedOption:false, selectedList: array2 });      
    }
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Show List of Movies</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12" >
                <form >
                  <div className="radio">
                      <label >
                        <input type="radio" value="option1" checked={this.state.selectedOption}
                            onChange={()=> this.onChange('option1')} />
                            Option 1
                      </label>
                  </div>

                  <div className="radio">
                      <label >
                        <input type="radio" value="option2" checked={!this.state.selectedOption} 
                            onChange={()=> this.onChange('option2')} />
                            Option 2
                      </label>
                  </div>

                  {/*  Movie list here */}

                  <MovieList 
                    movieList={this.state.selectedList}  
                  />

                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
