/**
 * Created by xinzhang on 6/28/17.
 */
import React, {Component, PropTypes} from 'react';

class InputValue extends Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Add todo item... ..."/>
        <button onClick={() => this.props.updateValue()}>Add</button>
      </div>
    );
  }

}

InputValue.propTypes = {
  updateValue: PropTypes.func.isRequired,
};

export default InputValue;