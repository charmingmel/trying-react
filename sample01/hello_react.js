import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
  render() {
    return (<p>Hello React, I am getting to know you.</p>);
  }
}

const app = document.getElementById('hello');

ReactDOM.render(<HelloReact />, app);
