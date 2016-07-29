import React from 'react';

class Button extends React.Component {

  handleCount() {
    this.props.increment(this.props.count);
  }

  render() {
    return (
      <button onClick={this.handleCount.bind(this)}>Count me</button>
    );
  }
}

export default Button;
