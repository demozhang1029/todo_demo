/**
 * Created by xinzhang on 6/30/17.
 */

import React from 'react';
import {connect} from 'reflux';
import InputValue from './InputValue';
import TodoList from './TodoList';
import {appStore, Actions as appActions} from './store/AppStore';

const App = React.createClass({
  mixins: [
    connect(appStore)
  ],

  render() {
    return (
      <div>
        <InputValue updateValue={(value) => appActions.AddTodoItem(value)}/>
        <TodoList todos={this.state.todos}
                  removeItem={(index) => appActions.RemoveTodoItem(index)}
                  toggleItem={(index) => appActions.ToggleTodoItem(index)}/>
      </div>
    );
  }

});

export default App;