import React from "react";
import "./PostAddform.css";
export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onValueChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onAdd(this.state.text);
          this.setState({ text: "" });
        }}
      >
        <input
          type="text"
          required
          placeholder="What are you thinking about?"
          className="form-control new-post-label"
          value={this.state.text}
          onChange={this.onValueChange}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add Post
        </button>
      </form>
    );
  }
}
