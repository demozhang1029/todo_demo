/**
 * Created by xinzhang on 6/30/17.
 */

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import App from '../src/App';
import InputValue from '../src/InputValue';
import TodoList from '../src/TodoList';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it('should contain InputValue & TodoList component', () => {
    expect(wrapper.find(InputValue)).to.have.length(1);
    expect(wrapper.find(TodoList)).to.have.length(1);
  });

  it('should add todo item when addTodo be triggered', () => {
    const givenItem = 'test';
    wrapper.instance().addItem(givenItem);

    expect(wrapper.state().todos[0].text).to.equal(givenItem);
  });

  it('should remove todo item when removeItem be triggered', () => {
    const todos = [{text:'content_1'}, {text: 'content_2'}, {text: 'content_3'}];
    wrapper.setState({todos});

    wrapper.instance().removeItem(0);

    expect(wrapper.state().todos[0].text).to.equal('content_2');
  });

  it('should make todo item completed when click item once', () => {
    const todos = [{text:'content_1'}, {text: 'content_2'}, {text: 'content_3'}];
    wrapper.setState({todos});
    expect(wrapper.state().todos[0].completed).to.equal(undefined);

    wrapper.instance().toggleItem(0);

    expect(wrapper.state().todos[0].completed).to.equal(true);
  });

  it('should make todo item un-completed when click item twice', () => {
    const todos = [{text:'content_1'}, {text: 'content_2'}, {text: 'content_3'}];
    wrapper.setState({todos});
    expect(wrapper.state().todos[0].completed).to.equal(undefined);

    wrapper.instance().toggleItem(0);
    wrapper.instance().toggleItem(0);

    expect(wrapper.state().todos[0].completed).to.equal(undefined);
  });

});
