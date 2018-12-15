import React from 'react'
import Input from './input'
import List from './list'
import './todoList.css'

export default class TodoList extends React.Component {
  state = {
    todos : []
  }
  
  add = (todo) => {
    const {todos = []} = this.state;
    if(todo){
      todos.push(todo);
    }
    this.setState({todos : todos})
  }

  render(){
    const {todos} = this.state
    return (
      <div className='todo-list'  >
        <Input add={this.add}/>
        <List todos = {todos}/>
      </div>
    )
  }
}