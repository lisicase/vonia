// React
import React from 'react';
import { Component } from 'react';
// Components
import { Routes, Route, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import BathroomPage from './BathroomInfo/BathroomPage.js';
import BathroomCard from './BathroomInfo/BathroomCard.js';
import BuildingList from './Map/BuildingList.js';
import Menu from './Menu';
import { Divider, RedirectButton } from './StyleElements.js';
// Styles
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
// Icons
import { AiOutlineStar } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
// Pages
import SignInPage from './pages/signin/signin';
// templating
import PageTitle from './Shared/PageTitle/PageTitle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ""
    };
  }

  updateUserId = (uid) => {
    this.setState({userId: uid});
  }

  render() {
    return (
      <div className="App">
        <>
          <TestNavigationBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/bathroom' element={<BathroomPage />} />
            <Route path='/bathroomcard' element={<BathroomCard />} />
            <Route path='/reviews' element={<ReviewHistoryPage />} />
            <Route path='/signin' element={<SignInPage updateUserId={this.updateUserId} />} />
            <Route path='/buildinglist' element={<BuildingList />} />
            <Route path='/menu' element={<Menu userId={this.state.userId} />} />
          </Routes>
        </>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <div style={{display:'flex', justifyContent:'right'}}>
          <MenuButton />
        </div>
        <h1>Spotty</h1>
        <h2>Spot-a-Potty</h2>
        <form action="" className="mt-3">
          <input type="text" placeholder="Location" />
          <Button variant="primary btn-sm" id="search-button" type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
          </Button>{' '}
        </form>
        <TempMapPage />
      </div>
    );
  }
}

class MenuButton extends Component {
  render() {
    return (
      <RedirectButton redirectTo="/menu" button={<button><GiHamburgerMenu /></button>} />
    );
  }
}

class TempMapPage extends Component {
  render() {
    return (
      <div>
        <Divider />
        <BathroomCard />
        <Divider />
        <BuildingList />
      </div>
    );
  }
}

class ReviewHistoryPage extends Component {
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

class ReviewListItem extends Component {
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

class TestNavigationBar extends Component {
  render() {
    return (
      <div className="header-div">
          <Navbar expand="lg">
            <Navbar.Brand><NavLink exact to='/' className="navLink">Spotty</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><NavLink exact to='/signin' className="navLink">Sign In</NavLink></Nav.Link>
                    <Nav.Link><NavLink exact to='/menu' className="navLink">Menu</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

export default App;
