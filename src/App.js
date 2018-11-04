import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-dates/initialize';

import 'rc-slider/assets/index.css';
import 'react-dates/lib/css/_datepicker.css';
import DeliveryForm from './components/DeliveryForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <DeliveryForm />
        </div>
      </div>
    );
  }
}

export default App;
