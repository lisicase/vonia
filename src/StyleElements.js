// React
import React from 'react';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';

export class Divider extends Component {
  render() {
    return (
      <div className="lightDivider" />
    );
  }
}

export class ShortDivider extends Component {
  render() {
    return (
      <div className="lightDivider short" />
    );
  }
}

export class Logo extends Component {
  render() {
    return (
      <img src="logo/Logo1.png" style={{height:'15rem', marginTop:'3rem', marginBottom:'3rem'}} />
    );
  }
}

export class RedirectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        redirect: false
    };
  }

  redirect = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state && this.state.redirect) {
      return <Navigate to={this.props.redirectTo} />
    }

    return (
      <div onClick={this.redirect}>
          {this.props.button}
      </div>
    );
  }
}