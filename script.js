const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
                    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
                    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
                    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const genBtn = document.getElementById("generate-btn")
const passLen = document.getElementById("passwd-length")

genBtn.addEventListener('click', () => {
    const length = passLen.value
    if (length < 4 || length > 20) {
        alert("Password length must be between 4 and 20 characters.")
        return
    }
    const password1 = document.getElementById("password1")
    const password2 = document.getElementById("password2")

    password1.textContent = generatePassword(length)
    password2.textContent = generatePassword(length)

    password1.style.display = "inline"
    password2.style.display = "inline"
})

function generatePassword(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function copyPassword(password) {
    navigator.clipboard.writeText(password)
        .then(() => {
            const passwordElement = document.getElementById(`password${password === password1.textContent ? 1 : 2}`)
            passwordElement.textContent = "Copied!"
            setTimeout(() => {
                passwordElement.textContent = password
            }, 1000)
        })
        .catch(err => {
            console.error('Failed to copy: ', err)
        })
}