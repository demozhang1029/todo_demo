/**
 * Created by xinzhang on 6/28/17.
 */

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import InputValue from '../src/InputValue';

describe('Input Value', () => {

  let wrapper;
  let updateValueSpy;

  beforeEach(() => {
    updateValueSpy = sinon.spy();
    wrapper = shallow(<InputValue updateValue={updateValueSpy} />);
  });


  it('should render input and button', () => {
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should updateValue with input value when button be clicked', () => {
    const givenValue = 'Test Text';
    wrapper.find('input').simulate('change', {target: {value: givenValue}});

    wrapper.find('button').simulate('click');

    expect(updateValueSpy.calledWith(givenValue)).to.be.true;
  });

});