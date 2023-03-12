import React, { Component } from "react";
import PostListItem from "../PostListItem";
import "./PostList.scss";

class PostList extends Component {
  render() {
    return (
      <>
        <div className="container">
          <ul className="list-group">
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
            <PostListItem />
          </ul>
        </div>
      </>
    );
  }
}

export default PostList;
