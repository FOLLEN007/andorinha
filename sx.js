document.addEventListener('DOMContentLoaded', function () {
    var botaoSom = document.getElementById('somButton');
    var som = new Audio('cSnapInsta.io - O Som da Andorinha _ Som Emitido pelas Andorinhas _ Som das Andorinhas _ Som de Andorinha 🎶 (128 kbps).mp3'); // Substitua pelo caminho do seu arquivo de som

    botaoSom.addEventListener('click', function () {
        if (som.paused) {
            som.play();
            botaoSom.innerHTML = 'Pausar Som';
        } else {
            som.pause();
            som.currentTime = 0;
            botaoSom.innerHTML = 'Clique para Tocar Som';
        }
    });
});
