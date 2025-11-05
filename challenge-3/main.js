const emailValidacao = document.getElementById("email");
const senhaValidacao = document.getElementById("senha")

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