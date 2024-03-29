import React from "react";
import Nav from "./Nav";
import { Route, BrowserRouter } from "react-router-dom";
import Food from "./Food";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path="/food/:name" element={<Food/>}>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
