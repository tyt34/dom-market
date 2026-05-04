import { useEffect, useState, type FC } from 'react'
import styles from './Card.module.scss'
import { Skeleton } from '@mui/material'

interface Props {
  count: number
}

const SEARCH_URL =
  'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=*'

const OBJECT_URL =
  'https://collectionapi.metmuseum.org/public/collection/v1/objects'

let cachedIds: number[] | null = null

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
    .slice(0, count)

  const objects = await Promise.all(
    shuffled.map((id) =>
      fetch(`${OBJECT_URL}/${id}`).then((res) => res.json()),
    ),
  )

  return objects.map((obj) => obj.primaryImage).filter(Boolean)
}

export const Card: FC<Props> = ({ count }) => {
  const [images, setImages] = useState<string[]>([])
  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const load = async () => {
      setImages([])
      setLoaded({})
      setActive(0)

      const imgs = await generateRandomMetImages(count)
      setImages(imgs)
    }

    load()
  }, [count])

  const handleLoad = (index: number) => {
    setLoaded((prev) => ({ ...prev, [index]: true }))
  }

  const prev = () => {
    setActive((p) => (p === 0 ? images.length - 1 : p - 1))
  }

  const next = () => {
    setActive((p) => (p === images.length - 1 ? 0 : p + 1))
  }

  return (
    <div className={styles.wrapper}>
      {/* MAIN */}
      <div className={styles.main}>
        <button
          className={styles.arrow}
          onClick={prev}
        >
          ‹
        </button>

        {!loaded[active] && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={210}
          />
        )}

        {images[active] && (
          <img
            src={images[active]}
            className={styles.image}
            onLoad={() => handleLoad(active)}
          />
        )}

        <button
          className={styles.arrow}
          onClick={next}
        >
          ›
        </button>
      </div>

      {/* THUMBS (ВСЕГДА 3 СЛОТА) */}
      <div className={styles.thumbs}>
        {Array.from({ length: 3 }, (_, i) => {
          const img = images[i]
          const isLoaded = loaded[i]

          return (
            <div
              key={i}
              className={styles.thumbWrapper}
            >
              {!img || !isLoaded ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height="100%"
                />
              ) : (
                <img
                  src={img}
                  className={styles.thumb}
                  onLoad={() => handleLoad(i)}
                  onClick={() => setActive(i)}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
