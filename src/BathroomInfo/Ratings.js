// React
import React from 'react';
import { Component } from 'react';
// Icons
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export class StarRating extends Component {
    getStars(rating) {
        let starData = [];
        for (let i = 0; i < 5; i++) {
            if (rating >= 1) {
                starData.push(1);
            } else {
                starData.push(rating);
            }
            rating--;
        }
        let allStars = starData.map((count) => {
            if (count == 1) {
                return <AiFillStar size={this.props.size} />
            } else {
                return <AiOutlineStar size={this.props.size} />
            }
        })
        return allStars;
    }
    
    render() {
        let rating = 4.5;
        if (this.props.rating) {
            rating = this.props.rating;
        }
        let allStars = this.getStars(rating);
        return (
            <div className="purpleRatingSymbol">
                {allStars}
            </div>
        )
    }
}

export class BathroomRatingsByCategory extends Component {
    render() {
      return (
        <div>
            <h2>Ratings</h2>
            <CategoricalRating title="Cleanliness" rating='4' />
            <CategoricalRating title="Privacy" rating='4' />
            <CategoricalRating title="Well-Stocked" rating='5' />
            <CategoricalRating title="Wait Line" rating='3' />
        </div>
      );
    }
}

class CategoricalRating extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-between'}} >
                <p className="slightBold">{this.props.title}</p>
                <StarRating rating={this.props.rating} size={25} />
            </div>
        )
    }
}