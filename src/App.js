// React
import React, { useRef, useState, useEffect } from 'react';
// Components
import { Routes, Route, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
// Styles
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
// Icons
import { AiOutlineStar } from 'react-icons/ai';
// Pages
import BathroomPage from './Pages/BathroomPage/BathroomPage';
import SignInPage from './Pages/Signin/Signin';
import RegistrationPage from './Pages/Register/Registration';
import HomePage from './Pages/Home/Home';
import PageTitle from './Shared/PageTitle/PageTitle';

function App() {
  return (
    <div className="App">
      <>
        <TestNavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/bathroom' element={<BathroomPage />} />
          <Route path='/reviews' element={<ReviewHistoryPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/register' element={<RegistrationPage />} />
        </Routes>
      </>
    </div>
  );
}

class ReviewHistoryPage extends React.Component {
  render() {
    return (
      <div style={{textAlign:"left"}}>
        <PageTitle title="Reviews" />
        <ListGroup variant="flush">
          <ReviewListItem />
          <ReviewListItem />
          <ReviewListItem />
          <ReviewListItem />
        </ListGroup>
      </div>
    );
  }
}

class ReviewListItem extends React.Component {
  render() {
    let borderStyle = "25px solid gray";

    return (
      <ListGroup.Item className="session">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <h3 className="list-favorites mb-1" style={{borderLeft: borderStyle, paddingLeft: "7px", marginTop: "1rem", fontSize: "20px"}}>Building Name</h3>
            <p className="list-book-count" style={{marginBottom: "1.5rem", marginLeft: "32px"}}>Review text........</p>
          </div>
          <AiOutlineStar size="40" />
        </div>
      </ListGroup.Item>
    );
  }
}



class TestNavigationBar extends React.Component {
  render() {
    return (
      <div className="header-div">
          <Navbar expand="lg">
            <Navbar.Brand><NavLink exact to='/' className="navLink">Spotty</NavLink></Navbar.Brand>
            {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><NavLink exact to='/bathroom' className="navLink" >Bathroom</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact to='/reviews' className="navLink">Review History</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact to='/signin' className="navLink">Sign In</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

export default App;
