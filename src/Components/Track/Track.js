import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRemoval: true,
        }
    }

    render() { 
        
        return ( 
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.info.name}</h3>
                    <p>{this.props.info.artist} | {this.props.info.album}</p>
                </div>
                <button className="Track-action">{this.state.isRemoval ? '-' : '+'}</button>
            </div>
         );
    }
}
 
export default Track;