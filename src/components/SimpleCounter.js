import React from 'react';

export default class SimpleCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <button onClick={this.incrementCount.bind(this)}>
        Count: {this.state.count}
      </button>
    );
  }
}
