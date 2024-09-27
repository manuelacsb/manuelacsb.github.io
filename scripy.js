const colors = ['Red', 'Green', 'Blue', 'Yellow'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const deck = [];
const playerHand = [];

function createDeck() {
    colors.forEach(color => {
        numbers.forEach(number => {
            deck.push({ color, number });
        });
    });
}

function drawCard() {
    if (deck.length === 0) {
        alert('Sem cartas no baralho!');
        return;
    }
    const cardIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(cardIndex, 1)[0];
    playerHand.push(card);
    updatePlayerHand();
}

function updatePlayerHand() {
    const playerHandDiv = document.getElementById('player-hand');
    playerHandDiv.innerHTML = '';
    playerHand.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.textContent = `${card.color} ${card.number}`;
        playerHandDiv.appendChild(cardDiv);
    });
}

document.getElementById('draw-card').addEventListener('click', drawCard);

// Inicializa o baralho e a mão do jogador
createDeck();