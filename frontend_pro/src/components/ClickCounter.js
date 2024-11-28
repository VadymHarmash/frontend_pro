import React, { Component } from 'react';
import '../index.css';

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      multiplier: 1,
    };
  }

  render() {
    return (
      <div className="container">
        <div>
          <button onClick={() => this.setState({ count: this.state.count - this.state.multiplier })}>
            Decrease on {this.state.multiplier}
          </button>
          <span className="counter-display">{this.state.count}</span>
          <button onClick={() => this.setState({ count: this.state.count + this.state.multiplier })}>
            Increase on {this.state.multiplier}
          </button>
          <button className="clear" onClick={() => this.setState({ count: 0 })}>
            Clear
          </button>
        </div>
        <div className="button-group">
          <button onClick={() => this.setState({ multiplier: 1 })}>Set multiply as 1</button>
          <button onClick={() => this.setState({ multiplier: 5 })}>Set multiply as 5</button>
          <button onClick={() => this.setState({ multiplier: 10 })}>Set multiply as 10</button>
        </div>
      </div>
    );
  }
}

export default ClickCounter;
