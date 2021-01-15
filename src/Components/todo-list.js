import React, { Component } from 'react';
import Child from './children'

class TodoApp extends Component {

    constructor() {
        super()
        this.state = {
            todo: []
        } 
        this.ClickIt = this.ClickIt.bind(this)
    }

    ClickIt(e) {
        e.preventDefault()
        let todo = this.state.todo
        let input = this.state.name
        todo.push(input)
        this.setState({
            todo: todo,
            name: ""
        })
    }
    changeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
render(){
    return (
        <div className="myform">
            <h1> TODO APP </h1>
            <form onSubmit={this.ClickIt}>
                <input type="text" placeholder="Enter Name" onChange={this.changeHandler} />
                <button>Submit</button>
                <Child value={this.state.todo} />
            </form>
        </div>
    )
}
}

export default TodoApp

























