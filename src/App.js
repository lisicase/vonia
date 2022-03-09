// React
import React from 'react';
import { Component } from 'react';
// Components
import Button from 'react-bootstrap/Button';
import { Routes, Route, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import BathroomPage from './Pages/BathroomPage/BathroomPage.js';
import BathroomCard from './Map/BathroomCard.js';
import BuildingList from './Map/BuildingList.js';
import Menu from './Menu';
import { RedirectButton } from './StyleElements.js';
// Styles
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
// Icons
import { AiOutlineStar } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
// Pages
//import BathroomPage from './Pages/BathroomPage/BathroomPage';
import SignInPage from './Pages/Signin/Signin';
//import RegistrationPage from './Pages/Register/Registration';
import HomePage from './Pages/Home/Home';
//import PageTitle from './Shared/PageTitle/PageTitle';

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
          <Routes>
            <Route path='/' element={<HomePage userId={this.state.userId} />} />
            <Route path='/bathroom' element={<BathroomPage />} />
            <Route path='/bathroomcard' element={<BathroomCard />} />
            <Route path='/reviews' element={<ReviewHistoryPage />} />
            <Route path='/signin' element={<SignInPage updateUserId={this.updateUserId} />} />
            <Route path='/buildinglist' element={<BuildingList />} />
          </Routes>
        </>
      </div>
    );
  }
}
/** 
class HomePage extends Component {
  render() {
    return (
      <div>
        <div style={{display:'flex', justifyContent:'left'}}>
          <MenuButton />
        </div>
        <h1>Spotty</h1>
        <h2>Spot-a-Potty</h2>
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
  constructor(props) {
    super(props);
    this.state = {
      buildingDisplayed: ""
    };
  }

  updateBuildingDisplayed = (buildingID) => {
    this.setState({buildingDisplayed: buildingID});
  }

  hideCard = () => {
    this.updateBuildingDisplayed("");
  }

  render() {
    let searchPlaceholder = <BiSearch className="bufferedIcon" />;
    let buildingCard = <span/>;
    if (this.state.buildingDisplayed === "test") {
      buildingCard = 
        <div style={{textAlign:"left", display:'flex', flexDirection:'row', alignContent:'center'}}>
          <div onClick={() => {this.hideCard()}} style={{width:"15vw"}}/>
          <BathroomCard hideCard={this.hideCard} />
          <div onClick={() => {this.hideCard()}} style={{width:"15vw"}}/>
        </div>;
    }
    return (
      <div style={{backgroundColor:'lightGray'}}>
        <div style={{height:'1rem'}} />
        <form action="" className="mt-3">
          <input type="text" placeholder="Location" />
          <Button variant="primary btn-sm" id="search-button" type="submit">
            <BiSearch />
          </Button>{' '}
        </form>
        <div onClick={() => {this.hideCard()}} style={{height:'5rem'}} />
        {buildingCard}
        <div onClick={() => {this.hideCard()}} style={{height:'5rem'}} />
        <BuildingList updateBuildingDisplayed={this.updateBuildingDisplayed} />
      </div>
    );
  }
}
*/

class ReviewHistoryPage extends Component {
  render() {
    return (
      <div style={{textAlign:"left"}}>
        <div style={{textAlign:"left"}}>
          <RedirectButton redirectTo="/" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
          <h1>Review History</h1>
        </div>
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

export default App;
