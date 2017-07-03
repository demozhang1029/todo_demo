/**
 * Created by xinzhang on 6/30/17.
 */

import React, {Component} from 'react';
import InputValue from './InputValue';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  addTodo(value) {
    this.state.todos.push({text:value});
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div>
        <InputValue updateValue={(value) => this.addTodo(value)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }

}

export default App;

