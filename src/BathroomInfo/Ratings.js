// React
import React from 'react';
import { Component } from 'react';
// Icons
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export class StarRating extends Component {
    render() {
        return (
            <div style={{color:'#E0AFFB'}}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </div>
        )
    }
}

export class BathroomRatingsByCategory extends Component {
    render() {
      return (
        <div>
            <h2>Ratings</h2>
            <CategoricalRating title="Cleanliness" />
            <CategoricalRating title="Privacy" />
            <CategoricalRating title="Well-Stocked" />
            <CategoricalRating title="Wait Line" />
        </div>
      );
    }
}

class CategoricalRating extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-between'}} >
                <p><strong>{this.props.title}</strong></p>
                <StarRating />
            </div>
        )
    }
}