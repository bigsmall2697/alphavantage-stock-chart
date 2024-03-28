import axios from 'axios'

console.log(
  import.meta.env.VITE_ALPHAVANTAGE_API_URL,
  import.meta.env.VITE_ALPHAVANTAGE_API_KEY
)

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ALPHAVANTAGE_API_URL
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      apikey: import.meta.env.VITE_ALPHAVANTAGE_API_KEY
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
