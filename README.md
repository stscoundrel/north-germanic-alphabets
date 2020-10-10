# North Germanic Alphabets

North Germanic (modern) alphabet constants for JS. Danish, Faroese, Elfdalian, Icelandic, Norwegian and Swedish.

### Motivation

While all north germanic languages use very similar set of sounds, they tend to use different letters to write them. For example Ø vs Ö, Æ vs Ä and the question of more medieval letters like Ð and þ. Simply put, I'd rather not copy-paste and format these any more.   


### Install

`yarn add north-germanic-alphabets`

### Usage

The module offers three array exports per language: lower case, upper case and combination of both.


```javascript
const {
  DANISH_AND_NORWEGIAN,
  ELFDALIAN,
  FAROESE,
  ICELANDIC,
  SWEDISH,
} = require('north-germanic-alphabets')

const { LOWER_CASE, UPPER_CASE, ALPHABET } = ICELANDIC

console.log(LOWER_CASE)
// ['a', 'á', 'b', 'd', 'ð', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'x', 'y', 'ý', 'þ', 'æ', 'ö']

console.log(UPPER_CASE)
// ['A', 'Á', 'B', 'D', 'Ð', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'P', 'R', 'S', 'T', 'U', 'Ú', 'V', 'X', 'Y', 'Ý', 'Þ', 'Æ', 'Ö']


console.log(ALPHABET) // combined upper & lower case.

```

As Danish and Norwegian share the same alphabet, they are shipped both as common and separate imports.

```javascript
const {
  DANISH_AND_NORWEGIAN,
  DANISH,
  NORWEGIAN
} = require('north-germanic-alphabets')

// They are all the same thing. Up to your preference which to import.

NORWEGIAN.LOWER_CASE.forEach(letter => console.log(letter))

```
