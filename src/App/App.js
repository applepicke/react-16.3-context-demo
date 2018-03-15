import './App.css'

import React, { Component } from 'react'

import { ProjectInput } from '../ProjectInput'
import { ProjectList } from '../ProjectList'
import { ProjectDetails } from '../ProjectDetails'

import {
  GitHubProvider
} from '../Contexts/Github'

class App extends Component {
  render() {
    return (
      <GitHubProvider>
        <div className="App">
          <h1>My Github Explorer</h1>

          <ProjectInput />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>

            <ProjectList />
            <ProjectDetails />
          </div>
        </div>
      </GitHubProvider>
    )
  }
}

export default App
