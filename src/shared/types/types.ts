export type Option = {
  value: string
  label: string
  // id: string
}

export type OptionBoolean = {
  value: boolean
  label: string
  // id: string
}

export type OptionImage = {
  value: string
  label: string
  image: string
}

export type OptionsCheckbox = [Option, Option]
