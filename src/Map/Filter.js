// React
import React, { Component } from 'react';
// Components 
import { RedirectButton, Divider } from "../StyleElements";
import { Rate } from 'antd';

export default function FilterForm() {
    return (
        <div>
            <div style={{ textAlign: "left" }}>
                <RedirectButton redirectTo="/" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                <h1>Filters</h1>
            </div>
            <ReviewForm />
        </div>
    );
}

function ReviewForm() {
    return (
        <form class="form-inline">
            <div style={{ textAlign:'left', display:'flex', flexDirection:'column', margin:'1.5rem'}}>
                <FilterCategory title="Gender" filters={["Women", "Men", "Neutral"]} />
                <FilterCategory title="Accessibility" filters={["Large Stall", "Single Stall", "Hand Rail", "Low Seat"]} />
                <FilterCategory title="Features" filters={["Changing Station", "Tall Stalls", "Water Fountain", "Auto-Flush", "Feminine Products", "Towels"]} />
                <FilterCategory title="Requirements" filters={["No Key", "Free"]} />
                <MinimumRating />
            </div>
            <div style={{paddingTop:'2rem'}}>
                <ResetButton />
                <span style={{padding:'7vw'}}/>
                <SaveButton />
            </div>
        </form>
    );
}

function FilterCategory(props) {
    let allToggles = props.filters.map((filterName) => {
        return <FilterToggle text={filterName} id={filterName} />;
    })
    return (
        <div>
            <div style={{display:'flex'}}>
                <CategoryTitle title={props.title} />
                <div style={{display:'flex', flexWrap:'wrap', paddingLeft:'1rem'}}>
                    {allToggles}
                </div>
            </div>
            <Divider />
        </div>
    );
}

function MinimumRating() {
    return (
        <div>
            <div style={{display:'flex'}}>
                <CategoryTitle title="Minimum Rating" />
                <div style={{paddingLeft:'1rem'}}>
                    <Rate allowHalf style={{color:'#E0AFFB'}} />
                </div>
            </div>
        </div>
    )
}

function CategoryTitle(props) {
    return (
        <div>
            <h2 style={{fontSize:'1.1rem', width:'8rem'}}><strong>{props.title}</strong></h2>
        </div>
    );
}

function FilterToggle(props) {
    return (
        <button type="submit" class="btn filterToggle">
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