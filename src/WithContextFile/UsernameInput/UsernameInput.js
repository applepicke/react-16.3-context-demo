import React from 'react'

import { GitHubContext } from '../Contexts/Github'

export class UsernameInput extends React.Component {
  render() {
    return (
      <GitHubContext.Consumer>
        {({ state, actions }) => {
          const { username } = state
          const { fetchRepos, updateUsername } = actions

          return (
            <div className="project-input">
              <input
                type="text"
                placeholder="Enter a GitHub user"
                value={username}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    fetchRepos(username)
                  }
                }}
                onChange={event => {
                  event.preventDefault()
                  updateUsername(event.target.value)
                }}
              />
              <button onClick={() => fetchRepos(username)}>
                Search
              </button>
            </div>
          )
        }}
      </GitHubContext.Consumer>
    )
  }
}

export default UsernameInput
