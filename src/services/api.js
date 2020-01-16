import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-10.herokuapp.com/'
})

export default api