import React from 'react'
import axios from 'axios'

export const GitHubContext = React.createContext()

export class GitHubProvider extends React.Component {
  state = {
    username: '',
    repoList: [],
    selectedRepo: null
  }

  fetchRepos = username => {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(({ data }) => {
        this.setState({repoList: data})
      })
  }

  showRepoDetails = repo => {
    this.setState({ selectedRepo: repo })
  }

  updateUsername = username => {
    this.setState({ username })
  }

  render() {
    return (
      <GitHubContext.Provider value={{
        state: this.state,
        actions: {
          fetchRepos: this.fetchRepos,
          showRepoDetails: this.showRepoDetails,
          updateUsername: this.updateUsername
        }
      }}>
        {this.props.children}
      </GitHubContext.Provider>
    )
  }
}

