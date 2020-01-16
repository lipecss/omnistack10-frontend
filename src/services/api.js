import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:33333'
})

export default api