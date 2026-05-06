import {
  DEV_IMAGE,
  OBJECT_URL,
  SEARCH_URL,
} from './CardImages.constants'

let cachedIds: number[] | null = null

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

const fetchWithRetry = async (url: string, retries = 50) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('Request failed')
    }

    return await res.json()
  } catch (e) {
    if (retries > 0) {
      await sleep(3000)
      return fetchWithRetry(url, retries - 1)
    }

    return e
  }
}

export const generateRandomMetImages = async (count: number) => {
  if (!cachedIds) {
    const res = await fetch(SEARCH_URL)
    const data = await res.json()
    cachedIds = data.objectIDs || []
  }

  if (!cachedIds?.length) {
    return []
  }

  const shuffled = [...cachedIds]
    .sort(() => Math.random() - 0.5)
    .slice(0, count * 2)

  const objects = await Promise.all(
    shuffled.map((id) =>
      // fetch(`${OBJECT_URL}/${id}`).then((res) => res.json()),
      fetchWithRetry(`${OBJECT_URL}/${id}`),
    ),
  )

  return objects
    .map((obj) => obj.primaryImage)
    .filter(Boolean)
    .slice(0, count)
}

export const setSavedImage = async (count: number) => {
  return Array.from({ length: count }, () => DEV_IMAGE)
}
