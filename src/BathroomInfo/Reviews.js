// React
import React from 'react';
import { Component } from 'react';
// Components
import { Divider } from '../StyleElements';
import { StarRating } from './Ratings';
// Icons
import { BiPencil } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiThumbsUp } from "react-icons/fi";
import { MdOutlineReport } from "react-icons/md";

class BathroomReviews extends Component {
    render() {
      return (
        <div>
            <div style={{display:'flex'}}>
                <h2>Reviews</h2>
                <p style={{marginLeft:'1rem'}}>38 reviews</p>
            </div>
            <div style={{textAlign:'center'}}>
                <button>
                    <BiPencil className="bufferedIcon" />
                    Write a Review
                </button>
            </div>
            <Divider />
            <AllBathroomReviews/>
        </div>
      );
    }
}

class AllBathroomReviews extends Component {
    render() {
        let testData = [{count:1}, {count:2}];
        let allReviews = testData.map((count) => {
            return <div>
                    <SingleBathroomReview num={count} />
                    <Divider />
                </div>
        })
        return (
            <div>
                {allReviews}
            </div>
        );
    }
}

class SingleBathroomReview extends Component {
    render() {
      return (
        <div>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <p><strong>LOVE THIS BATHROOM!!!</strong></p>
                <StarRating rating='5' />
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ReviewDetails />
                <ReviewActions />
            </div>
        </div>
      );
    }
}

class ReviewDetails extends Component {
    render() {
      return (
        <div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <CgProfile className="bufferedIcon loweredIcon" size={25} />
                <p style={{paddingRight:'1rem', fontSize:'1.1rem'}}>rebec20</p>
                <p>1/3/2020</p>
            </div>
            <p>I was really satisfied with this bathroom! It was clean, well maintained, and had no line! Thanks to Spotty, I could easily and quickly use a great public bathroom! :)</p>
        </div>
      );
    }
}

class ReviewActions extends Component {
    render() {
      return (
        <div>
            <MdOutlineReport size={25} />
            <FiThumbsUp size={25} />
        </div>
      );
    }
}

export default BathroomReviews;