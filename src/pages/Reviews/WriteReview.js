// React
import React, { Component } from 'react';
// Components
import { RedirectButton } from "../../StyleElements";
import { Rate } from 'antd';
import { TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
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
                    <EnterReviewContent />
            </div>
            <div style={{marginTop:'2rem', paddingBottom:'2rem'}}>
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
            <h2 className="sectionTitle" style={{marginTop:'1rem'}}>Bathroom Type</h2>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" variant="standard">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="standard"
                >
                    <MenuItem value={10}>Women</MenuItem>
                    <MenuItem value={20}>Men</MenuItem>
                    <MenuItem value={30}>Neutral</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

function EnterReviewContent() {
    return (
        <div>
            <h2 className="sectionTitle" style={{marginTop:'2rem'}}>Review Content</h2>
            <div class="form-group mr-3" style={{display:'flex', marginBottom:'1rem'}}>
                <TextField label="Title" variant="standard" fullWidth />
            </div>
            <div class="form-group mr-3" style={{display:'flex'}}>
                <TextField label="Description" variant="outlined" fullWidth multiline minRows={5} />
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