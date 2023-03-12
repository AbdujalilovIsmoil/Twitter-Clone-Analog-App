import React, { Component } from "react";

class SearchPanel extends Component {
  render() {
    return (
      <>
        <div className="buttons d-flex align-items-center gap-1">
          <button type="button" className="btn btn-primary">
            All
          </button>
          <button type="button" className="btn btn-success">
            Liked
          </button>
        </div>
      </>
    );
  }
}

export default SearchPanel;
