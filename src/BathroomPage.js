// React
import React from 'react';
// Icons
import { VscHeart } from "react-icons/vsc";
import { BsMap } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi"
import { MdOutlineReport } from "react-icons/md";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaToilet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

class BathroomPage extends React.Component {
    render() {
      return (
        <div style={{textAlign:"left"}}>
            <BathroomPageTitle/>
            <BathroomActions/>
            <BathroomRatings/>
            <BathroomGallery/>
            <BathroomFeatures/>
            <BathroomReviews/>
        </div>
      );
    }
}

class BathroomPageTitle extends React.Component {
    render() {
      return (
        <div style={{textAlign:"left"}}>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <i className="open-details fa fa-chevron-left" aria-hidden="true"></i>
                    <FaToilet />
                    <p>Room 104 / Floor 1</p>
                </div>
                <StarRating />
            </div>
            <p>Guthrie Annex 3 (GA3), Seattle, WA 98105</p>
        </div>
      );
    }
}

class BathroomActions extends React.Component {
    render() {
      return (
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
            <ActionWithTitle icon={<BsMap />} title="Directions" />
            <ActionWithTitle icon={<VscHeart />} title="Favorite" />
            <ActionWithTitle icon={<HiOutlinePencilAlt />} title="Review" />
            <ActionWithTitle icon={<FiShare2 />} title="Share" />
        </div>
      );
    }
}

class ActionWithTitle extends React.Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                {this.props.icon}
                <p>{this.props.title}</p>
            </div>
        )
    }
}

class BathroomRatings extends React.Component {
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

class CategoricalRating extends React.Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent:'space-between'}} >
                <p>{this.props.title}</p>
                <StarRating />
            </div>
        )
    }
}

class BathroomGallery extends React.Component {
    render() {
      return (
        <div>
            <h2>Gallery</h2>
        </div>
      );
    }
}

class BathroomFeatures extends React.Component {
    render() {
      return (
        <div>
            <h2>Features</h2>
            <SingleBathroomFeature feature="Tall Stalls" />
            <SingleBathroomFeature feature="Paper Towels" />
            <SingleBathroomFeature feature="Auto Flush" />
            <SingleBathroomFeature feature="Hand Dryer" />
        </div>
      );
    }
}

class SingleBathroomFeature extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection:'row'}} >
                <AiOutlineCheckCircle />
                <p>{this.props.feature}</p>
            </div>
        )
    }
}

class BathroomReviews extends React.Component {
    render() {
      return (
        <div>
            <div style={{display:'flex'}}>
                <h2>Reviews</h2>
                <p>38 reviews</p>
            </div>
            <div style={{textAlign:'center', borderBottom: '1px solid gray'}}>
                <button>Write a Review</button>
            </div>
            <AllBathroomReviews/>
        </div>
      );
    }
}

class AllBathroomReviews extends React.Component {
    render() {
        let testData = [{count:1}, {count:2}];
        let allReviews = testData.map((count) => {
            return <SingleBathroomReview num={count} />
        })
        return (
            <div>
                {allReviews}
            </div>
        );
    }
}

class SingleBathroomReview extends React.Component {
    render() {
      return (
        <div style={{ borderBottom: '1px solid gray'}}>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <h4>LOVE THIS BATHROOM!!!</h4>
                <StarRating />
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ReviewDetails />
                <ReviewActions />
            </div>
        </div>
      );
    }
}

class ReviewDetails extends React.Component {
    render() {
      return (
        <div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <CgProfile style={{marginRight:'5'}} />
                <p style={{paddingRight:'1rem'}}>rebec20</p>
                <p>1/3/2020</p>
            </div>
            <p>I was really satisfied with this bathroom! It was clean, well maintained, and had no line! Thanks to Spotty, I could easily and quickly use a great public bathroom! :)</p>
        </div>
      );
    }
}

class ReviewActions extends React.Component {
    render() {
      return (
        <div>
            <MdOutlineReport />
            <FiThumbsUp />
        </div>
      );
    }
}

class StarRating extends React.Component {
    render() {
        return (
            <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
            </div>
        )
    }
}

export default BathroomPage;