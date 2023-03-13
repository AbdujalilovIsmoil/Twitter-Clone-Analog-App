import React, { Component } from "react";
import PostListItem from "../PostListItem";
import "./PostList.scss";

class PostList extends Component {
  render() {
    let { posts, onImporant, onDelete, onLiked } = this.props;
    return (
      <>
        <div className="container">
          <ul className="list-group">
            {posts.length > 0 ? (
              posts.map((item) => (
                <PostListItem
                  key={item.id}
                  content={item.label}
                  important={item.important}
                  like={item.like}
                  onImporant={() => onImporant(item.id)}
                  onDelete={() => onDelete(item.id)}
                  onLiked={(e) => onLiked(e, item.id)}
                />
              ))
            ) : (
              <h1 className="text-center">NOT FOUND</h1>
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default PostList;
