import './App.css'

import React, { Component } from 'react'

import { UsernameInput } from '../UsernameInput'
import { RepoList } from '../RepoList'
import { RepoDetails } from '../RepoDetails'

import {
  GitHubContext
} from '../Contexts/Github'

class App extends Component {
  render() {
    return (
      <GitHubContext.Provider>
        <div className="App">
          <h1>My Github Explorer (Context File)</h1>

          <UsernameInput />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <RepoList />
            <RepoDetails />
          </div>
        </div>
      </GitHubContext.Provider>
    )
  }
}

export default App
