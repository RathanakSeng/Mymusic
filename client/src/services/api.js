import axios from 'axios'

// return a connector
export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000' // Url of the backend
  })
}
