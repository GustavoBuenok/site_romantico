function abrirSite() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
    document.getElementById('musica').play();
    calcularTempoJuntos();
}

const dataInicio = new Date("2024-08-04T00:00:00");

        function atualizarContador() {
            const agora = new Date();
            const tempo = agora - dataInicio; // Tempo em milissegundos

            const dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
            const horas = Math.floor((tempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((tempo % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tempo % (1000 * 60)) / 1000);

            document.getElementById("contador").innerHTML = 
                `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
        }

        setInterval(atualizarContador, 1000); // Atualiza o contador a cada segundo
        
let indiceAtual = 0;

function moverCarrossel(direcao) {
    const carrossel = document.querySelector(".carousel");
    const totalItens = document.querySelectorAll(".carousel-item").length;
    
    indiceAtual += direcao;
    if (indiceAtual < 0) {
        indiceAtual = totalItens - 1;
    } else if (indiceAtual >= totalItens) {
        indiceAtual = 0;
    }

    const deslocamento = -indiceAtual * 100; // Movendo 100% do container
    carrossel.style.transform = `translateX(${deslocamento}%)`;
}
