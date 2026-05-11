import { indexdb } from '@shared/lib/indexdb'
import { settingsStore } from '@widgets/Settings/settingsStore'

export const initApp = async () => {
  const { setBackgroundImage } = settingsStore

  const background = await indexdb.getBackground()

  if (background) {
    setBackgroundImage(background)
  }
}
