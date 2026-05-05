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
