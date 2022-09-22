import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: '/website',
  timeout: 6000,
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 封装 get 请求
 * @param url
 * @param params
 */
export function getAction<T>(url: string, params: object): Promise<T> {
  return service.get(url, params)
}

/**
 * 封装 post 请求
 * @param url
 * @param params
 */
export function postAction<T>(url: string, params: object): Promise<T> {
  return service.post(url, params)
}
