import { makeAutoObservable } from 'mobx'

class ApartmentsStore {
  /** true - список квартир отображается */
  isShowList: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  // важно правильно передавать this
  changeIsShowList = (value: boolean) => {
    this.isShowList = value
  }
}

export const apartmentsStore = new ApartmentsStore()
