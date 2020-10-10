// Case variations.
const LOWER_CASE = ['a', 'ą', 'b', 'd', 'ð', 'e', 'ę', 'f', 'g', 'h', 'i', 'į', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'ų', 'v', 'w', 'y', 'y̨', 'å', 'ą̊', 'ä', 'ö']
const UPPER_CASE = ['A', 'Ą', 'B', 'D', 'Ð', 'E', 'Ę', 'F', 'G', 'H', 'I', 'Į', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'Ų', 'V', 'W', 'Y', 'Y̨', 'Å', 'Ą̊', 'Ä', 'Ö']

// Combined alphabet.
const ALPHABET = [...LOWER_CASE, ...UPPER_CASE]

module.exports = {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
}
