/**
 * Created by xinzhang on 6/29/17.
 */

import React, {Component, PropTypes} from 'react';
import _ from 'lodash';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {hidedIndexs: []};
  }

  removeItem(index) {
    this.state.hidedIndexs.push(index);
    this.setState({hidedIndexs: this.state.hidedIndexs});
  }

  render() {
    const isHided = (index) => {
      return this.state.hidedIndexs.includes(index);
    };
    return (
      <ul>{this.props.todos.map(
        (todo, index) =>
          <li key={index} style={isHided(index) ? {display: 'none'} : undefined}>
            <p>{todo.text}</p>
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