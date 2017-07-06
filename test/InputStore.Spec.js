/**
 * Created by xinzhang on 7/6/17.
 */
import React from 'react';
import {expect} from 'chai';
import {clearRequireCache} from "../src/clearRequiredCache";

describe('Input Store', () => {

  let InputActions;
  let InputStore;
  const givenValue = 'test';

  beforeEach(() => {
    InputActions = require('../src/store/InputStore').Actions;
    InputStore = require('../src/store/InputStore').InputStore;
    InputActions.UpdateValue(givenValue);
  });

  afterEach(() => {
    clearRequireCache();
  });

  it('should update value when InputActions.updateValue be triggered', () => {
    expect(InputStore.state.value).to.equal(givenValue);
  });

  it('should reset value when InputActions.resetValue be triggered', () => {
    expect(InputStore.state.value).to.equal(givenValue);

    InputActions.ResetValue();
    expect(InputStore.state.value).to.equal('');
  });

});