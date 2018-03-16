import React from 'react'

import { Consumer } from '../../ContextCreator'

export class ProjectDetails extends React.Component {
  render() {
    return (
      <Consumer name="github">
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
      </Consumer>
    )
  }
}

export default ProjectDetails
