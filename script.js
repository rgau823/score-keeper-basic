const resetButton = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
};
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
};

let winningScore = parseInt(playTo.value);
let gameOver = false;

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score++;
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
});

resetButton.addEventListener("click", function () {
    reset();
});

playTo.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

const reset = () => {
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove("winner", "loser");
        p.button.disabled = false;
    }
};
