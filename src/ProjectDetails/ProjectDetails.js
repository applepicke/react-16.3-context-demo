import React from 'react'

import { GitHubContext } from '../Contexts/Github'

export class ProjectDetails extends React.Component {
  render() {
    return (
      <GitHubContext.Consumer>
        {({ state, actions }) => {
          const { selectedRepo } = state

          if (!selectedRepo) {
            return null
          }

          return (
            <div className="project-details">
              {Object.keys(selectedRepo).map(key => {
                if (typeof selectedRepo[key] !== 'string') {
                  return null
                }

                return (
                  <p key={key} style={{ textAlign: 'left' }}>
                    <small>
                      <b>{key}:</b>
                      &nbsp;
                      <span>{selectedRepo[key]}</span>
                    </small>
                  </p>
                )
              })}
            </div>
          )
        }}
      </GitHubContext.Consumer>
    )
  }
}

export default ProjectDetails
