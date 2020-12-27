import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, } from 'react-bootstrap/';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Book from './components/Book';
import Phone from './components/Phone';
import Music from './components/Music';
import Base from './components/Computers/Base';
//
class App extends Component {
  state = {
    isLogin: false,
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" expand="lg">
            <Navbar.Brand className="logo" href="#home">React-Router</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <ul className="app_item">
                  <li><NavLink className="app_item_link" to="/" exact>Home Page</NavLink></li>
                  <li><NavLink className="app_item_link" to="/book">Books</NavLink></li>
                  <li><NavLink className="app_item_link" to="/phones">Phones</NavLink></li>
                  <li><NavLink className="app_item_link" to="/music">Music</NavLink></li>
                  <li><NavLink className="app_item_link" to="/computer">Computer</NavLink></li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">
            {/* <h2>Holati {this.state.isLogin ? 'True' : 'False'}</h2> */}
            {/* <button onClick={() => this.setState({ isLogin: true })}>Passwords</button> */}
            <Switch>
              <Route path="/" exact />
              <Route path="/book" component={Book} />
              <Route path="/phones" component={Phone} />
              <Route path="/music" component={Music} />
              {this.state.isLogin ? <Route path="/computer" component={Base} /> : null}

              <Route render={() => <h1 style={{ color: 'red', textAlign: 'center' }}>404 Page Note Found</h1>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
