// React
import React, { Component } from 'react';
// Components 
import { RedirectButton } from "../StyleElements";

export default function FilterForm() {
    return (
        <div>
            <div style={{ textAlign: "left" }}>
                <RedirectButton redirectTo="/bathroom" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                <h1>Filters</h1>
            </div>
            <ReviewForm />
        </div>
    );
}

function ReviewForm() {
    return (
        <form class="form-inline">
            <div style={{ textAlign:'left', display:'flex', flexDirection:'column', margin:'3rem'}}>
                    <FilterCategory title="Gender" filters={["Women", "Men", "Neutral"]} />
                    <SelectBathroomType />
                    <EnterReviewTitle />
                    <EnterReviewContent />
            </div>
            <div style={{ marginTop: "20vw" }}>
                <ResetButton />
                <span style={{padding:'7vw'}}/>
                <SaveButton />
            </div>
        </form>
    );
}

function FilterCategory(props) {
    return (
        <div>
            {/*<div class="form-group mr-3" style={{ display: 'flex' }}>
                <input type="text" name="term" id="searchQuery" class="form-control" />
            </div>*/}
            <p><strong>{props.title}</strong></p>
            <FilterButton text={props.filters[0]} />
            <FilterButton text="Men" />
            <FilterButton text="Neutral" />
        </div>
    );
}

class CategoricalRating extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-between'}} >
                <p className="slightBold">{this.props.title}</p>
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

function FilterButton(props) {
    return (
        <button type="submit" class="btn resetBtn" style={{width:'25vw'}}>
            <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>{props.text}
        </button>
    );
}

function ResetButton() {
    return (
        <button type="submit" class="btn resetBtn" style={{width:'25vw'}}>
            <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>RESET
        </button>
    );
}

function SaveButton() {
    return (
        <button type="submit" class="btn submitBtn" style={{width:'25vw'}}>
            <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>SAVE
        </button>
    );
}