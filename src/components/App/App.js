import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from '../../util/Spotify'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { id: 0, name: "Kljuc", artist: "Baja", album: "Let" },
        { id: 1, name: "Givanni", artist: "Jala", album: "Dom" },
        { id: 2, name: "Zlo", artist: "Buba", album: "Tempo" },
        {
          id: 3,
          name: "Ljubav iz Porsea",
          artist: "Relja",
          album: "Made in BLKN"
        }
      ],
      playlistName: "My playlist",
      playlistTracks: [
        { id: 4, name: "Ghetto majke", artist: "Jala", album: "PSDZ" },
        { id: 5, name: "Led", artist: "Buba", album: "PSDZ" },
        { id: 6, name: "To me radi", artist: "Maja", album: "Vatra" },
        { id: 7, name: "Sve je laz", artist: "Dino", album: "Laz" }
      ]
    };
  }
  addTrack = track => {
    if (!this.state.playlistTracks.some(ele => ele.id === track.id)) {
      this.setState({
        playlistTracks: [...this.state.playlistTracks, track]
      });
    }
  };
  removeTrack = track => {
    const newPlaylistTracks = this.state.playlistTracks.filter(
      listTrack => listTrack.id !== track.id
    );
    this.setState({
      playlistTracks: newPlaylistTracks
    })
  };
  updatePlaylistName=(name)=>{
    this.setState({
      playlistName:name
    })
  }
  savePlaylist=()=>{
    const trackURIs=1;
  }
  search=term=>{
    Spotify.search(term)
    /* .then(resp=>{
      this.setState({
        searchResults:[...this.state.searchResults,...resp]
      })
    }) */
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>in
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
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
