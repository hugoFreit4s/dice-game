function playDices() {
    const { myScore, opponentScore } = rollDices();
    let currentScore = '';
    
    if (myScore > opponentScore) {
        currentScore = 'WIN!'
    } else if (opponentScore > myScore) {
        currentScore = 'LOSE!'
    } else {
        currentScore = 'DRAW!'
    };
    
    $('.current-score').text(currentScore);
}

function rollDices() {
    const dicesArr = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png'];
    const newDiceOne = Math.floor(Math.random() * 5);
    const newDiceTwo = Math.floor(Math.random() * 5);
    const score = [newDiceOne, newDiceTwo];
    $('#my-dice').attr("src", "public/" + dicesArr[newDiceOne]);
    $('#enemy-dice').attr("src", "public/" + dicesArr[newDiceTwo]);

    return values = {
        myScore: score[0],
        opponentScore: score[1]
    };
}

function resetScore() {

}