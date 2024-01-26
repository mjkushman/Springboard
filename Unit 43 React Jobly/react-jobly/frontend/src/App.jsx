import "./App.css";
import { BrowserRouter } from "react-router-dom";

import ContextHolder from "./ContextHolder";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextHolder />
      </BrowserRouter>
    </>
  );
}

export default App;
