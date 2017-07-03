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

  addItem(value) {
    this.state.todos.push({text:value});
    this.setState({todos: this.state.todos});
  }

  removeItem(index) {
    this.state.todos.splice(index, 1);
    this.setState({todos: this.state.todos});
  }

  toggleItem(index) {
    this.state.todos[index].completed = this.state.todos[index].completed ? undefined : true;
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div>
        <InputValue updateValue={(value) => this.addItem(value)}/>
        <TodoList todos={this.state.todos}
                  removeItem={(index) => this.removeItem(index)}
                  toggleItem={(index) => this.toggleItem(index)}/>
      </div>
    );
  }

}

export default App;

