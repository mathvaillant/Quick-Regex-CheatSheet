// Form bluer event Listeners
document.querySelector('#name').addEventListener('blur', validateName)
document.querySelector('#zip').addEventListener('blur', validateZipcode)
document.querySelector('#email').addEventListener('blur', validateEmail)
document.querySelector('#phone').addEventListener('blur', validatePhone)

// Validade name
function validateName(e) {
  const re = /^[A-Z][A-Za-z]\w+/
  const input = e.target.value
  const element = document.querySelector('#name')

  validadeREGEX(re, input, element)

  e.preventDefault()
}

// Validade ZipCode
function validateZipcode(e) {
  const re = /\d{4}[\-]\d{3}?/
  const input = e.target.value
  const element = document.querySelector('#zip')

  validadeREGEX(re, input, element)

  e.preventDefault()
}

// Validade Email address
function validateEmail(e) {
  const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  const input = e.target.value
  const element = document.querySelector('#email')

  validadeREGEX(re, input, element)

  e.preventDefault()
}

// Validade ZipCode
function validatePhone(e) {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{3}$/
  const input = e.target.value
  const element = document.querySelector('#phone')

  validadeREGEX(re, input, element)

  e.preventDefault()
}

// REGEX Validation function
function validadeREGEX(re, input, element) {
  if (!re.test(input)) {
    // Add input class is-invalid
    element.classList = 'form-control is-invalid'
  } else {
    // Remove input class is-invalid
    element.classList = 'form-control is-valid'
  }
}
