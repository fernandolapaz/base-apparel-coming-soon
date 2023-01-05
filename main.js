const form = document.querySelector('form')
const email = document.querySelector('input')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkInput()
})

function checkInput() {
    const emailValue = email.value.trim()

    if (emailValue === '') {
        isInvalid(email, 'Please introduce an email address')
    } else if (!isEmail(emailValue)) {
        isInvalid(email, 'Please provide a valid email')
    } else {
        isValid(email, "THANK YOU! We'll keep you updated.")
    }
}

function isInvalid(input, message) {
    const box = input.parentElement
    const small = box.querySelector('small')
    box.className = 'box error'
    small.textContent = message
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

function isValid(input, message) {
    const box = input.parentElement
    const small = box.querySelector('small')
    box.className = 'box success'
    small.textContent = message
}

