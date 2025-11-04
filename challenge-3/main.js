const emailValidacao = document.getElementById("email");
const senhaValidacao = document.getElementById("senha")

function isValidEmail (email) {
    const regex = /^[\s]+[\w.-]+@[\w.-]+\.\w+$/;
    return regex.test(email)
};

function isValidSenha (senha) {
    const senhaValidacao = senha.length // errado, concerte

};