import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bridge from "./components/Bridge";
import Section from "./components/Section";
import NotFound from "./components/NotFound";

function App() {
  useEffect(() => {
    fetch("http://localhost:7000/sections")
      .then((res) => res.json())
      .then((data) => console.table(data));
  }, []);

  return (
    <div>
      <h1>Portals</h1>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Bridge />}
          />
          <Route
            path="/sections/:sectionId"
            element={<Section />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
