import React from 'react'

import { WithContextFile } from './WithContextFile/App'
import { WithContextComponent } from './WithContextComponent/App'
import { WithContextHOC } from './WithContextHOC/App'

export class App extends React.Component {
  state = {
    appType: 'with-context-file'
  }

  render() {
    const map = {
      'with-context-file': <WithContextFile />,
      'with-context-component': <WithContextComponent />,
      'with-context-hoc': <WithContextHOC />
    }

    return (
      <div className="app">
        <select value={this.state.appType} onChange={e => this.setState({ appType: e.target.value })}>
          <option value="with-context-file">Context File</option>
          <option value="with-context-component">Context Component</option>
          <option value="with-context-hoc">Higher Order Component</option>
        </select>

        {map[this.state.appType]}
      </div>
    )
  }
}
