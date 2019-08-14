import React, { Component } from "react";
import './Track.css'

export class Track extends Component {
  render() {
    const renderedButton = this.props.isRemoval ? (
      <button className="Track-action">-</button>
    ) : (
      <button className="Track-action">+</button>
    );
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{/* <!-- track name will go here --> */}</h3>
          <p>
            {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
          </p>
        </div>
        {renderedButton}
      </div>
    );
  }
}

export default Track;
