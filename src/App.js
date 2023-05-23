import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bridge from "./components/Bridge";
import Section from "./components/Section";
import NotFound from "./components/NotFound";

function App() {
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
