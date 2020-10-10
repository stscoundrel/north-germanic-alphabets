const { DANISH_AND_NORWEGIAN, DANISH, NORWEGIAN } = require('../index.js')

const { ALPHABET, LOWER_CASE, UPPER_CASE } = DANISH_AND_NORWEGIAN

describe('Danish & Norwegian alphabet', () => {
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

  describe('Individual exports', () => {
    test('Danish export matches norwegian export', () => {
      // It feels wrong to type this out. Sorry Norwegians.
      expect(DANISH).toEqual(NORWEGIAN)
    })
  })
})
