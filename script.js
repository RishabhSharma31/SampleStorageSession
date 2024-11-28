const localScoreElement = document.getElementById('local-score');
const sessionScoreElement = document.getElementById('session-score');
const incrementButton = document.getElementById('increment-button');

function loadScores() {
    const localScore = localStorage.getItem('localScore') || 0;
    localScoreElement.textContent = localScore;

    const sessionScore = sessionStorage.getItem('sessionScore') || 0;
    sessionScoreElement.textContent = sessionScore;
}

function incrementScores() {
    let localScore = parseInt(localScoreElement.textContent);
    let sessionScore = parseInt(sessionScoreElement.textContent);

    localScore += 1;
    sessionScore += 1;

    localStorage.setItem('localScore', localScore);

    sessionStorage.setItem('sessionScore', sessionScore);

    localScoreElement.textContent = localScore;
    sessionScoreElement.textContent = sessionScore;
}

incrementButton.addEventListener('click', incrementScores);

loadScores();
