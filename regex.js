//let re
re = /hello/ // = regex
re = /hello/i // i = case insensitive
re = /hello/g // Global search - ex: Look in a entire paragraph

//console.log(re)
console.log(re.source)

// exec()
const result = re.exec('hello world')
console.log(result) // => ["hello", index: 0, input: "hello world", groups: undefined]

// test() - returns true or false
const result = re.test('Hello')
console.log(result)

// match() - return result array or null
const str = 'Hello There'
const result = str.match(re)
console.log(result)

// search() - returns index of match, if not found returns -1
const str = 'Hello there'
const result = str.search(re)
console.log(result)

// replace() - return new string with some or all matches of a pattern
const string = 'Hello There'
const newString = string.replace(re, 'Hi')
console.log(newString)

// METACHARACTER SYMBOLS ========>
let re
// Literal Characters
re = /hello/
re = /hello/i

// Metacharacter symbols
re = /^h/i // Must Start with h
re = /world$/i // Must End with d or world
re = /^hello$/i // Must begin and end with
re = /^h.llo$/i //  Matches any ONE character
re = /h*llo/i //  Matches any character 0 or more times
re = /gra?e?y/i // Optional character
re = /gra?e?y\?/i // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i // Must be an a or e
re = /[GF]ray/i // Must be an G or F
re = /[^GF]ray/i // Match anything EXCEPT  G or F - ^ inside of [] = NOT
re = /[A-Z]ray/ // Match any uppercase letter
re = /[a-z]ray/ // Match any lowercase letter
re = /[A-Za-z]ray/ // Match any case letter
re = /[0-9]ray/ // Match any digit

// Braces {} - quantifiers
re = /Hel{2}o/i // Must occur exactly {m} amount of times
re = /Hel{2,4}o/ // Must occur between {from, to} amount of times
re = /Hel{2,}o/ // Must occur at least {m} times

// Parentheses () - grouping
re = /^([0-9]x){3}$/

// Shorthand Characters Classes
re = /\w/ // Word Character - alphanumeric or _
re = /\w+/ // + = one or more
re = /\W/ // Non Word Character - anything BUT a letter or _
re = /\d/ // Match any digit
re = /\d+/ // Match any digit 0 or more items
re = /\D/ // Match any non-digit
re = /\s/ // Match any whitespace char
re = /\S/ // Match non-whitespace char
re = /Hell\b/i // word boundary

// Assertions
re = /x(?=y)/i // Match x only if followed by y
re = /x(?!y)/i // Match x only if not followed by y

// String to match
const str = 'Insert a string to test'
const result = re.exec(str)
console.log(result)

// Log result
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`)
  } else {
    console.log(`${str} does not match ${re.source}`)
  }
}

reTest(re, str) // the last re will return: app.js:89 Insert a string to test does not match x(?!y)
