import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import axios from "axios";
import MyNotes from "./Pages/MyNotes";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myNotes" element={<MyNotes />} />
        {/* <Route path="/note" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
