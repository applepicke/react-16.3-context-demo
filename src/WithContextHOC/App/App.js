import './App.css'

import React, { Component } from 'react'
import { withProvider } from '../../ContextCreator'

import { UsernameInput } from '../UsernameInput'
import { RepoList } from '../RepoList'
import { RepoDetails } from '../RepoDetails'

import * as githubContext from '../actions/github'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Github Explorer (Context HOC)</h1>

        <UsernameInput />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <RepoList />
          <RepoDetails />
        </div>
      </div>
    )
  }
}

const { initialState, ...actions } = githubContext

export default withProvider('github', App, { initialState, actions })
