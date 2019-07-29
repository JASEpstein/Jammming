import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    constructor(props){
        super(props)
        this.state = { 
        }
    }
    
    render() { 
        console.log(this.props.tracks);
        const tracks = this.props.tracks.map((element)=> {
            return <Track info={element} key={element.id}/> 
        })
        
        return ( 
            <div className="TrackList">
                {tracks}
            </div>
         );
    }
}
 
export default TrackList;