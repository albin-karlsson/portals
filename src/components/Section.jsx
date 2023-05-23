import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sectionStyles } from "../services/styleService";

function Section() {
  const { sectionId } = useParams();
  const [section, setSection] = useState({});
  const [style, setStyle] = useState({});

  useEffect(() => {
    async function fetchSection() {
      const response = await fetch(
        `http://localhost:7000/sections/${sectionId}`
      );
      const data = await response.json();
      setSection(data);
    }

    fetchSection();
  }, [sectionId]);

  useEffect(() => {
    if (section.name) {
      switch (section.name) {
        case "Control Room":
          setStyle(sectionStyles.controlRoom());
          break;
        case "Engineering":
          setStyle(sectionStyles.engineering());
          break;
        default:
          setStyle({});
          break;
      }
    }
  }, [section.name]);

  if (!Object.keys(section).length) {
    return <div>Loading...</div>;
  }

  return (
    <div style={style}>
      <Link to="/">
        <button>Back to Bridge</button>
      </Link>
      <h1>{section.name}</h1>
      <p>{section.description}</p>
      <em>{section.interestingFact}</em>
      {section.currentCrew ? (
        <>
          <h4>Current Crew:</h4>
          <ul>
            {section.currentCrew.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>There is currently no crew in this section</p>
      )}
    </div>
  );
}

export default Section;
