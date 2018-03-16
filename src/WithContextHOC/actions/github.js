import axios from 'axios'

export const initialState = {
  username: '',
  repoList: [],
  selectedRepo: null,
}

export const showRepoDetails = (update, repo) => {
  update({ selectedRepo: repo })
}

export const updateUsername = (update, username) => {
  update({ username })
}

export const fetchRepos = (update, username )=> {
  return axios.get(`https://api.github.com/users/${username}/repos`)
    .then(({ data }) => {
      update({repoList: data})
    })
}

