import React from "react";
export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttons = [
      { name: "all", label: "All" },
      { name: "like", label: "Like" },
    ];
  }
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active ? "btn btn-info" : "btn btn-outline-secondary";
      return (
        <button
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
          type="button"
          className={clazz}
        >
          {label}{" "}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
