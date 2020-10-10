const ELFDALIAN = require('./constants/elfdalian.js')
const FAROESE = require('./constants/faroese.js')
const ICELANDIC = require('./constants/icelandic.js')
const SWEDISH = require('./constants/swedish.js')
const DANISH_AND_NORWEGIAN = require('./constants/danish-and-norwegian.js')

// Export danish & norwegian separatelty.
const DANISH = DANISH_AND_NORWEGIAN
const NORWEGIAN = DANISH_AND_NORWEGIAN

module.exports = {
  DANISH,
  DANISH_AND_NORWEGIAN,
  ELFDALIAN,
  FAROESE,
  ICELANDIC,
  NORWEGIAN,
  SWEDISH,
}
