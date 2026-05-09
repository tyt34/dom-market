export type Option = {
  /** используется как id */
  value: string
  label: string
}

export type OptionBoolean = {
  value: boolean
  label: string
}

export type OptionImage = {
  value: string
  label: string
  image: string
}

export type OptionsCheckbox = [Option, Option]
