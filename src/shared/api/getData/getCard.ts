import { makeApiRequest } from '@api/makeRequest'
import type { CardResponse } from './getCard.types'

const API = {
  GET_DATA:
    'https://jivemdoma.space/api/v1/frontend-test/catalog/units/rand',
}

export const getCard = async (params?: any) => {
  try {
    const response = await makeApiRequest<never, any, CardResponse>({
      method: 'get',
      url: API.GET_DATA,
      params,
      config: {
        retries: 10,
        retryDelay: 1000,
      },
    })
    return response
  } catch (err) {
    console.error(err)
    throw err
  }
}
