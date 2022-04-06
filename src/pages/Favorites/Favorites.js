// React
import React from 'react';
import { Component } from 'react';
// Components
import { ShortDivider } from '../../StyleElements';
import { RedirectButton } from '../../StyleElements';
// Icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
// Style
import 'reactjs-popup/dist/index.css';

export default class FavoritesPage extends Component {
    render() {
        const bathrooms = [
            {id:0, name:"Floor 2"},
            {id:1, name:"Floor 3"},
            {id:2, name:"Floor 1"},
            {id:3, name:"Floor 1"},
            {id:4, name:"Floor 3"},
            {id:5, name:"Floor 2"},
            {id:6, name:"Floor 1"}
        ]
        const buildings = [
            {id:0, name:"Chemistry Building", location: "Rainier Vista", miles:"0.1", imgSrc:"temp-imgs/buildings/CHB.png", rating:4.6}, 
            {id:1, name:"Physics/Astronomy Auditorium", location: "3910 15th Ave NE", miles:"0.1", imgSrc:"temp-imgs/buildings/PAA.png", rating:4.3}, 
            {id:2, name:"Husky Union Bldg", location: "4001 E Stevens Way NE", miles:"0.3", imgSrc:"temp-imgs/buildings/HUB.jpg", rating:3.1}, 
            {id:3, name:"Mary Gates Hall", location: "1851 NE Grant Ln", miles:"0.3", imgSrc:"temp-imgs/buildings/MGH.jpg", rating:3.6}, 
            {id:4, name:"Alder Hall", location: "1315 NE Campus Pkwy", miles:"0.4", imgSrc:"temp-imgs/buildings/HFS-Alder.jpg", rating:4.9}, 
            {id:5, name:"Hans Rosling Center", location: "Guthrie Annex 3 (GA3)", miles:"0.4", imgSrc:"temp-imgs/buildings/HRC.jpg", rating:4.6}, 
            {id:6, name:"Suzzalo Library", location: "4000 15th Ave NE", miles:"0.5", imgSrc:"temp-imgs/buildings/SUZ.jpg", rating:3.1}
        ]

        const items = bathrooms.map((info) => {
            const id = info.id;
            return <FavoritesListItem handleClick={this.props.test} brInfo={info} bldgInfo={buildings[id]} key={id} />;
        })

        return (
            <div>
                <div style={{ textAlign: "left" , }}>
                    <RedirectButton redirectTo="/" button={<i className="open-details fa fa-chevron-left" aria-hidden="true"></i>} />
                    <h1>Favorites</h1>
                </div>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}

class FavoritesListItem extends Component {
    render() {
      return (
        <div style={{margin:"1rem"}}>
            <div style={{textAlign:"left", display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <RedirectButton redirectTo="/bathroom" button={
                    <FavBathroomInfo brInfo={this.props.brInfo} bldgInfo={this.props.bldgInfo} />
                } />
                <div>
                    <FaHeart size={30} className='purpleRatingSymbol' />
                    
                </div>
            </div>
            <ShortDivider />
        </div>
      );
    }
}

export class FavBathroomInfo extends Component {
    render() {
        let br = this.props.brInfo;
        let bldg = this.props.bldgInfo;
        return (
            <div style={{display: 'flex', flexDirection:'row', marginBottom:"1rem"}}>
                <img src={bldg.imgSrc} style={{ height:'5rem', width:'5rem', objectFit:'cover', marginRight:'1rem', borderRadius:'1rem' }} />
                <div style={{textAlign:"left"}}>
                    <h3 className="bathroomTitle"><strong>{bldg.name}</strong></h3>
                    <div style={{lineHeight:'0.5rem'}} >
                        <p>{bldg.location}</p>
                        <p>{br.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

/*export function BathroomActions() {
    const [favorited, toggleFavorited] = useState(false);

    let favBtn = <div onClick={() => toggleFavorited(true)}>
                    <ActionWithTitle icon={<FaRegHeart size={30} />} title="Favorite" />
                </div>;
    if (favorited) {
        favBtn = <div onClick={() => toggleFavorited(false)}>
                    <ActionWithTitle icon={<FaHeart size={30} />} title="Favorite" />
                </div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <ActionWithTitle icon={<FiMap size={30} />} title="Directions" />
            {favBtn}
            <ActionWithTitle icon={<HiOutlinePencilAlt size={30} />} title="Review" />
            <ActionWithTitle icon={<FiShare2 size={30} />} title="Share" />
        </div>
    );
}*/