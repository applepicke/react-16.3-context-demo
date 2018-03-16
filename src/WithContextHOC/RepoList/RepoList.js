import React from 'react'

import { withConsumer } from '../../ContextCreator'

export class RepoList extends React.Component {
  render() {
    const { repoList, actions } = this.props
    const { showRepoDetails } = actions

    return (
      <div className="project-list" style={{ textAlign: 'left' }}>
        <ul>
          {repoList.map(r => {
            return (
              <li key={r.id}>
                <a
                  href=""
                  onClick={event => {
                    event.preventDefault()
                    showRepoDetails(r)
                  }}
                >
                  {r.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default withConsumer('github', RepoList)
