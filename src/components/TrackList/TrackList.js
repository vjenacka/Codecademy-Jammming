import React, { Component } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export class TrackList extends Component {
  render() {
    const tracksArr = this.props.tracks.map(track => {
      return <Track track={track} key={track.id} onAdd={this.props.onAdd}/>;
    });
    return <div className="TrackList">{tracksArr}</div>;
  }
}

export default TrackList;
