const form = document.querySelector('form')

let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let email = document.querySelector('#email')
let message = document.querySelector('#message')
let queryType = document.querySelector('input[name="queryType"]:checked')
let consent = document.querySelector('input[name="consent"]:checked')      

const elementsArray = [firstName, lastName, email, message]

form.addEventListener('submit', function(ev) {
    validateForm(ev)
})

document.querySelectorAll(".radioOptions div").forEach(div => {
    div.addEventListener("click", () => {
        let radio = div.querySelector("input[type='radio']");
        radio.checked = true;
    })
})

document.querySelector('#consentDiv div').addEventListener("click", () => {
    let checkbox = document.querySelector('#consent');
    checkbox.checked = !checkbox.checked;    
})

document.querySelector('#consent').addEventListener("click", () => {
    let checkbox = document.querySelector('#consent');
    checkbox.checked = !checkbox.checked;    
})

function validateForm(ev) {
    ev.preventDefault()

    validateRadio()
    validateCheckbox()

    elementsArray.forEach(validateEmptyInput)
    validateEmail()
}

function validateEmptyInput(inputElement) {
    let errorElement = document.querySelector(`#${inputElement.id}-error`)

    if (!inputElement.value.trim()) {
        errorElement.classList.remove('none')
        inputElement.classList.add('error-border')
        inputElement.focus()
    } else {
        inputElement.classList.remove('error-border')
        inputElement.classList.add('validated-border')
        errorElement.classList.add('none')
    }
}

function validateRadio() {
    if (!queryType) {
        document.querySelector('#queryType-error').classList.remove('none')
        document.querySelector('input[type="radio"]').focus()
    } else {
        document.querySelector('#queryType-error').classList.add('none')
    }
}

function validateCheckbox() {
    if (!consent) {
        document.querySelector('#consent-error').classList.remove('none')
    } else {
        document.querySelector('#consent-error').classList.add('none')
    }
}

function validateEmail() {
    let errorElement = document.querySelector(`#${email.id}-error`)

    if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        errorElement.classList.remove('none')
        email.classList.add('error-border')
        email.focus()
    } else {
        email.classList.remove('error-border')
        email.classList.add('validated-border')
        errorElement.classList.add('none')
    }
}

