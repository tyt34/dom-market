import { makeAutoObservable } from 'mobx'

class SettingsStore {
  isShow: boolean = false

  backgroundImage: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setIsShow = (value: boolean) => {
    this.isShow = value
  }

  setBackgroundImage = (value: string) => {
    this.backgroundImage = value
  }

  setDefaultBackground = () => {
    this.backgroundImage = ''
  }
}

export const settingsStore = new SettingsStore()
