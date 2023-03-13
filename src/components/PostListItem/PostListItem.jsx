import React, { Component } from "react";
import "./PostListItem.scss";

class PostListItem extends Component {
  render() {
    const { content, important, onImporant, onDelete, onLiked, like } =
      this.props;
    let classNames =
      "list-group-item d-flex justify-content-between align-items-center my-2 border border-1 rounded-2 me-2";

    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }
    return (
      <>
        <li className={classNames} onClick={onLiked}>
          <h3 className="list-group-title mt-3">{content}</h3>
          <div className="buttons d-flex align-items-center gap-1">
            <button className="btn btn-secondary" onClick={onImporant}>
              <i className="fa fa-star text-warning"></i>
            </button>
            <button className="btn btn-secondary" onClick={onDelete}>
              <i className="fa fa-trash text-danger"></i>
            </button>
            <i className="fa fa-heart text-danger ms-2"></i>
          </div>
        </li>
      </>
    );
  }
}

export default PostListItem;
