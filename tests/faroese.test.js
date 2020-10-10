const { FAROESE } = require('../index.js')

const { ALPHABET, LOWER_CASE, UPPER_CASE } = FAROESE

describe('Faroese alphabet', () => {
  describe('Lowercase constants', () => {
    test('Alphabet is returned in array format', () => {
      expect(Array.isArray(LOWER_CASE)).toBeTruthy()
    })

    test('Alphabet contains 29 characters', () => {
      expect(LOWER_CASE.length).toBe(29)
    })

    test('Characters are returned in lowercase.', () => {
      LOWER_CASE.forEach((letter) => (
        expect(letter).toBe(letter.toLowerCase())
      ))
    })

    test('All characters also exist in main alphabet.', () => {
      LOWER_CASE.forEach((letter) => (
        expect(ALPHABET.includes(letter)).toBeTruthy()
      ))
    })
  })

  describe('Uppecase constants', () => {
    test('Alphabet is returned in array format', () => {
      expect(Array.isArray(UPPER_CASE)).toBeTruthy()
    })

    test('Alphabet contains 29 characters', () => {
      expect(UPPER_CASE.length).toBe(29)
    })

    test('Characters are returned in uppercase.', () => {
      UPPER_CASE.forEach((letter) => (
        expect(letter).toBe(letter.toUpperCase())
      ))
    })

    test('All characters also exist in main alphabet.', () => {
      UPPER_CASE.forEach((letter) => (
        expect(ALPHABET.includes(letter)).toBeTruthy()
      ))
    })
  })
})
