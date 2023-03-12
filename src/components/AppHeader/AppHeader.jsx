import React, { Component } from "react";
import SearchPanel from "../SearchPanel";

class AppHeader extends Component {
  render() {
    return (
      <>
        <div className="container">
          <form className="form d-flex gap-1 align-items-center my-3">
            <input
              type="text"
              placeholder="Search by posts"
              className="form-control"
            />
            <SearchPanel />
          </form>
        </div>
      </>
    );
  }
}

export default AppHeader;
