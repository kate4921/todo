import './Todo.css';
import React from 'react';

export default class Todo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div
        id="todo"
        className={this.props.done ? 'done' : ''}
        onMouseEnter={this.handleShowButton}
        onMouseLeave={this.handleHideButton}
      >
        <div id="checkname">
          <input
            id="checkbox"
            type="checkbox"
            checked={this.props.done}
            onChange={this.handleCheck}
          />
          <span>{this.props.name}</span>
        </div>

        {this.state.show && (
          <button onClick={this.handleSendId} id="deleteButton">
            Delete
          </button>
        )}
      </div>
    );
  }

  handleCheck = (e) => {
    const done = e.target.checked;
    this.props.onDone(done, this.props.id);
  };

  handleSendId = () => {
    this.props.onDeleteItem(this.props.id);
  };

  handleShowButton = () => {
    this.setState({
      show: true,
    });
  };

  handleHideButton = () => {
    this.setState({
      show: false,
    });
  };
}
