import React from 'react'

import { Consumer } from '../../ContextCreator'

export class RepoList extends React.Component {
  render() {
    return (
      <Consumer name="github">
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
      </Consumer>
    )
  }
}

export default RepoList
