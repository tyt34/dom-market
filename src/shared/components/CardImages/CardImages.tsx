import {
  generateRandomMetImages,
  setSavedImage,
} from './CardImages.utils'
import { Favorite } from '@mui/icons-material'
import { KEY_IMAGES } from '@shared/constants/constants'
import { Skeleton } from '@mui/material'
import { useBreakpoints } from '@shared/hooks/useBreakpoints'
import { useEffect, useState, type FC } from 'react'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import styles from './CardImages.module.scss'

interface Props {
  count: number
  isFavorite?: boolean
  isOnly?: boolean
}

export const CardImages: FC<Props> = ({
  count,
  isFavorite = false,
  isOnly = false,
}) => {
  const [active, setActive] = useState(0)
  const [favorite, setFavorite] = useState<boolean>(false)
  const [images, setImages] = useState<string[]>([])
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})
  const [modeRandom, setModeRandom] = useState<boolean>(false)
  const [ready, setReady] = useState(false)

  const { isDesktop } = useBreakpoints()

  console.log({ isDesktop })

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
    <div
      className={
        isDesktop && isOnly ? styles.wrapperOnly : styles.wrapper
      }
    >
      <div
        className={isDesktop && isOnly ? styles.mainOnly : styles.main}
      >
        <div
          className={
            isDesktop && isOnly
              ? styles.imageAreaOnly
              : styles.imageArea
          }
        >
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

      <div
        className={
          isDesktop && isOnly ? styles.thumbsOnly : styles.thumbs
        }
      >
        {!ready ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={
                isDesktop && isOnly
                  ? styles.thumbWrapperOnly
                  : styles.thumbWrapper
              }
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
              className={
                isDesktop && isOnly
                  ? styles.thumbWrapperOnly
                  : styles.thumbWrapper
              }
            >
              {img && (
                <img
                  src={img}
                  className={
                    isDesktop && isOnly
                      ? styles.thumbOnly
                      : styles.thumb
                  }
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
                className={
                  isDesktop && isOnly
                    ? styles.thumbWrapperOnly
                    : styles.thumbWrapper
                }
              >
                {images[i] && (
                  <img
                    src={images[i]}
                    className={
                      isDesktop && isOnly
                        ? styles.thumbOnly
                        : styles.thumb
                    }
                    onLoad={() => handleLoad(i)}
                    onClick={() => setActive(i)}
                  />
                )}
              </div>
            ))}

            <div
              className={
                isDesktop && isOnly
                  ? styles.thumbWrapperOnly
                  : styles.thumbWrapper
              }
            >
              {images[2] && (
                <div className={styles.thumbOverlayWrapper}>
                  <img
                    src={images[2]}
                    className={
                      isDesktop && isOnly
                        ? styles.thumbOnly
                        : styles.thumb
                    }
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
