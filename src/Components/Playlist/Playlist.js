import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList
                    tracks={this.props.playlistTracks}
                    isRemoval={true}
                />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
         );
    }
}
 
export default Playlist;