import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Bridge() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/sections")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);

  return (
    <div>
      {sections.map((s) => (
        <div key={s.id}>
          <Link to={`/sections/${s.id}`}>{s.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Bridge;
