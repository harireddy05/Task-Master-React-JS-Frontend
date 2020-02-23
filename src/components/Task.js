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
        const { id, title } = this.props.task;
        return (
            <div style={this.getStyle()}>
                <span>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}></input>
                    {' ' + title}
                </span>
            </div>
        )
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task
