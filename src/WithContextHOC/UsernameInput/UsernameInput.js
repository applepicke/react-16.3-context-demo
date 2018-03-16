import React from 'react'

import { withConsumer } from '../../ContextCreator'

export class UsernameInput extends React.Component {
  render() {
    const { username, actions } = this.props
    const { fetchRepos, updateUsername } = actions

    const handleSearch = () => {
      fetchRepos(username).then(() => {
      })
    }

    return (
      <div className="project-input">
        <input
          type="text"
          placeholder="Enter a GitHub user"
          value={username}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleSearch()
            }
          }}
          onChange={event => {
            event.preventDefault()
            updateUsername(event.target.value)
          }}
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    )
  }
}

export default withConsumer('github', UsernameInput)
