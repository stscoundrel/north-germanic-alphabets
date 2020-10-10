// Case variations.
const LOWER_CASE = ['a', 'á', 'b', 'd', 'ð', 'e', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'y', 'ý', 'æ', 'ø']
const UPPER_CASE = ['A', 'Á', 'B', 'D', 'Ð', 'E', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'P', 'R', 'S', 'T', 'U', 'Ú', 'V', 'Y', 'Ý', 'Æ', 'Ø']

// Combined alphabet.
const ALPHABET = [...LOWER_CASE, ...UPPER_CASE]

module.exports = {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
}
