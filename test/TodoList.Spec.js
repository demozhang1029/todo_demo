/**
 * Created by xinzhang on 6/29/17.
 */

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import TodoList from '../src/TodoList';

describe('Todo List', () => {

  let givenTodos = [{text: '123'}, {text: 'abc'}];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoList todos={givenTodos}/>);
  });

  it('should render todo list when given todos', () => {
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.find('li')).to.have.length(givenTodos.length);
    expect(wrapper.find('p').at(0).text()).to.equal(givenTodos[0].text);
    expect(wrapper.find('p').at(1).text()).to.equal(givenTodos[1].text);
  });

  it('should render delete button when given todos', () => {
    expect(wrapper.find('span')).to.have.length(givenTodos.length);
  });

  it('should hide todo when delete icon be clicked', () => {
    expect(wrapper.find('span').at(0).parent().props().style.display).to.be.undefined;
    wrapper.find('span').at(0).simulate('click');

    expect(wrapper.find('span').at(0).parent().props().style.display).to.equal('none');
  });

  it('should make item textDecorationLine style as line-through when click item text', () => {
    expect(wrapper.find('p').at(0).parent().props().style.textDecorationLine).to.equal('none');
    wrapper.find('p').at(0).simulate('click');

    expect(wrapper.find('p').at(0).parent().props().style.textDecorationLine).to.equal('line-through');
  });

  it('should make item textDecorationLine style as none when click item text twice', () => {
    expect(wrapper.find('p').at(0).parent().props().style.textDecorationLine).to.equal('none');

    wrapper.find('p').at(0).simulate('click');
    wrapper.find('p').at(0).simulate('click');

    expect(wrapper.find('p').at(0).parent().props().style.textDecorationLine).to.equal('none');
  });

});