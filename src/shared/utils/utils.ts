/**
 * Возвращает случайное целое число в заданном диапазоне включительно.
 *
 * @param min - минимальное значение диапазона
 * @param max - максимальное значение диапазона
 * @returns случайное целое число от min до max (включительно)
 */
export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Форматирует число, добавляя пробелы как разделители тысяч.
 *
 * Пример:
 * 1000000 → "1 000 000"
 *
 * @param value - число для форматирования
 * @returns строка с разделением тысяч пробелами
 */
export const formatNumber = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

/**
 * Преобразует файл (File) в строку формата Base64.
 *
 * Используется для загрузки изображений и последующего хранения
 * (например, в IndexedDB или состоянии приложения).
 *
 * @param file - файл, который нужно преобразовать
 * @returns Promise со строкой Base64
 *
 * @example
 * const base64 = await fileToBase64(file)
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      resolve(reader.result as string)
    }

    reader.onerror = reject
  })
}
