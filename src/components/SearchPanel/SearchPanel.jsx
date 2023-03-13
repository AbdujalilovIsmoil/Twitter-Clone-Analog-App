import React, { Component } from "react";
import PostStatusFilter from "../PostStatusFilter";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(e) {
    const searchValue = e.target.value;
    this.setState({ term: searchValue });
    this.props.onUpdateSearch(searchValue);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="buttons d-flex align-items-center gap-1">
            <form className="form d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block gap-1 align-items-center my-3 w-100">
              <input
                type="text"
                placeholder="Search by posts"
                className="form-control"
                value={this.state.term}
                onChange={this.onUpdateSearch}
              />
              <PostStatusFilter
                filter={this.props.filter}
                onFilterSelect={this.props.onFilterSelect}
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default SearchPanel;
