import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.renderAction = (this.props.isRemoval ?
            <button className="Track-action"
                    onClick={this.removeTrack.bind(this)}>-
            </button>
            :
            <button className="Track-action"
                    onClick={this.addTrack.bind(this)}>+
            </button>
        )
        // this.addTrack = this.addTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }
    

    render() { 
        return ( 
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction}
            </div>
         );
    }
}
 
export default Track;