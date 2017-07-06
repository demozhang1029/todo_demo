/**
 * Created by xinzhang on 7/5/17.
 */
import {createActions, createStore} from 'reflux';

export const Actions = createActions({
  UpdateValue: {sync: true},
  ResetValue: {sync: true},
});

export const InputStore = createStore({
  init() {
    this.setDefaultState();
    this.listenTo(Actions.UpdateValue, 'updateValue');
    this.listenTo(Actions.ResetValue, 'resetValue');
  },

  getInitialState() {
    return this.state;
  },

  setDefaultState() {
    return this.state = {value: ''};
  },

  updateValue(value) {
    this.state.value = value;
    this.trigger(this.state);
  },

  resetValue() {
    this.state.value = '';
    this.trigger(this.state);
  }
});