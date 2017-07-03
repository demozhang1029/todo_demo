/**
 * Created by xinzhang on 6/28/17.
 */
import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

class InputValue extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  updateValue() {
    if (_.isEmpty(this.state.value))
      return;
    this.props.updateValue(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Add todo item... ..."
               onChange={(e) => this.setState({value: e.target.value})}
               value={this.state.value}/>
        <button onClick={() => this.updateValue()}>+</button>
      </div>
    );
  }

}

InputValue.propTypes = {
  updateValue: PropTypes.func.isRequired,
};

export default InputValue;