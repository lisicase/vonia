// React
import React from 'react';
// Components
import { Divider, RedirectButton } from '../../StyleElements';
import { StarRating } from './Ratings';
import { Button } from 'antd';
// Icons
import { BiPencil } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiThumbsUp } from "react-icons/fi";
import { MdOutlineReport } from "react-icons/md";

import allReviews from '../../Shared/reviewData/ReviewData.json'
function BathroomReviews({bathId}) {
    // console.log(bathId);
    //TEMP: replace with api call
    let filteredBathrooms = filterBathroom(bathId);

    let reviewCount = '';

    let reviewButton = <RedirectButton
        redirectTo="/signin"
        button={<Button>
            <BiPencil className="bufferedIcon" />
            Write a Review
        </Button>}
    />;
    if (sessionStorage.getItem('Auth Token')) {
        reviewButton = <RedirectButton
            redirectTo="/review"
            button={<Button>
                <BiPencil className="bufferedIcon" />
                Write a Review
            </Button>}
        />;
    }

    if (filteredBathrooms.length == 1) {
        reviewCount = `${filteredBathrooms.length} review`;
    } else {
        reviewCount = `${filteredBathrooms.length} reviews`;
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <h2>Reviews</h2>
                <p style={{ marginLeft: '1rem' }}>{reviewCount}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                {reviewButton}
            </div>
            <Divider />
            <AllBathroomReviews data={filteredBathrooms}/>
        </div>
    );
}

function AllBathroomReviews({data}) {
    let testData = [{ count: 1 }, { count: 2 }];
    // console.log(data);
    let reviewList = data.map((review) => {
        return <div>
            <SingleBathroomReview review={review}/>
            <Divider />
        </div>
    })
    return (
        <div>
            {reviewList}
        </div>
    );
}

function SingleBathroomReview({review}) {
    let overall = overallRating(review);
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p><strong>{review.title}</strong></p>
                <StarRating rating={overall} size={25} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ReviewDetails review={review}/>
                <ReviewActions />
            </div>
        </div>
    );
}

function ReviewDetails({review}) {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <CgProfile className="bufferedIcon loweredIcon" size={25} />
                <p style={{ paddingRight: '1rem', fontSize: '1.1rem' }}>{review["display_name"]}</p> {/**TODO: replace with actual user */}
                <p>{review.date}</p>
            </div>
            <p>{review.content}</p>
        </div>
    );
}

function ReviewActions() {
    return (
        <div>
            <MdOutlineReport size={25} />
            <FiThumbsUp size={25} />
        </div>
    );
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

export default BathroomReviews;

function overallRating(review) {
    let sum = (review.cleanliness + review.privacy + review["well-stocked"]) / 3;
    let avg = Math.round(sum / 0.5) * 0.5;

    // console.log(avg);

    return avg;
}