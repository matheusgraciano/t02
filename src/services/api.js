import axios from 'axios'
import { AsyncStorage } from 'AsyncStorage'

// findtoken(request => async () => {
//     const token = await AsyncStorage.getItem('@CodeApi:token')
// })

const token = localStorage.getItem('@CodeApi:token')

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {'Authorization': 'Bearer '+token}
})

export default api