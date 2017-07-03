/**
 * Created by xinzhang on 6/29/17.
 */

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import TodoList from '../src/TodoList';
import sinon from 'sinon';

describe('Todo List', () => {

  let givenTodos = [{text: '123', completed: true}, {text: 'abc'}];
  let removeItemSpy;
  let toggleItemSpy;
  let wrapper;

  beforeEach(() => {
    removeItemSpy = sinon.spy();
    toggleItemSpy = sinon.spy();
    wrapper = shallow(
      <TodoList
        todos={givenTodos}
        removeItem={removeItemSpy}
        toggleItem={toggleItemSpy}
      />
    );
  });

  it('should render todo list when given todos', () => {
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.find('li')).to.have.length(givenTodos.length);
    expect(wrapper.find('b').at(0).text()).to.equal(givenTodos[0].text);
    expect(wrapper.find('b').at(1).text()).to.equal(givenTodos[1].text);
  });

  it('should render delete button when given todos', () => {
    expect(wrapper.find('span')).to.have.length(givenTodos.length);
  });

  it('should remove todo be triggered when delete icon be clicked', () => {
    wrapper.find('span').at(0).simulate('click');

    expect(removeItemSpy.calledOnce).to.be.true;
  });

  it('should make item textDecorationLine style as line-through when item is completed', () => {
    expect(wrapper.find('b').at(0).parent().props().style.textDecorationLine).to.equal('line-through');
  });

  it('should make item textDecorationLine style as none when item is un-completed', () => {
    expect(wrapper.find('b').at(1).parent().props().style.textDecorationLine).to.equal('none');
  });

  it('should toggle todo be triggered when item be clicked', () => {
    wrapper.find('b').at(0).simulate('click');

    expect(toggleItemSpy.calledOnce).to.be.true;
  });

});