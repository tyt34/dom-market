import axios, { AxiosError } from 'axios'

type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

/**
 * Универсальный интерфейс для отправки запросов на бекенд:
 * TData - body запроса
 * TParams - query запроса
 */
interface ApiRequestOptions<TData = unknown, TParams = unknown> {
  method?: RequestMethod
  url: string
  data?: TData
  params?: TParams
  config?: {
    skipErrorHandler?: boolean
    headers?: Record<string, string>

    // Другие кастомные параметры конфига
  }
}

/**
 * Универсальная функция для отправки запросов на бекенд:
 * TData - body запроса
 * TParams - query запроса
 * R - ответ (response) запроса
 */
export async function makeApiRequest<
  TData = unknown,
  TParams = unknown,
  R = unknown,
>(options: ApiRequestOptions<TData, TParams>): Promise<R> {
  const { method = 'get', url, data, params, config = {} } = options

  try {
    let headers = config.headers || {}

    if (method !== 'get') {
      headers = { ...headers }
    }

    // Основной запрос
    const response = await axios({
      method,
      url,
      data,
      params,
      withCredentials: false,
      headers,
      ...config,
    })

    return response.data
  } catch (err) {
    const error = err as AxiosError<{ message: string }>

    throw error
  }
}
