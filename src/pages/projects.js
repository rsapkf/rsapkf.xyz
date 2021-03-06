import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GitHubProjectData from "../components/github-project-data"

import {
  personalProjects,
  softwareProjects,
  miscProjects,
} from "../data/projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h3>Projects</h3>
      <div style={{ marginBottom: "25px" }}>
        <a href="https://github.com/rsapkf">GitHub</a> &bull;{" "}
        <a href="https://gist.github.com/rsapkf">Gists</a>
      </div>
      <ul>
        <li>
          <h4>Personal:</h4>
          <ul>
            {personalProjects.map(project => (
              <li key={project.name}>
                <GitHubProjectData project={project} />
              </li>
            ))}
          </ul>
        </li>
        <br />
        <hr />
        <li>
          <h4>Software:</h4>
          <ul>
            {softwareProjects.map(project => (
              <li key={project.name}>
                <GitHubProjectData project={project} />
              </li>
            ))}
          </ul>
        </li>
        <br />
        <hr />
        <li>
          <h4>Miscellaneous:</h4>
          <ul>
            {miscProjects.map(project => (
              <li key={project.name}>
                <GitHubProjectData project={project} />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </Layout>
  )
}

export default ProjectsPage
