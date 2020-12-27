import React, { Component } from 'react';
import Computer from './Db/Computer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap/';

class Base extends Component {
  state = {
    komp: [
      { name: 'Asus', price: 200 },
      { name: 'Acer', price: 400 },
      { name: 'Lenovo', price: 500 }
    ],
  }
  HomePage = () => {

  }
  render() {
    return (
      <div>
        <Button variant="btn btn-danger" onClick={this.HomePage}>Click</Button>
        {this.state.komp.map((data, index) => {
          return (
            <Computer key={index}
              name={data.name}
              price={data.price} />
          )
        })}
      </div>
    );
  }
}
export default Base;
