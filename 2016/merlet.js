var ballX = 50,
  ballY = 50,
  ballSpeedX = 5,
  ballSpeedY = 3;

var player1Score = 0,
  player2Score = 0;
const WINNING_SCORE = 3;

var showingWinScreen = false;

var paddle1Y,
  paddle2Y;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;

function setup() {
  createCanvas(640, 480);
  paddle2Y = height / 2 - PADDLE_HEIGHT / 2;
  textAlign(CENTER);
}

function draw() {
  background("#000000");
  moveEverything();
  drawEverything();
}

function moveEverything() {

  if (showingWinScreen) return;

  ballX += ballSpeedX;
  ballY += ballSpeedY;
  paddle1Y = mouseY - PADDLE_HEIGHT / 2;

  computerMovement();

  var damp = 0.2;

  if (ballX < 0) {
    if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
      ballSpeedX *= -1;
      var deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * damp;
    } else {
      player2Score++; // must be BEFORE ballReset()
      ballReset();
    }
  }

  if (ballX > width) {
    if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
      ballSpeedX *= -1;
      var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * damp;
    } else {
      player1Score++; // must be BEFORE ballReset()
      ballReset();
    }
  }

  if (ballY > height) {
    ballY = height;
    ballSpeedY *= -1;
  }

  if (ballY < 0) {
    ballY = 0;
    ballSpeedY *= -1;
  }
}

function computerMovement() {
  var paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;
  if (paddle2YCenter < ballY - PADDLE_HEIGHT / 3) {
    paddle2Y += 6;
  } else if (paddle2YCenter > ballY + PADDLE_HEIGHT / 3) {
    paddle2Y -= 6;
  }
}

function ballReset() {

  if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
    showingWinScreen = true;
  }

  ballSpeedX *= -1;
  ballX = width / 2;
  ballY = height / 2;

}

function drawEverything() {

  fill(0,255,0);
  noStroke();

  if (showingWinScreen) {
    textSize(20);
    if (player1Score >= WINNING_SCORE) {
      text("left player won!", 200, 200);
    } else if (player2Score >= WINNING_SCORE) {
      text("right player won!", width - 200, 200);
    }
    textSize(14);
    text("click to continue", width / 2, height - 200);
    return;
  }

  fill("#7FCAB1");

  for (var i = 0; i < height; i += 40) {
    rect(width / 2 - 1, i, 2, 20);
  }

  rect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT); // left paddle
  rect(width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT); // right paddle

  fill("FAFBDF");
  ellipse(ballX, ballY, 15, 15); // ball

  textSize(20);
  text(player1Score, 200, 100);
  text(player2Score, width - 200, 100);

}

function mouseReleased() {
  if (showingWinScreen) {
    player1Score = 0;
    player2Score = 0;
    showingWinScreen = false;
  }
}