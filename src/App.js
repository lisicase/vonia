// React
import React from 'react';
import { Component } from 'react';
// Components
import { Routes, Route, HashRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import BathroomPage from './Pages/BathroomPage/BathroomPage.js';
import BathroomCard from './Map/BathroomPopup.js';
import BuildingList from './Map/BuildingList.js';
import FavoritesPage from './Pages/Favorites/Favorites.js';
import { RedirectButton } from './StyleElements.js';
import WriteReview from './Pages/Reviews/WriteReview';
import FilterForm from './Map/Filter.js';
import RegistrationPage from './Pages/register/registration.js';
// Styles
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
// Icons
import { AiOutlineStar } from 'react-icons/ai';
// Pages
//import BathroomPage from './Pages/BathroomPage/BathroomPage';
import SignInPage from './Pages/Signin/signin.js';
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

  render() {
    document.title = "Spotty";
    return (
      <div className="App">
        <>
          <HashRouter>
            <Routes>
              <Route path='/' element={<HomePage userId={this.state.userId} />} />
              <Route path='/bathroom/:id' element={<BathroomPage />} />
              <Route path='/bathroomcard' element={<BathroomCard />} />
              <Route path='/reviews' element={<ReviewHistoryPage />} />
              <Route path='/review' element={<WriteReview />} />
              <Route path='/signin' element={<SignInPage updateUserId={this.updateUserId} />} />
              <Route path='/buildinglist' element={<BuildingList />} />
              <Route path='/favorites' element={<FavoritesPage />} />
              <Route path='/filter' element={<FilterForm />} />
              <Route path='/register' element={<RegistrationPage />} />
            </Routes>
          </HashRouter>
        </>
      </div>
    );
  }
}

class AppOriginal extends Component {
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
    document.title = "Spotty";
    return (
      <div className="App">
        <>
          <Routes>
            <Route path='/' element={<HomePage userId={this.state.userId} />} />
            <Route path='/bathroom/:id' element={<BathroomPage />} />
            <Route path='/bathroomcard' element={<BathroomCard />} />
            <Route path='/reviews' element={<ReviewHistoryPage />} />
            <Route path='/review' element={<WriteReview />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/buildinglist' element={<BuildingList />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/filter' element={<FilterForm />} />
            <Route path='/register' element={<RegistrationPage />} />
          </Routes>
        </>
      </div>
    );
  }
}

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

