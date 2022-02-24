// React
import React from 'react';
import { Component } from 'react';
// Icons
import { AiOutlineCheckCircle, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaToilet, FaChevronLeft } from "react-icons/fa";
import { FiThumbsUp, FiShare2 } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdOutlineReport } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";

class BathroomPage extends Component {
    render() {
      return (
        <div style={{textAlign:"left"}}>
            <BathroomPageTitle/>
            <div style={{display:'flex', flexDirection:'row', alignContent:'center' }}>
                <div style={{width:"5vw"}} />
                <div style={{width:"90vw"}}>
                    <BathroomActions />
                    <Divider />
                    <BathroomRatings />
                    <Divider />
                    <BathroomGallery />
                    <Divider />
                    <BathroomFeatures />
                    <Divider />
                    <BathroomReviews />
                </div>
            </div>
        </div>
      );
    }
}

class Divider extends Component {
    render() {
        return (
            <div style={{ 
                borderBottom: '1px solid #E5E5E5', 
                paddingTop:'1rem', 
                marginBottom:'1rem'
            }} />
        )
    }
}

class BathroomPageTitle extends Component {
    render() {
      return (
        <div style={{textAlign:"left"}}>
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <FaChevronLeft />
                    <FaToilet style={{marginRight:'5'}} />
                    <p style={{fontSize:'18px'}}><strong>Room 104 / Floor 1</strong></p>
                </div>
                <StarRating />
            </div>
            <p style={{marginLeft:'10px', fontSize:'14px', color:'#626262'}}>
                <strong>Guthrie Annex 3 (GA3), Seattle, WA 98105</strong>
            </p>
        </div>
      );
    }
}

class BathroomActions extends Component {
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

class ActionWithTitle extends Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <div style={{color:"#68DCEC"}}>
                    {this.props.icon}
                </div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

class BathroomRatings extends Component {
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

class BathroomGallery extends Component {
    render() {
      return (
        <div>
            <h2>Gallery</h2>
            <div style={{display:'flex', height:"5rem"}}>
                <img src="logo192.png" style={{height:'5rem'}} />
                <img src="logo192.png" style={{height:'5rem'}} />
                <img src="logo192.png" style={{height:'5rem'}} />
                <img src="logo192.png" style={{height:'5rem'}} />
                <img src="logo192.png" style={{height:'5rem'}} />
            </div>
        </div>
      );
    }
}

class BathroomFeatures extends Component {
    render() {
      return (
        <div>
            <h2>Features</h2>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                <SingleBathroomFeature feature="Tall Stalls" />
                <SingleBathroomFeature feature="Paper Towels" />
                <SingleBathroomFeature feature="Auto Flush" />
                <SingleBathroomFeature feature="Hand Dryer" />
            </div>
        </div>
      );
    }
}

class SingleBathroomFeature extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection:'row', marginRight:'5rem'}} >
                <AiOutlineCheckCircle style={{marginRight:'5'}} />
                <p>{this.props.feature}</p>
            </div>
        )
    }
}

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
                    <BiPencil style={{marginRight:'5'}} />
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

class ReviewDetails extends Component {
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

class ReviewActions extends Component {
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

export default BathroomPage;