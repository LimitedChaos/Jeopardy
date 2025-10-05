let gameData;
let currentRound = 0;
let revealedClues = [];

// Load game data from JSON file
fetch('https://limitedchaos.github.io/Questions/Gilmore-Questions')
    .then(response => response.json())
    .then(data => {
        gameData = data;
        loadRound(0);
    })
    .catch(error => {
        console.error('Error loading game data:', error);
        document.body.innerHTML = '<h1>Error loading game data. Please make sure gameData.json is in the same directory.</h1>';
    });

function loadRound(roundIndex) {
    currentRound = roundIndex;
    revealedClues = [];
    const round = gameData.rounds[roundIndex];
    document.getElementById('roundIndicator').textContent = round.name;
    document.getElementById('gameBoard').style.display = 'grid';
    document.getElementById('finalJeopardy').style.display = 'none';
    
    const board = document.getElementById('gameBoard');
    board.innerHTML = '';
    
    round.categories.forEach((category, catIndex) => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category';
        catDiv.textContent = category.name;
        board.appendChild(catDiv);
    });
    
    for (let i = 0; i < 5; i++) {
        round.categories.forEach((category, catIndex) => {
            const clueDiv = document.createElement('div');
            clueDiv.className = 'clue';
            clueDiv.textContent = '$' + category.clues[i].value;
            clueDiv.onclick = () => showClue(catIndex, i);
            board.appendChild(clueDiv);
        });
    }
}

function showClue(catIndex, clueIndex) {
    const key = `${currentRound}-${catIndex}-${clueIndex}`;
    if (revealedClues.includes(key)) return;
    
    const clue = gameData.rounds[currentRound].categories[catIndex].clues[clueIndex];
    document.getElementById('modalQuestion').textContent = clue.question;
    document.getElementById('modalAnswer').textContent = clue.answer;
    document.getElementById('modalAnswer').style.display = 'none';
    document.getElementById('modal').style.display = 'flex';
    
    window.currentClueKey = key;
}

function showAnswer() {
    document.getElementById('modalAnswer').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    revealedClues.push(window.currentClueKey);
    
    const [round, cat, clue] = window.currentClueKey.split('-');
    const boardIndex = 6 + parseInt(cat) + (parseInt(clue) * 6);
    const clueElements = document.querySelectorAll('.clue');
    if (clueElements[boardIndex]) {
        clueElements[boardIndex].classList.add('revealed');
    }
}

function showFinalJeopardy() {
    document.getElementById('gameBoard').style.display = 'none';
    document.getElementById('finalJeopardy').style.display = 'block';
    document.getElementById('finalCategory').textContent = 'Category: ' + gameData.finalJeopardy.category;
    document.getElementById('finalClue').textContent = gameData.finalJeopardy.clue;
    document.getElementById('finalAnswer').textContent = gameData.finalJeopardy.answer;
    document.getElementById('finalAnswer').style.display = 'none';
    document.getElementById('roundIndicator').textContent = 'Final Jeopardy';
}