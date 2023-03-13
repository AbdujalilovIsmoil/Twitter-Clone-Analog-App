import React, { Component } from "react";
import AppHeader from "../AppHeader";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";
import "./App.scss";
import SearchPanel from "../SearchPanel";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      term: "",
      filter: "all"
    };

    this.onImporant = this.onImporant.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onLiked = this.onLiked.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  onImporant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);
      const newItem = { ...data[index], important: !data[index].important };
      return {
        data: [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      };
    });
  }

  onDelete(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id == id);
      return { data: [...data.slice(0, index), ...data.slice(index + 1)] };
    });
  }

  onLiked(e, id) {
    if (e.target.classList.contains("list-group-item")) {
      this.setState(({ data }) => {
        const index = data.findIndex((el) => el.id === id);
        return {
          data: [
            ...data.slice(0, index),
            { ...data[index], like: !data[index].like },
            ...data.slice(index + 1)
          ]
        };
      });
    }
  }

  onAdd(content) {
    if (content) {
      this.setState(({ data }) => {
        const objectValues = {
          id: this.maxId++,
          label: content,
          important: false,
          like: false
        };
        return {
          data: [...data, objectValues]
        };
      });
    }
  }

  searchPost(data, term) {
    if (term.length === 0) {
      return data;
    }

    return data.filter((el) => {
      return el.label.indexOf(term) > -1;
    });
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  onFilter(data, term) {
    if (term === "like") {
      return data.filter((el) => el.like);
    } else {
      return data;
    }
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  render() {
    const { term, data, filter } = this.state;
    const liked = data.filter((el) => el.like).length;
    const AllPosts = data.length;
    const filtered = this.onFilter(this.searchPost(data, term), filter);
    return (
      <>
        <div className="App w-75 mx-auto mt-5 pb-3 shadow p-1 rounded-5">
          <AppHeader liked={liked} AllPosts={AllPosts} />
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
          <PostList
            posts={filtered}
            onImporant={this.onImporant}
            onDelete={this.onDelete}
            onLiked={this.onLiked}
          />
          <PostAddForm onAdd={this.onAdd} />
        </div>
      </>
    );
  }
}

export default App;
