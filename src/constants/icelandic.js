// Case variations.
const LOWER_CASE = ['a', 'á', 'b', 'd', 'ð', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'x', 'y', 'ý', 'þ', 'æ', 'ö']
const UPPER_CASE = ['A', 'Á', 'B', 'D', 'Ð', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'P', 'R', 'S', 'T', 'U', 'Ú', 'V', 'X', 'Y', 'Ý', 'Þ', 'Æ', 'Ö']

// Combined alphabet.
const ALPHABET = [...LOWER_CASE, ...UPPER_CASE]

module.exports = {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
}
