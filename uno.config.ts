/* eslint-disable no-useless-escape */
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [],
  rules: [
    // height / width
    [
      /^h-\[(\d+)\]$/,
      ([, d]) => {
        return { height: `${d}px` }
      },
    ],
    [
      /^w-\[(\d+)\]$/,
      ([, d]) => {
        return { width: `${d}px` }
      },
    ],
    [
      /^w-\[(\d+)%\]$/,
      ([, d]) => {
        return { width: `${d}%` }
      },
    ],
    [
      /^h-\[(\d+)%\]$/,
      ([, d]) => {
        return { height: `${d}%` }
      },
    ],

    // padding
    [
      /^p-\[(\d+)\]$/,
      ([, d]) => {
        return { padding: `${d}px` }
      },
    ],
    [
      /^pt-\[(\d+)\]$/,
      ([, d]) => {
        return { 'padding-top': `${d}px` }
      },
    ],
    [
      /^pr-\[(\d+)\]$/,
      ([, d]) => {
        return { 'padding-right': `${d}px` }
      },
    ],
    [
      /^pb-\[(\d+)\]$/,
      ([, d]) => {
        return { 'padding-bottom': `${d}px` }
      },
    ],
    [
      /^pl-\[(\d+)\]$/,
      ([, d]) => {
        return { 'padding-left': `${d}px` }
      },
    ],
    [
      /^px-\[(\d+)\]$/,
      ([, d]) => {
        return {
          'padding-left': `${d}px`,
          'padding-right': `${d}px`,
        }
      },
    ],
    [
      /^py-\[(\d+)\]$/,
      ([, d]) => {
        return {
          'padding-top': `${d}px`,
          'padding-bottom': `${d}px`,
        }
      },
    ],

    // gap
    [
      /^g-\[(\d+)\]$/,
      ([, d]) => {
        return { gap: `${d}px` }
      },
    ],

    // margin
    [
      /^m-\[(\-?\d+)\]$/,
      ([, d]) => {
        return { margin: `${d}px` }
      },
    ],
    [
      /^mt-\[(\-?\d+)\]$/,
      ([, d]) => {
        return { 'margin-top': `${d}px` }
      },
    ],
    [
      /^mr-\[(\-?\d+)\]$/,
      ([, d]) => {
        return { 'margin-right': `${d}px` }
      },
    ],
    [
      /^mb-\[(\-?\d+)\]$/,
      ([, d]) => {
        return { 'margin-bottom': `${d}px` }
      },
    ],
    [
      /^ml-\[(\-?\d+)\]$/,
      ([, d]) => {
        return { 'margin-left': `${d}px` }
      },
    ],
    [
      /^mx-\[(\-?\d+)\]$/,
      ([, d]) => {
        return {
          'margin-left': `${d}px`,
          'margin-right': `${d}px`,
        }
      },
    ],
    [
      /^my-\[(\-?\d+)\]$/,
      ([, d]) => {
        return {
          'margin-top': `${d}px`,
          'margin-bottom': `${d}px`,
        }
      },
    ],
    [
      /^br-\[(\d+)\]$/,
      ([, d]) => {
        return { 'border-radius': `${d}px` }
      },
    ],
  ],
})
