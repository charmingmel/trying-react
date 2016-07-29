import React from 'react';

export default class Header extends React.Component {
  render() {
      console.log(this.props);
    return (
      <div>
        <h3>This is the header :: Incrementer </h3>
        <p title={this.props.title}></p>
      </div>
    );
  }
}


