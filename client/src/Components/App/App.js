import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
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

    this.removeTrack = this.removeTrack.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);   
  }

  addTrack(track) {    
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    } else {
      this.setState({
        playlistTracks: [...this.state.playlistTracks, track]
        })
    }
  }

  removeTrack(track) {
    const newArray = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);

    this.setState({playlistTracks: newArray});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    console.log("CLICK");
    return this.state.playlistTracks.map(e => e.uri);
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render(){
    
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={this.search}
            />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              />
            <Playlist 
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
