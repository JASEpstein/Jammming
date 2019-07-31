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
        // console.log("tracklist rendered");
        return ( 
            <div className="TrackList">
                {this.tracklist = this.props.tracks.map((element) => {
            return <Track 
                    track={element} 
                    key={element.id}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval}
                    /> 
        }) }
            </div>
         );
    }
}
 
export default TrackList;