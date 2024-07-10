let myScore = 0;
let opponentScore = 0;

function playDices() {
    const { myPontuation, opponentPontuation } = rollDices();
    let roundResult = '';
    const gameResult = $('.game-result');
    const myScoreboard = $('#my-score');
    const opponentScoreboard = $('#opponent-score');

    if (myPontuation > opponentPontuation) {
        myScore++;
        roundResult = 'WIN!'
        myScoreboard.text(myScore);
        $('.current-score').css('color', 'green');
    } else if (opponentPontuation > myPontuation) {
        roundResult = 'LOSE!'
        opponentScore++;
        opponentScoreboard.text(opponentScore);
        $('.current-score').css('color', 'red');
    } else {
        roundResult = 'DRAW!'
    };

    updateColor(myScore, opponentScore);

    $('.current-score').text(roundResult);
    console.log(`Meu: ${myScore}\nOponente: ${opponentScore}`);

    myScore == 10 ? (resetScore(myScoreboard, opponentScoreboard), gameResult.text('Game finished, you won!')) : '';
    opponentScore == 10 ? (resetScore(myScoreboard, opponentScoreboard), gameResult.text('Game finished, you lose!')) : '';
}

function rollDices() {
    const dicesArr = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png'];
    const newDiceOne = Math.floor(Math.random() * 5);
    const newDiceTwo = Math.floor(Math.random() * 5);
    const score = [newDiceOne, newDiceTwo];
    $('#my-dice').attr("src", "public/" + dicesArr[newDiceOne]);
    $('#enemy-dice').attr("src", "public/" + dicesArr[newDiceTwo]);

    return values = {
        myPontuation: score[0],
        opponentPontuation: score[1]
    };
}

function resetScore(myScoreboard, opponentScoreboard) {
    myScore = 0;
    opponentScore = 0;

    myScoreboard.text(myScore);
    opponentScoreboard.text(opponentScore);
    $('.current-score').text('TO PLAY AGAIN, JUST PRESS THE BUTTON!');
}

function updateColor(sOne, sTwo) {
    const myScoreboard = $('#my-score');
    const opponentScoreboard = $('#opponent-score');

    const winnerStyle = {
        color: 'green',
        fontWeight: 700
    };

    const loserStyle = {
        color: 'red',
        fontWeight: 400
    };

    const drawStyle = {
        color: 'black',
        fontWeight: 400
    };

    if (sOne > sTwo) {
        myScoreboard.css(winnerStyle);
        opponentScoreboard.css(loserStyle)
    } else if (sOne < sTwo) {
        myScoreboard.css(loserStyle);
        opponentScoreboard.css(winnerStyle)
    } else {
        myScoreboard.css(drawStyle);
        opponentScoreboard.css(drawStyle);
    }
}