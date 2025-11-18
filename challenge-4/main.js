const input = document.getElementById('inputTarefa');
const btn = document.getElementById('btnAdicionar');
const lista = document.getElementById('lista');
const contador = document.getElementById('contador');

function atualizarContador() {
    const pendentes = document.querySelectorAll("li.done").length;
    const concluidas = document.querySelectorAll("li:not(.done)").length;
    contador.textContent(`${pendentes} Pendentes / ${concluidas} Concluidas`);

};

function adicionarTarefa() {
    const texto = input.ariaValueMax.trim()

    if(texto === "") {
        alert("Digite um textro");
        return;
    }


}