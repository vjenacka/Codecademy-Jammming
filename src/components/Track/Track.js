import React, { Component } from "react";
import './Track.css'

export class Track extends Component {
  addTrack=()=>{
    this.props.onAdd(this.props.track)
  }
  removeTrack=()=>{
    this.props.onRemove(this.props.track)
  }
  render() {
    const {track}=this.props;
    const renderedButton = this.props.isRemoval ? (
      <button className="Track-action" onClick={this.removeTrack}>-</button>
    ) : (
      <button className="Track-action" onClick={this.addTrack}>+</button>
    );
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>
            {track.artist}/{track.album}
          </p>
        </div>
        {renderedButton}
      </div>
    );
  }
}

export default Track;
