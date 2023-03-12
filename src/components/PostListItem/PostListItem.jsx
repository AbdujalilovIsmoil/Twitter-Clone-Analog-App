import React, { Component } from "react";
import "./PostListItem.scss";

class PostListItem extends Component {
  render() {
    return (
      <>
        <li className="list-group-item d-flex justify-content-between align-items-center my-2 border border-1 rounded-2 me-2">
          <h3 className="list-group-title mt-3">Going to learn React</h3>
          <div className="buttons d-flex align-items-center gap-1">
            <button className="btn btn-secondary">
              <i className="fa fa-star text-warning"></i>
            </button>
            <button className="btn btn-secondary">
              <i className="fa fa-trash text-danger"></i>
            </button>
            <button className="btn btn-secondary">
              <i className="fa fa-heart text-danger"></i>
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default PostListItem;
