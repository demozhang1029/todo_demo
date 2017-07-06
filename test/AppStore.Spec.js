/**
 * Created by xinzhang on 7/6/17.
 */
import React from 'react';
import {expect} from 'chai';
import _ from 'lodash';
import {clearRequireCache} from "../src/clearRequiredCache";

describe('App Store', () => {

  const givenValue = 'testAddFunc';
  let appStore;
  let appActions;

  beforeEach(() => {
    appStore = require('../src/store/AppStore').appStore;
    appActions = require('../src/store/AppStore').Actions;
    appActions.AddTodoItem(givenValue);
  });

  afterEach(() => {
    clearRequireCache();
  });

  it('should add item when appActions.AddTodoItem be triggered', () => {
    expect(appStore.state.todos[0].text).to.equal(givenValue);
  });

  it('should remove item when appActions.RemoveTodoItem be triggered', () => {
    expect(!_.isEmpty(appStore.state.todos)).to.be.true;
    appActions.RemoveTodoItem(0);

    expect(_.isEmpty(appStore.state.todos)).to.be.true;
  });

  it('should make item completed when appActions.toggleTodoItem be triggered once', () => {
    expect(appStore.state.todos[0].completed).to.be.undefined;
    appActions.ToggleTodoItem(0);

    expect(appStore.state.todos[0].completed).to.be.true;
  });

  it('should make item completed when appActions.toggleTodoItem be triggered twice', () => {
    appActions.ToggleTodoItem(0);
    expect(appStore.state.todos[0].completed).to.be.true;

    appActions.ToggleTodoItem(0);

    expect(appStore.state.todos[0].completed).to.be.undefined;
  });

});
