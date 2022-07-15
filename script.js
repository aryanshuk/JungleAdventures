function getFullScreenElement() {
    return document.fullscreenElement;
}

function toggleFullScreen() {
    if (getFullScreenElement()) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen().catch((err) => {
            console.log(err);
        })
    }
}


function initializeValues() {
    console.log("First Time Values initialized!!");
    board = document.getElementById("board");
    lives = document.getElementById("lives");
    currentlives = document.getElementById("currentLives");
    newGameButton = document.getElementById("newGameButton");
    currentScoreDiv = document.getElementById("currentScoreDiv");
    highScoreDiv = document.getElementById("highScoreDiv");
    dividerLine = document.getElementById("dividerLine");
    exitGameButton = document.getElementById("exitGameButton");
    startGameButton = document.getElementById("startGameButton");
    quitGameButton = document.getElementById("quitGameButton");
    gameInstructionButton = document.getElementById("gameInstructionButton");
    gameInstructionDiv = document.getElementById("gameInstructionDiv");
    closeInstructionButton = document.getElementById("closeInstructionButton");
    heading = document.getElementById("heading");
    fullScreenInstruction = document.getElementById("fullScreenInstruction");
    scoreInfoSpan = document.getElementById("scoreInfoSpan");
    alertBox = document.getElementById("alertBox");

    heart = document.getElementById("heart");
    skull = document.getElementById("skull");

    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;
    minTopBoard = Math.floor(0.1 * height);
    maxTopBoard = Math.floor(0.85 * height);
    minLeftBoard = Math.floor(0.01 * width);
    maxLeftBoard = Math.floor(0.75 * width);
    minTopLives = Math.floor(0.10 * height);
    minTopNewGameButton = Math.floor(0.6 * height);
    minTopYourScore = Math.floor(0.1 * height);
    minTopHighScore = Math.floor(0.3 * height);
    minTopDividerLine = Math.floor(0.1 * height);

    highScoreSpan = document.getElementById("highScoreSpan");
    currentScoreSpan = document.getElementById("currentScoreSpan");

    noOfObjects = 20;
    noOfLives = 5;
    highScoreKey = "highScore"; // For localStorage

    objectList = [];
    lifeArray = [];

    for (let i = 0; i < noOfObjects; i++) {
        objectList[i] = document.getElementById("object" + i).innerHTML;
    }
}


function homePage() {
    board.style.display = "none";
    lives.style.display = "none";
    currentScoreDiv.style.display = "none";
    highScoreDiv.style.display = "none";
    newGameButton.style.display = "none";
    exitGameButton.style.display = "none";
    heading.style.display = "none";
    dividerLine.style.display = "none";

    startGameButton.style.display = "block";
    gameInstructionButton.style.display = "block";
    fullScreenInstruction.style.display = "block";
    console.log("Home Page Loaded!!");

}
function showInstructions() {
    startGameButton.style.display = "none";
    gameInstructionButton.style.display = "none";
    fullScreenInstruction.style.display = "none";
    gameInstructionDiv.style.display = "block";
    closeInstructionButton.style.display = "block";
}
function hideInstructions() {
    closeInstructionButton.style.display = "none";
    gameInstructionDiv.style.display = "none";
    fullScreenInstruction.style.display = "block";
    startGameButton.style.display = "block";
    gameInstructionButton.style.display = "block";
}
function preGameStartAnimation() {
    console.log("Pre-Game Loading Animation Values Initialized!!");
    xBoard = -1200;
    yYourScore = -750;
    yHighScore = -500;
    yLives = -1000;
    yButton = -250;
    yDividerLine = -1000;

    board.style.left = xBoard;
    lives.style.top = yLives;
    newGameButton.style.top = yButton;
    currentScoreDiv.style.top = yYourScore;
    highScoreDiv.style.top = yHighScore;
    dividerLine.style.top = yDividerLine;

    startGameButton.style.display = "none";
    gameInstructionButton.style.display = "none";
    fullScreenInstruction.style.display = "none";
    board.style.display = "block";
    lives.style.display = "block";
    newGameButton.style.display = "block";
    currentScoreDiv.style.display = "block";
    highScoreDiv.style.display = "block";
    dividerLine.style.display = "block";

    resetGame();
}

function gameStartAnimation() {
    console.log("Game Starting Animation Started!!");
    board.style.left = xBoard;
    lives.style.top = yLives;
    newGameButton.style.top = yButton;
    currentScoreDiv.style.top = yYourScore;
    highScoreDiv.style.top = yHighScore;
    dividerLine.style.top = yDividerLine;



    if (xBoard <= minLeftBoard || yLives <= minTopLives || yButton <= minTopNewGameButton || yYourScore <= minTopYourScore || yHighScore <= minTopHighScore || yDividerLine <= minTopDividerLine) {
        if (xBoard <= minLeftBoard) {
            xBoard++;
        }
        if (yLives <= minTopLives) {
            yLives++;
        }
        if (yButton <= minTopNewGameButton) {
            yButton++;
        }
        if (yYourScore <= minTopYourScore) {
            yYourScore++;
        }
        if (yHighScore <= minTopHighScore) {
            yHighScore++;
        }
        if (yDividerLine <= minTopDividerLine) {
            yDividerLine++;
        }

        timeoutReference = setTimeout(gameStartAnimation, 1);
    }
    else {
        clearTimeout(timeoutReference);
        exitGameButton.style.display = "block";
        heading.style.display = "block";
        console.log("Game Starting Animation Completed!!");
    }
}
function gameExitAnimation() {
    heading.style.display = "none";
    exitGameButton.style.display = "none";
    console.log("Game Exit Animation Started!!");

    board.style.left = xBoard;
    lives.style.top = yLives;
    newGameButton.style.top = yButton;
    currentScoreDiv.style.top = yYourScore;
    highScoreDiv.style.top = yHighScore;
    dividerLine.style.top = yDividerLine;


    if (xBoard >= -1200 || yLives >= -1000 || yButton >= -250 || yYourScore >= -750 || yHighScore >= -500 || yDividerLine >= -1000) {
        if (xBoard >= -1200) {
            xBoard--;
        }
        if (yLives >= -1000) {
            yLives--;
        }
        if (yButton >= -250) {
            yButton--;
        }
        if (yYourScore >= -750) {
            yYourScore--;
        }
        if (yHighScore >= -500) {
            yHighScore--;
        }
        if (yDividerLine >= -1000) {
            yDividerLine--;
        }

        timeoutReference = setTimeout(gameExitAnimation, 1);
    }
    else {
        clearTimeout(timeoutReference);
        console.log("Game Exit Animation Completed!!");
        homePage();
    }
}
function displayLives() {
    let lifeString = "";
    for (let i = 0; i < noOfLives; i++) {
        lifeString += lifeArray[i];
    }
    currentLives.innerHTML = lifeString;
    console.log("Current Lives Displayed!!");
}
function restoreAllLives() {
    console.log("All Lives Restored!!");
    availableLives = noOfLives;
    lifeArray = [];
    for (let i = 0; i < availableLives; i++) {
        lifeArray[i] = document.getElementById("heart").innerHTML;
    }
}
function decreaseLife() {
    if (!(randomNumber >= 12 && randomNumber <= 19)) {
        availableLives -= 1;
        lifeArray[availableLives] = document.getElementById("skull").innerHTML;
        console.log("1 Life Lost!!");
    }

}
function increaseLife() {
    console.log("1 Life Gained!!");
    if (availableLives <= noOfLives) {
        lifeArray[availableLives] = document.getElementById("heart").innerHTML;
        availableLives += 1;
    }
}
function resetGame() {
    console.log("Game Reset Done!!");
    currentScore = 0;
    currentScoreSpan.innerHTML = currentScore;
    firstObject = true;
    availableLives = 5;
    missed = false;
    newHighScore = false;
    restoreAllLives();
    displayLives();
    readHighScore();
}
function startGame() {
    console.log("Game Started!!");
    newGameButton.style.display = "none";
    exitGameButton.style.display = "none";
    quitGameButton.style.display = "block";
    alertBox.style.display = "none";

    exitGame = false;
    restoreAllLives();
    resetGame();

    Game();
}

function Game() {
    if (missed) {
        decreaseLife();
    }
    displayLives();

    if (firstObject) {
        firstObject = false;
    }
    else {
        randomObject.style.display = "none";
    }

    if (availableLives >= 1) {
        randomObjectGenerator();
    }
    else {
        finishGame();
    }

    objectPositionRandomizer();
    randomObject.style.display = "block";

    if (!exitGame) {
        timeoutReference = setTimeout(Game, 1500);
    }
    else {
        randomObject.style.display = "none";
    }
}

function randomObjectGenerator() {
    randomNumber = Math.floor(Math.random() * noOfObjects);
    if (randomNumber == noOfObjects) {
        randomNumber -= 1;
    }

    randomObject = "object" + randomNumber;

    randomObject = document.getElementById(randomObject);
    randomObject.style.display = "none";
    randomObject.innerHTML = objectList[randomNumber];

    missed = true;
}
function objectPositionRandomizer() {
    randomHeight = Math.floor(Math.random() * (maxTopBoard - minTopBoard)) + minTopBoard;
    randomWidth = Math.floor(Math.random() * (maxLeftBoard - minLeftBoard)) + minLeftBoard;

    if (randomHeight + 80 > maxTopBoard) {
        randomHeight -= (randomHeight + 80 - maxTopBoard) - 1;
    }
    if (randomHeight - 80 < minTopBoard) {
        randomHeight += (minTopBoard - (randomHeight - 80)) + 1;
    }
    if (randomWidth + 80 > maxLeftBoard) {
        randomWidth -= (randomWidth + 80 - maxLeftBoard - 1);
    }
    if (randomHeight - 80 < minTopBoard) {
        randomHeight += (minTopBoard - (randomHeight - 80)) + 1;
    }

    randomObject.style.top = randomHeight;
    randomObject.style.left = randomWidth;
}

function changeScore() {
    if (0 <= randomNumber && randomNumber <= 8) {
        currentScore += 10;
        randomObject.innerHTML = "+10";
        randomObject.style.color = "green";
    }
    else if (9 <= randomNumber && randomNumber <= 11) {
        currentScore += 5;
        randomObject.innerHTML = "+5";
        randomObject.style.color = "green";
    }
    else if (12 <= randomNumber && randomNumber <= 18) {
        currentScore -= 20;
        randomObject.innerHTML = "-20";
        randomObject.style.color = "red";
        // decreaseLife();
    }
    else if (randomNumber == 19) {
        currentScore += 20;
        randomObject.innerHTML = "+20";
        randomObject.style.color = "green";
        increaseLife();
    }
    currentScoreSpan.innerHTML = currentScore;
    missed = false;
}
function alertScore() {

    console.log("Displaying score ....")
    if (currentScore > highScore) {
        console.log("High Score");
        scoreInfoSpan.innerHTML = "New High Score : " + currentScore;
        document.getElementById("highScoreEmoji1").style.display = "block";
        document.getElementById("highScoreEmoji2").style.display = "block";
    }
    else {
        console.log("Low Score");
        scoreInfoSpan.innerHTML = "Your Score : " + currentScore;
        document.getElementById("noHighScoreEmoji1").style.display = "block";
        document.getElementById("noHighScoreEmoji2").style.display = "block";
    }
    alertBox.style.display = "block";
}

function closeScoreAlert() {
    alertBox.style.display = "none";

    document.getElementById("noHighScoreEmoji1").style.display = "none";
    document.getElementById("noHighScoreEmoji2").style.display = "none";
    document.getElementById("highScoreEmoji1").style.display = "none";
    document.getElementById("highScoreEmoji2").style.display = "none";
    console.log("Score Alert closed...");
}

function finishGame() {
    clearTimeout(timeoutReference);
    randomObject.style.display = "none";
    exitGame = true;

    alertScore();

    storeHighScore();
    readHighScore();


    console.log("Game Finished!!");
    resetGame();

    quitGameButton.style.display = "none";
    newGameButton.style.display = "block";
    exitGameButton.style.display = "block";
}


function readHighScore() {
    console.log("Reading highScore from localStorage !!");
    highScore = window.localStorage.getItem(highScoreKey);
    if (highScore == null) {
        console.log("highScore key : not found in localStorage. Initializing high");
        highScore = "0";
        window.localStorage.setItem(highScoreKey, JSON.stringify(highScore));
        console.log("highScore key initialized with value 0 in localStorage.");
    }
    highScoreSpan.innerHTML = highScore;
    console.log("highScoreSpan updated with value " + highScore + " from localStorage.");
}

function storeHighScore() {
    if (currentScore > highScore) {
        highScore = currentScore;
        window.localStorage.setItem(highScoreKey, JSON.stringify(highScore));
        console.log("New highScore : " + highScore + " -  Saved to localStorage successfully.");
    }
}