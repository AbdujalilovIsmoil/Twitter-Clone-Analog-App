import React, { Component } from "react";

class PostAddForm extends Component {
  render() {
    return (
      <>
        <div className="container">
          <form className="form d-flex align-items-center gap-1 mt-3">
            <input
              type="text"
              placeholder="What are you thinking about ?"
              className="form-control"
            />
            <button className="btn btn-success">
              Add
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default PostAddForm;
