const DB_NAME = 'app-db'
const STORE = 'settings'
const KEY = 'background'

export const indexdb = {
  async saveBackground(value: string) {
    const request = indexedDB.open(DB_NAME, 1)

    request.onupgradeneeded = () => {
      const db = request.result

      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE)
      }
    }

    request.onsuccess = () => {
      const db = request.result
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).put(value, KEY)
    }
  },

  async getBackground(): Promise<string | null> {
    return new Promise((resolve) => {
      const request = indexedDB.open(DB_NAME, 1)

      request.onsuccess = () => {
        const db = request.result
        const tx = db.transaction(STORE, 'readonly')
        const req = tx.objectStore(STORE).get(KEY)

        req.onsuccess = () => resolve(req.result ?? null)
      }
    })
  },

  async clearBackground() {
    const request = indexedDB.open('app-db', 1)

    request.onsuccess = () => {
      const db = request.result
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).delete(KEY)
    }
  },
}
