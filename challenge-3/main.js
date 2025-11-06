const emailValidacao = document.getElementById("email");
const senhaValidacao = document.getElementById("senha")
const validacaoEmail = document.getElementById('emailValidacao');
const validacaoSenha = document.getElementById('senhaValidacao');

function isValidEmail (email) {
    const regex = /^[\s]+[\w.-]+@[\w.-]+\.\w+$/;
    return regex.test(email)
};

function isValidSenha (senha) {
    const tamanhoString = senha.length >= 8; 
    const letras = [a-zA-Z];
    const numeros = /\d/;
    return tamanhoString && letras && numeros
};

validacaoEmail.addEventListener("input", () => {
    if (isValidEmail(emailValidacao.value)) {
        emailValidacao.classList.add('valid');
        emailValidacao.classList.remove('invalid');
        msg.textContent = "Email valido";
        msg.style.color = "green";
    } else {
        emailValidacao.classList.add('invalid');
        emailValidacao.classList.remove('valid');
        msg.textContent = "Email invalido";
        msg.style.color = "red";
    }

});

validacaoSenha.addEventListener("input", () => {
    if (isValidEmail(emailValidacao.value)) {
        emailValidacao.classList.add('valid');
        emailValidacao.classList.remove('invalid');
        senhaMsg.textContent = "Senha forte";
        senhaMsg.style.color = "green";
    } else {
        emailValidacao.classList.add('invalid');
        emailValidacao.classList.remove('valid');
        senhaMsg.textContent = "Senha fraca";
        senhaMsg.style.color = "red";
    }
});