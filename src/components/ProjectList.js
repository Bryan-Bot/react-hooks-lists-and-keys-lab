import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const item = projects.map((pro)=> <ProjectItem name={pro.name} about={pro.about} technologies={pro.technologies} />);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{item}</div>
    </div>
  );
}

export default ProjectList;
