import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Task extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            borderBottom: '1px #ccc solid',
            padding: '10px',
            textDecoration: this.props.task.isComplete ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, isComplete } = this.props.task;
        return (
            <div style={this.getStyle()}>
                <span>
                    <input type="checkbox" checked={isComplete} onChange={this.props.toggleComplete.bind(this, id)}></input>
                    {' ' + title}
                    <button onClick={this.props.delTask.bind(this, id)} style={delbtnStyle}>Delete</button>
                </span>
            </div>
        )
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const delbtnStyle = {
    background: '#666',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}

export default Task
