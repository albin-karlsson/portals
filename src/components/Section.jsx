import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sectionStyles } from "../services/styleService";

function Section() {
  const { sectionId } = useParams();
  const [section, setSection] = useState({});
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (Object.keys(section).length !== 0) {
      switch (section.name) {
        case "Control Room": {
          setStyle(sectionStyles.controlRoom());
          break;
        }
        case "Engineering": {
          setStyle(sectionStyles.engineering());
        }
      }
    }
  }, [section]);

  useEffect(() => {
    fetch(`http://localhost:7000/sections/${sectionId}`)
      .then((res) => res.json())
      .then((data) => {
        setSection(data);
      });
  }, [sectionId]);

  if (section.currentCrew) {
    return (
      <div style={style}>
        <Link to="/">
          <button>Back to Bridge</button>
        </Link>
        <h1>{section.name}</h1>
        <p>{section.description}</p>
        <em>{section.interestingFact}</em>
        <h4>Current Crew:</h4>
        <ul>
          {section.currentCrew.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">
        <button>Back to Bridge</button>
      </Link>
      <h1>{section.name}</h1>
      <p>{section.description}</p>
      <em>{section.interestingFact}</em>
      <p>There is currently no people occupying this section</p>
    </div>
  );
}

export default Section;
