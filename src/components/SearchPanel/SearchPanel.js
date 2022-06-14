import React from "react";
import "./SearchPanel.css";
export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term : ""
    }
    this.onUpdateSeacrh = this.onUpdateSeacrh.bind(this)
  }

  onUpdateSeacrh(e) {
    const term = e.target.value
    this.setState({term})
    this.props.onUpdateSeacrh(term);
  }
  render() {
    return (
      <input
        type="text"
        placeholder="Search by inputs"
        className="form-control search-input"
        onChange={this.onUpdateSeacrh}  
      />
    );
  }
}
