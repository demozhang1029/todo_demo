/**
 * Created by xinzhang on 6/29/17.
 */

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {completedIndexs:[]};
  }

  switchCompletedStatus(index) {
    const completedIndexs = this.state.completedIndexs;
    if (!completedIndexs.includes(index))
      completedIndexs.push(index);
    else
      _.remove(completedIndexs, (v) => v === index);
    this.setState({completedIndexs});
  }

  itemStyle(index) {
    return {
      textDecorationLine: this.state.completedIndexs.includes(index) ? 'line-through' : 'none',
    }
  }

  render() {
    return (
      <ul>{this.props.todos.map(
        (todo, index) =>
          <li key={index} style={this.itemStyle(index)}>
            <b onClick={() => this.switchCompletedStatus(index)}>{todo.text}</b>
            <span onClick={() => this.props.removeItem(index)}> x</span>
          </li>
      )}</ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;