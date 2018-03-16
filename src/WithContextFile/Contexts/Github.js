import { ContextCreator } from '../../ContextCreator'
import * as githubActions from '../actions/github'

export const GitHubContext = ContextCreator.createContext({
  state: {
    username: '',
    repoList: [],
    selectedRepo: null,
  },
  actions: githubActions
})

