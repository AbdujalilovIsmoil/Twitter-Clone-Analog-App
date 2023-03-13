import React, { Component } from "react";
import "./PostStatusFilter.scss";

class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { name: "all", label: "All" },
        { name: "like", label: "Like" }
      ]
    };
  }

  render() {
    const filtered = this.state.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      return (
        <button
          type="button"
          className={active ? "btn btn-primary" : "btn btn-success"}
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });
    return <>{filtered}</>;
  }
}

export default PostStatusFilter;
