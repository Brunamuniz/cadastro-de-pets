
const appearsAnimal = document.getElementById("#formulárioDeCadastro");

function registrarPet() {

    const nomePet = document.getElementById("nomePet").value;
    const idadePet = document.getElementById("idadePet").value;


    if (nomePet && idadePet) {
        const senhaPet = `pet_${Date.now()}`;
        const dadosPet = `Nome: ${nomePet}, Idade: ${idadePet}`;

        localStorage.setItem(senhaPet, `${dadosPet}`);

        document.getElementById("nomePet").value = "";
        document.getElementById("idadePet").value = "";

        window.location = "Salinha.html";
    }
}

const aparece = document.querySelector ("#resultado");

function carregarPet () {
    aparece.innerHTML = "";

    for (let chave in localStorage) {
        if (chave.startsWith("pet_")) {
            const dadosPet = localStorage.getItem(chave);
            const dadosPetArray = dadosPet.split(",");

            const nomePet = dadosPetArray[0].split(":")[1];
            const idadePet = dadosPetArray[1].split(":")[1];

            const carregar = `<div class="animal">
                <span>Nome: ${nomePet}</span>
                <span>Idade: ${idadePet}</span>
                <button class="remover" data-chave="${chave}" onclick="removerPet(event)">Remover</button>
            </div>`;
            aparece.innerHTML += carregar
        }
    }
}

function removerPet (event) {
    const chave = event.target.getAttribute("data-chave");
    localStorage.removeItem(chave);

    carregarPet();
}