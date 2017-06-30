/**
 * Created by xinzhang on 6/29/17.
 */

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {hidedIndexs: [], completedIndexs:[]};
  }

  removeItem(index) {
    this.state.hidedIndexs.push(index);
    this.setState({hidedIndexs: this.state.hidedIndexs});
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
      display: this.state.hidedIndexs.includes(index) ? 'none' : undefined,
      textDecorationLine: this.state.completedIndexs.includes(index) ? 'line-through' : 'none',
    }
  }

  render() {
    return (
      <ul>{this.props.todos.map(
        (todo, index) =>
          <li key={index} style={this.itemStyle(index)}>
            <p onClick={() => this.switchCompletedStatus(index)}>{todo.text}</p>
            <span onClick={() => this.removeItem(index)}> x</span>
          </li>
      )}</ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;