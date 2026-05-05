import { useEffect, useState, type FC } from 'react'
import { Skeleton } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import { Favorite } from '@mui/icons-material'
import styles from './CardImages.module.scss'
import { KEY_IMAGES } from '@shared/constants/constants'

interface Props {
  count: number
  isFavorite?: boolean
}

const SEARCH_URL =
  'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=*'

const OBJECT_URL =
  'https://collectionapi.metmuseum.org/public/collection/v1/objects'

let cachedIds: number[] | null = null

const DEV_IMAGE =
  'https://www.alexkotlov.ru/uploads/gall/201009/1283623696_tn.jpg'

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

const generateRandomMetImages = async (count: number) => {
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

const setSavedImage = async (count: number) => {
  return Array.from({ length: count }, () => DEV_IMAGE)
}

export const CardImages: FC<Props> = ({
  count,
  isFavorite = false,
}) => {
  const [images, setImages] = useState<string[]>([])
  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})
  const [ready, setReady] = useState(false)
  const [favorite, setFavorite] = useState<boolean>(false)
  const [modeRandom, setModeRandom] = useState<boolean>(false)

  useEffect(() => {
    const stored = localStorage.getItem(KEY_IMAGES)

    if (stored === 'true') {
      setModeRandom(true)
    } else {
      setModeRandom(false)
    }
  }, [])

  const handleFavorite = () => {
    setFavorite((prev) => !prev)
  }

  useEffect(() => {
    const load = async () => {
      setImages([])
      setLoaded({})
      setActive(0)
      const imgs = modeRandom
        ? await generateRandomMetImages(count)
        : await setSavedImage(count)
      setImages(imgs)
      if (!ready) {
        setReady(true)
      }
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, modeRandom])

  const handleLoad = (index: number) => {
    setLoaded((prev) => ({ ...prev, [index]: true }))
  }

  const prev = () =>
    setActive((p) => (p === 0 ? images.length - 1 : p - 1))

  const next = () =>
    setActive((p) => (p === images.length - 1 ? 0 : p + 1))

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.imageArea}>
          {!loaded[active] && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height={210}
              className={styles.skeleton}
            />
          )}

          {images.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              className={styles.image}
              style={{
                display: i === active && loaded[i] ? 'block' : 'none',
              }}
              onLoad={() => handleLoad(i)}
            />
          ))}
        </div>

        {ready && isFavorite && (
          <div
            className={`${styles.favorite} center`}
            onClick={handleFavorite}
          >
            {favorite ? <Favorite /> : <FavoriteBorder />}
          </div>
        )}

        {ready && (
          <button
            className={styles.arrow}
            onClick={prev}
          >
            ‹
          </button>
        )}

        {ready && (
          <div className={styles.counterBadge}>
            0{active + 1} / 0{images.length}
          </div>
        )}

        {ready && (
          <button
            className={styles.arrow}
            onClick={next}
          >
            ›
          </button>
        )}
      </div>

      <div className={styles.thumbs}>
        {!ready ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={styles.thumbWrapper}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                className={styles.skeleton}
              />
            </div>
          ))
        ) : count <= 3 ? (
          images.map((img, i) => (
            <div
              key={i}
              className={styles.thumbWrapper}
            >
              {img && (
                <img
                  src={img}
                  className={styles.thumb}
                  onLoad={() => handleLoad(i)}
                  onClick={() => setActive(i)}
                />
              )}
            </div>
          ))
        ) : (
          <>
            {[0, 1].map((i) => (
              <div
                key={i}
                className={styles.thumbWrapper}
              >
                {images[i] && (
                  <img
                    src={images[i]}
                    className={styles.thumb}
                    onLoad={() => handleLoad(i)}
                    onClick={() => setActive(i)}
                  />
                )}
              </div>
            ))}

            {/* <div className={`${styles.thumbWrapper} center`}>
              <div className="center">+{count - 2} фото</div>
            </div> */}

            <div className={styles.thumbWrapper}>
              {images[2] && (
                <div className={styles.thumbOverlayWrapper}>
                  <img
                    src={images[2]}
                    className={styles.thumb}
                    onLoad={() => handleLoad(2)}
                    onClick={() => setActive(2)}
                  />

                  <div className={`${styles.overlay} center`}>
                    Еще фото
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
