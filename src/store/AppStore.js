/**
 * Created by xinzhang on 7/5/17.
 */
import {createActions, createStore} from 'reflux';

export const Actions = createActions({
  AddTodoItem: {sync: true},
  RemoveTodoItem: {sync: true},
  ToggleTodoItem: {sync: true},
});

export const appStore = createStore({
  init() {
    this.setDefaultState();
    this.listenTo(Actions.AddTodoItem, 'addTodoItem');
    this.listenTo(Actions.RemoveTodoItem, 'removeTodoItem');
    this.listenTo(Actions.ToggleTodoItem, 'toggleTodoItem');
  },

  getInitialState() {
    return this.state;
  },

  setDefaultState() {
    return this.state = {
      todos: [],
    };
  },

  addTodoItem(value) {
    this.state.todos.push({text: value});
    this.trigger(this.state);
  },

  removeTodoItem(index) {
    this.state.todos.splice(index, 1);
    this.trigger(this.state);
  },

  toggleTodoItem(index) {
    this.state.todos[index].completed = this.state.todos[index].completed ? undefined : true;
    this.trigger(this.state);
  }

});

