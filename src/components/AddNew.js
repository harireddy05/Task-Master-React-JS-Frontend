import React, { Component } from 'react'

export class AddNew extends Component {

    state = {
        title: ''
    }

    saveDataState = (e) => {
        this.setState({ [e.target.name]: e.target.value }) 
        // above line alternate - title: e.target.value | attribute name for multiple items
    }

    saveToList = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.saveToList} style={{ display: 'flex' }}>
                <input type="text" name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add new task here..."
                    value={this.state.title}
                    onChange={this.saveDataState}
                ></input>
                <input type="submit" value="Save" className="Add-btnSave"></input>
            </form>
        )
    }
}

export default AddNew