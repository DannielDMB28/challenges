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
    const texto = input.value.trim()

    if(texto === "") {
        alert("Digite um textro");
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = texto;

    li.addEventListener("click", () => {
        li.classList.toggle("done");
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("remove-btn");
    });

    botaoRemover.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
        atualizarContador();
    });

    li.appendChild(botaoRemover);

    lista.appendChild(li);

    input.value = "";

    atualizarContador();

    btnAdicionar.addEventListener("click", adicionarTarefa);

    eventoinput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            adicionarTarefa();
        }
    });
};