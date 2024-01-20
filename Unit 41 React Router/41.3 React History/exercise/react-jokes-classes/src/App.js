import React, { Component } from "react";
import JokeListComponent from "./JokeListComponent";
// import JokeList from "./JokeList";
// import JokeListComponent from "./JokeListComponent";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeListComponent />
      </div>
    );
  }
}

export default App;
