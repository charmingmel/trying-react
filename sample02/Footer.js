import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <div>
        <h3> This is the footer.</h3>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}
