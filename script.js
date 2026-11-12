const nomeDela = "Nicole"; 
const mensagem = `Oi, ${nomeDela}. Fiz esse cantinho aqui na internet só para você. Desde que você entrou na minha vida, tudo ganhou mais cor e mais sentido. Eu amo o seu sorriso, o seu jeito de ver o mundo e a paz que eu sinto quando estou do seu lado. Obrigado por ser minha melhor companhia todos os dias. Eu te amo muito, hoje e sempre!`;


let index = 0;
const velocidade = 45; 

function abrirCarta() {
    document.getElementById('btn-abrir').style.display = 'none';
    document.getElementById('titulo').innerText = `Para ${nomeDela} 💖`;
    document.getElementById('carta-texto').style.display = 'block';
    digitarTexto();
}

function digitarTexto() {
    if (index < mensagem.length) {
        document.getElementById('texto-digitado').innerHTML += mensagem.charAt(index);
        index++;
        setTimeout(digitarTexto, velocidade);
    } else {
        document.getElementById('cursor').style.display = 'none';
        document.getElementById('assinatura').style.display = 'block';
    }
}

// Criar corações subindo no fundo
function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(criarCoracao, 400);
