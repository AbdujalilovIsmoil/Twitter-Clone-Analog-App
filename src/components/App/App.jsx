import React, { Component } from "react";
import AppHeader from "../AppHeader";
import PostList from "../PostList";
import PostAddForm from "../PostAddForm";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <div className="App w-75 mx-auto mt-5 pb-3 shadow p-1 rounded-5">
          <AppHeader />
          <PostList />
          <PostAddForm />
        </div>
      </>
    );
  }
}

export default App;
