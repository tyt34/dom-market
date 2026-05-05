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
    retries?: number
    retryDelay?: number

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

  const {
    retries = 10,
    retryDelay = 1000,
    headers: customHeaders = {},
  } = config

  let attempt = 0

  while (attempt <= retries) {
    try {
      const response = await axios({
        method,
        url,
        data,
        params,
        withCredentials: false,
        headers: customHeaders,
      })

      return response.data
    } catch (err) {
      const error = err as AxiosError

      if (attempt === retries) {
        throw error
      }

      attempt += 1

      await sleep(retryDelay * attempt)
    }
  }

  throw new Error('Unreachable')
}

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
