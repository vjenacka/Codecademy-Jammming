import React, { Component } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export class TrackList extends Component {
  render() {
    const tracksArr = this.props.tracks.map(track => {
      return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>;
    });
    return <div className="TrackList">{tracksArr}</div>;
  }
}

export default TrackList;
