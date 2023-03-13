import React, { Component } from "react";

class AppHeader extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="AppHeader mt-3 d-flex align-items-center justify-content-between">
            <h2>Coders Uz</h2>
            <p className="fs-5">
              {this.props.AllPosts} Posts, like {this.props.liked}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AppHeader;
