import React, { Component } from "react";
import "./PostAddForm.scss";

class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  changeHandle(e) {
    this.setState({ text: e.target.value });
  }

  submitHandle(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <>
        <div className="container">
          <form
            className="form d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block align-items-center gap-1 mt-3"
            onSubmit={this.submitHandle}
          >
            <input
              type="text"
              placeholder="What are you thinking about ?"
              className="form-control"
              value={this.state.text}
              onChange={this.changeHandle}
            />
            <button className="btn btn-success">Add</button>
          </form>
        </div>
      </>
    );
  }
}

export default PostAddForm;
