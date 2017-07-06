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

  it('should contain InputValue & TodoList component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(InputValue)).to.have.length(1);
    expect(wrapper.find(TodoList)).to.have.length(1);
  });

});
