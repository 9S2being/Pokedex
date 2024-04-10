import axios from 'axios'

const apiService = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    
})

export default apiService;