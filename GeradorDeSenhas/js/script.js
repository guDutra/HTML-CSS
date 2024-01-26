const generatedPasswordElement = document.getElementById('generated-password');
const ShowGeneratorBtn = document.getElementById('generate-password');
const CreatePasswordBtn = document.getElementById('generated-passwordBtn');
const OptionsPasswordContainer = document.getElementById('generate-options');
const lengthInput = document.getElementById('length');
const letterInput = document.getElementById('letters');
const numberInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const CopyPasswordBtn = document.getElementById('copy-password');


function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
    return Math.floor(Math.random() * 10).toString();
}

function getSymbol() {
    const symbols = "()[]{}=<>/,.!@#$&%*+-";

    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatedPassword = (getLowerCase, getUpperCase, getNumber, getSymbol) => {
    let password = "";
    const passwordLength = lengthInput.value;

    const generators = [];
    //if statemens
    letterInput.checked && generators.push(getLowerCase, getUpperCase);
    numberInput.checked && generators.push(getNumber);
    symbolsInput.checked && generators.push(getSymbol);
    ///
    for (let i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        })
    }
    password = password.slice(0, -2)
    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector('h4').innerHTML = password;

}
ShowGeneratorBtn.addEventListener('click', () => {
    OptionsPasswordContainer.classList.toggle('hide');

})

CreatePasswordBtn.addEventListener('click', () => {
    generatedPassword(getLowerCase, getUpperCase, getNumber, getSymbol)
})

CopyPasswordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const password = generatedPasswordElement.querySelector('h4').innerText;
    navigator.clipboard.writeText(password).then(() => {
        CopyPasswordBtn.innerText = "Senha copiada com sucesso";
        setTimeout(() => {
            CopyPasswordBtn.innerText = "Copiar Senha";
        }, 10000);
    }).catch(error => {
        alert('Erro ao copiar senha');
        console.log(error);
    });
})
