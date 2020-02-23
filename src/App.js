import React, { Component } from 'react';
import AllTasks from './components/AllTasks';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      alltasks: [
        {
          id: 1,
          title: "something game",
          isComplete: false
        },
        {
          id: 2,
          title: "something not so important",
          isComplete: false
        },
        {
          id: 3,
          title: "something stupid",
          isComplete: false
        },
        {
          id: 4,
          title: "dayum son stupid",
          isComplete: false
        }
      ]
    }
  }

  toggleComplete = (id) => {
    this.setState({ alltasks: this.state.alltasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete
      }
      return task
    }) })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">Task Master</h3>
        </header>
        <div id="App-container">
          <AllTasks alltasks={this.state.alltasks} toggleComplete={this.toggleComplete} />
        </div>
      </div>
    );
  }
}

export default App;
