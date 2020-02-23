import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class AllTasks extends Component {

  render() {
    return (
      <div>
        {this.props.alltasks.map((task) => (
          <Task key={task.id} task={task} toggleComplete={this.props.toggleComplete}/>
        ))}
      </div>
    );
  }
}

AllTasks.propTypes = {
  alltasks: PropTypes.array.isRequired
}

export default AllTasks;
