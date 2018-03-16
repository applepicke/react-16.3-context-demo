import React from 'react'

import { withConsumer } from '../../ContextCreator'

export class ProjectDetails extends React.Component {
  render() {
    const { selectedRepo } = this.props

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
  }
}

export default withConsumer('github', ProjectDetails)
