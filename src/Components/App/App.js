import React from 'react';
import './App.css';
// import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchResults: [
        {
          name: "Chaos",
          artist: "Mutemath",
          album: "Mutemath (2006)",
          id: 523
        },

      ],
      playlistName: "Groovy Playlist",
      playlistTracks: [
        {
          name: "Control",
          artist: "Broken Bells",
          album: "After The Disco (2014)",
          id: 1
        },
        {
          name: "This Land",
          artist: "Gary Clark, Jr.",
          album: "This Land (2019)",
          id: 2
        },
        
      ],
    }
  }

  addTrack(track) {    
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    } else {
      this.updateState(track);
      console.log(this.state.playlistTracks);
    }
  }

  updateState(track) {
    this.setState(prevState => ({
      playlistTracks: [...prevState.playlistTracks, track]
      }))
  }

  render(){
    
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <SearchBar/> */}
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack.bind(this)}
              />
            <Playlist 
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
