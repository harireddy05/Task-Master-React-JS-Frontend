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
      alltasks: null,
      loading: true
    }
  }

  async componentDidMount() {
    const restapi_url = "http://localhost:3030/api/tasks";
    const response = await fetch(restapi_url);
    const data = await response.json()
    this.setState({ alltasks: data, loading: false })
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
    this.setState({ alltasks: [...this.state.alltasks, newTask] })
  }

  render() {
    if (this.state.loading) {
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontStyle: 'oblique' }}>
            <h4>Loading...</h4>
          </div>
          <p style={{ fontVariant: 'initial' }}>
            If this page loads for too long, please reach out to the developer.
            </p>
        </div>
      )
    }
    else {
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
  
}

export default App;
