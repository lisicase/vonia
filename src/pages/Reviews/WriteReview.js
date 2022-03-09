// React
import React, { Component } from 'react';
// Components
import { RedirectButton } from "../../StyleElements";
import { Rate } from 'antd';
// Style
import 'antd/dist/antd.css';

export default function WriteReview() {
    return (
        <div>
            <div style={{ textAlign: "left" }}>
                <RedirectButton redirectTo="/bathroom" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                <h1>Write a Review</h1>
            </div>
            <ReviewForm />
        </div>
    );
}

function ReviewForm() {
    return (
        <form class="form-inline">
            <div style={{ textAlign:'left', display:'flex', flexDirection:'column', margin:'3rem'}}>
                    <RateCategory />
                    <SelectBathroomType />
                    <EnterReviewTitle />
                    <EnterReviewContent />
            </div>
            <div style={{ marginTop: "20vw" }}>
                <SubmitButton />
            </div>
        </form>
    );
}

function RateCategory() {
    return (
        <div>
            {/*<div class="form-group mr-3" style={{ display: 'flex' }}>
                <input type="text" name="term" id="searchQuery" class="form-control" />
            </div>*/}
            <h2 className="sectionTitle">Rating</h2>
            <CategoricalRating title="Cleanliness" />
            <CategoricalRating title="Privacy" />
            <CategoricalRating title="Well-Stocked" />
            <CategoricalRating title="Wait Line" />
        </div>
    );
}

class CategoricalRating extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-between'}} >
                <p className="slightBold">{this.props.title}</p>
                <Rate allowHalf style={{color:'#E0AFFB'}} />
                {/*<StarRating rating={this.props.rating} size={25} />*/}
            </div>
        );
    }
}

function SelectBathroomType() {
    return (
        <div>
            <h2 className="sectionTitle">Bathroom Type</h2>
            <div class="form-group mr-3" style={{ display: 'flex' }}>
                <input type="text" name="term" id="searchQuery" class="form-control" />
            </div>
        </div>
    );
}

function EnterReviewTitle() {
    return (
        <div>
            <h2 className="sectionTitle">Title</h2>
            <div class="form-group mr-3" style={{ display: 'flex' }}>
                <input type="text" name="term" id="searchQuery" class="form-control" />
            </div>
        </div>
    );
}

function EnterReviewContent() {
    return (
        <div>
            <h2 className="sectionTitle">Content</h2>
            <div class="form-group mr-3" style={{ display: 'flex' }}>
                <input type="text" name="term" id="searchQuery" class="form-control" style={{height:'10rem'}} />
            </div>
        </div>
    );
}

function SubmitButton() {
    return (
        <button type="submit" class="btn submitBtn">
            <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>SUBMIT
        </button>
    );
}