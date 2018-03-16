import React from 'react'

import { GitHubContext } from '../Contexts/Github'

export class RepoList extends React.Component {
  render() {
    return (
      <GitHubContext.Consumer>
        {({ state, actions }) => {
          const { repoList } = state
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
        }}
      </GitHubContext.Consumer>
    )
  }
}

export default RepoList
