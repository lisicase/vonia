import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
        <TestNavigationBar />
        <Routes>
          <Route path='/' element={<p>Home</p>} />
          <Route path='/bathroom' element={<p>Bathroom</p>} />
          <Route path='/reviews' element={<p>Reviews</p>} />
          <Route path='/signin' element={<p>Sign In</p>} />
        </Routes>
      </>
    </div>
  );
}

class TestNavigationBar extends React.Component {
  render() {
      return (
          <header>
              <div className="header-div">
                  <Navbar expand="lg">
                      <Navbar.Brand><NavLink exact to='/' className="navLink">Spotty</NavLink></Navbar.Brand>
                      {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                      <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="mr-auto">
                              <Nav.Link><NavLink exact to='/' className="navLink" >Home</NavLink></Nav.Link>
                              <Nav.Link><NavLink exact to='/bathroom' className="navLink" >Bathroom</NavLink></Nav.Link>
                              <Nav.Link><NavLink exact to='/reviews' className="navLink">Review History</NavLink></Nav.Link>
                              <Nav.Link><NavLink exact to='/signin' className="navLink">Sign In</NavLink></Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Navbar>
              </div>
          </header>
      )
  }
}

export default App;
