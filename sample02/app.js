import React from 'react';
import {render} from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import Button from './Button';


class Incrementer extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <Button />
        <Footer />
      </div>
    );
  }
}

const counter = document.getElementById('count');

render(<Incrementer />, counter);
