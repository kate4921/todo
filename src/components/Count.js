import React from 'react';
import './Count.css';

export default class Count extends React.Component {
  render() {
    return (
      <div className="count">
        <span>All: {this.props.allLenght}</span>
        <span>Done: {this.props.doneLenght}</span>
        <span>Left: {this.props.allLenght - this.props.doneLenght}</span>
      </div>
    );
  }
}
