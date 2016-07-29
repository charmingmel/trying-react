import React from 'react';
import {render} from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import Button from './Button';


class Incrementer extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  increment(count) {
    this.setState({count: count + 1});
  }

  render() {

    const name = 'Williams';
    const msg = 'Made in 2016';

    return (
      <div>
        <Header name={name}/>
          <p>Mr. Count the {this.state.count}</p>
          <Button count={this.state.count} increment={this.increment.bind(this)}/>
        <Footer copyright={msg}/>
      </div>
    );
  }
}

const counter = document.getElementById('count');

render(<Incrementer />, counter);
