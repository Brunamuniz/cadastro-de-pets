const form = document.getElementById("cadastroForm");

cadastroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeInput = document.getElementById("nome");
    const idadeInput = document.getElementById("idade");
    const nome = nomeInput.value;
    const idade = idadeInput.value;

    console.log(nome);

    alert('Cadastrado com sucesso!');

    const resultado = document.querySelector('#resultado');
    resultado.insertAdjacentHTML('afterbegin', `<li>
        <span contenteditable>${nome}</span>
        <span contenteditable>${idade}</span>
        <button class="btn-delete">x</button>
    </li>`);

    form.reset();

    document.querySelector('#resultado').addEventListener('click', function (e) {
        const elementoAtual = e.target;
        const botaoDeletar = e.target.classList.contains('btn-delete');
        if(botaoDeletar){
            elementoAtual.parentNode.remove();
        }
    })
});


