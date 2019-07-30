import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    tracks = this.props.tracks.map((element) => {
        return <Track 
                track={element} 
                key={element.id}
                onAdd={this.props.onAdd}
                isRemoval={this.props.isRemoval}
                /> 
    })

    render() { 
        console.log("tracklist rendered");
        return ( 
            <div className="TrackList">
                {this.tracks}
            </div>
         );
    }
}
 
export default TrackList;