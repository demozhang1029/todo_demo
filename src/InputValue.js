/**
 * Created by xinzhang on 6/28/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'reflux';
import {Actions as InputActions, InputStore} from './store/InputStore';

const InputValue = React.createClass({
  mixins: [
    connect(InputStore),
  ],

  updateValue() {
    this.props.updateValue(this.state.value);
    InputActions.ResetValue();
  },

  render() {
    return (
      <div>
        <input type="text" placeholder="Add todo item... ..."
               onChange={(e) => InputActions.UpdateValue(e.target.value)}
               value={this.state.value}/>
        <button name="addBtn" onClick={() => this.updateValue()}>+</button>
      </div>
    );
  }
});

InputValue.propTypes = {
  updateValue: PropTypes.func.isRequired,
};

export default InputValue;