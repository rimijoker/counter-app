import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDelete, counter } = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    const { counter } = this.props;
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { counter } = this.props;
    const { value: count } = counter;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
