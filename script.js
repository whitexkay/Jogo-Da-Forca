const frutas1 = ["manga", "amora", "cacau", "pequi", "limao", "jambo"];
let palavrasecreta;

function Sortear() {
    let lista;
    lista = frutas1;

    document.getElementById('lista').innerHTML = lista;
    palavrasecreta = lista[Math.floor(Math.random() * lista.length)];
    const cafePergunta = [];
    while (lista.length) {
        const index = palavrasecreta;
        const [option] = lista.splice(index, 1);
        cafePergunta.push(option);
    }
    document.getElementById('palavrasecreta').innerHTML = palavrasecreta;
    document.getElementById('tipo').innerHTML = "Frutas";
    document.getElementById('inicial').innerHTML = palavrasecreta.charAt(0);
}

function Confirmar() {
    let resposta = document.getElementById('resposta').value;
    if (resposta == palavrasecreta) {
        document.getElementById('resultado').innerHTML = "Verdadeiro";
    } else {
        document.getElementById('resultado').innerHTML = "Falso";
    }
}