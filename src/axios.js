import axios from 'axios'

const localhost = axios.create({
  baseURL: 'http://localhost:9000'
})

export default localhost