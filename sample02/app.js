import React from 'react';
import {render} from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import Button from './Button';


class Incrementer extends React.Component {
  constructor() {
    super();
    this.state = {count: 10};
  }

  render() {

    setTimeout(() => {
      this.setState({count: 50})
    }, 2000);

    return (
      <div>
        <Header />
          <p>{this.state.count}</p>
          <Button />
        <Footer />
      </div>
    );
  }
}

const counter = document.getElementById('count');

render(<Incrementer />, counter);
