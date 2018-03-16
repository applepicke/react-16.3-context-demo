import './App.css'

import React, { Component } from 'react'
import { Provider } from '../../ContextCreator'

import { UsernameInput } from '../UsernameInput'
import { RepoList } from '../RepoList'
import { RepoDetails } from '../RepoDetails'

import * as githubActions from '../actions/github'

const initialState = {
  username: '',
  repoList: [],
  selectedRepo: null,
}

class App extends Component {
  render() {
    return (
      <Provider
        name="github"
        initialState={initialState}
        actions={githubActions}
      >
        <div className="App">
          <h1>My Github Explorer (Context Component)</h1>

          <UsernameInput />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <RepoList />
            <RepoDetails />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
