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
    wrapper.instance().addTodo(givenItem);

    expect(wrapper.state().todos[0].text).to.equal(givenItem);
  });

});
