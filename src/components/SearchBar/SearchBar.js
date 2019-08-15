import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term:''
  };
  search = () => {
    this.props.onSearch(this.state.term);
    this.setState({
      term:''
    })
  };
  handleChange=e=>{
    this.setState({
      term: e.target.value
    })
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
