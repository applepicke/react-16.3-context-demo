import React from 'react'

const _contextMap = {}

export class ContextWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.state
  }

  render() {
    const { customContext, actions } = this.props
    const wrappedActions = {}

    Object.keys(actions).forEach(key => {
      wrappedActions[key] = (...args) => {
        return actions[key](
          newState => {
            this.setState(newState)
          },
          ...args
        )
      }
    })

    return (
      <customContext.Provider value={{
        state: this.state,
        actions: wrappedActions
      }}>
        {this.props.children}
      </customContext.Provider>
    )
  }
}

export const ContextCreator = {
  createContext: (options) => {
    let newContext

    if (options.name) {
      const existingContext = _contextMap[options.name]
      newContext = existingContext ? existingContext : React.createContext(options.name)
      _contextMap[options.name] = newContext
    }
    else {
      newContext = React.createContext()
    }

    return {
      Provider: props => (
        <ContextWrapper
          actions={options.actions}
          customContext={newContext}
          state={options.state}
        >
          {props.children}
        </ContextWrapper>
      ),
      Consumer: newContext.Consumer
    }
  }
}

export class Consumer extends React.Component {
  render() {
    const { children, name } = this.props

    const context = _contextMap[name]

    return (
      <context.Consumer>
        {children}
      </context.Consumer>
    )
  }
}

export class Provider extends React.Component {
  render() {
    const { children, name, initialState, actions } = this.props

    const context = ContextCreator.createContext({
      name, state: initialState, actions
    })

    return (
      <context.Provider>
        {children}
      </context.Provider>
    )
  }
}

export const withProvider = (name, Component, options) => {
  const { initialState, actions } = options

  return class extends React.Component {
    render() {
      const { children, ...rest } = this.props

      return (
        <Provider
          name={name}
          initialState={initialState}
          actions={actions}
        >
          <Component {...rest}>
            {children}
          </Component>
        </Provider>
      )
    }
  }
}

export const withConsumer = (name, Component) => {
  return class extends React.Component {
    render() {
      const { children, ...rest } = this.props

      return (
        <Consumer name={name}>
          {({ state, actions }) => {
            return (
              <Component {...rest} {...state} actions={actions}>
                {children}
              </Component>
            )
          }}
        </Consumer>
      )
    }
  }
}



