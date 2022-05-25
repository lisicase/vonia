// React
import React from 'react';
import { Component } from 'react';
// Icons
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
// Components
import { Rate } from 'antd';
// Style
import 'antd/dist/antd.css';

//data
import allReviews from '../../Shared/reviewData/ReviewData.json'

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
        /*let rating = 4.5;
        if (this.props.rating) {
            rating = this.props.rating;
        }
        let allStars = this.getStars(rating);
        return (
            <div className="purpleRatingSymbol">
                {allStars}
            </div>
        )*/
        return (
            <Rate disabled defaultValue={this.props.rating} allowHalf style={{ color: '#E0AFFB' }} />
        );
    }
}

export function BathroomRatingsByCategory({bathId}) {
    //TEMP: replace with api call
    let filteredBathrooms = filterBathroom(bathId);

    let clean = avgCleanliness(filteredBathrooms);
    let priv = avgPrivacy(filteredBathrooms);
    let wellStock = avgWellStocked(filteredBathrooms);
    return (
        <div>
            <h2>Ratings</h2>
            <CategoricalRating title="Cleanliness" rating={clean} />
            <CategoricalRating title="Privacy" rating={priv} />
            <CategoricalRating title="Well-Stocked" rating={wellStock} />
            {/*<CategoricalRating title="Wait Line" rating={3} /> */}
        </div>
    );

}

class CategoricalRating extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <p className="slightBold">{this.props.title}</p>
                <StarRating rating={this.props.rating} size={25} />
            </div>
        )
    }
}

/**
 * find the average cleanliness score from reviews
 * @param {Array} reviews list of reviews
 * @returns {Double} average rounded to the nearest 0.5
 */
function avgCleanliness(reviews) {
    let sum = 0;
    let num = 0;

    reviews.map((curr) => {
        sum += curr.cleanliness;
        num += 1;
    });

    let avg = Math.round(sum / (num * 0.5)) * 0.5;

    return avg;
}

/**
 * find the average privacy score from reviews
 * @param {Array} reviews list of reviews
 * @returns {Double} average rounded to the nearest 0.5
 */
function avgPrivacy(reviews) {
    let sum = 0;
    let num = 0;

    reviews.map((curr) => {
        sum += curr.privacy;
        num += 1;
    });

    let avg = Math.round(sum / (num * 0.5)) * 0.5;

    return avg;
}

/**
 * find the average well-stocked score from reviews
 * @param {Array} reviews list of reviews
 * @returns {Double} average rounded to the nearest 0.5
 */
function avgWellStocked(reviews){
    let sum = 0;
    let num = 0;

    reviews.map((curr) => {
        sum += curr["well-stocked"];
        num += 1;
    });

    let avg = Math.round(sum / (num * 0.5)) * 0.5;

    return avg;
}

/**
 * TEMP: filter hardcoded json for the correct bathroom ID
 * @param {String} bathID 
 * @returns array of bathroom reviews
 */
 function filterBathroom(bathID) {
    let res = [];
    // console.log(bathID);
    //let parsed = JSON.parse(allReviews);
    allReviews.map((review) => {
        // console.log(review);
        if (review.bathroom_id === bathID) {
            res.push(review);
        }
    })

    return res;
}