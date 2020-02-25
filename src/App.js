import React, { Component } from 'react';
import Header from './components/layout/Header'
import AllTasks from './components/AllTasks';
import './App.css';
import { AddNew } from './components/AddNew';
import * as uuid from 'uuid';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      alltasks: [
        {
          id: uuid.v4(),
          title: "something game",
          isComplete: true
        },
        {
          id: uuid.v4(),
          title: "something not so important",
          isComplete: false
        },
        {
          id: uuid.v4(),
          title: "something stupid",
          isComplete: false
        },
        {
          id: uuid.v4(),
          title: "dayum son stupid",
          isComplete: false
        }
      ]
    }
  }

  toggleComplete = (id) => {
    this.setState({
      alltasks: this.state.alltasks.map((task) => {
        if (task.id === id) {
          task.isComplete = !task.isComplete
        }
        return task
      })
    })
  }

  delTask = (id) => {
    this.setState({ alltasks: [...this.state.alltasks.filter(task => task.id !== id)] })
  }

  addTask = (title) => {
    const newTask = {
      id: uuid.v4(),
      title: title,
      isComplete: false
    }
    this.setState({ alltasks: [...this.state.alltasks, newTask]})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="App-container" style={{ paddingBottom: '20px' }}>
          <AddNew addTask={this.addTask} />
        </div>
        <div id="App-container">
          <AllTasks alltasks={this.state.alltasks} toggleComplete={this.toggleComplete} delTask={this.delTask} />
        </div>
      </div>
    );
  }
}

export default App;
