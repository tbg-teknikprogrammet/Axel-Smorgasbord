const p1Span = document.getElementById("player1");
const p2Span = document.getElementById("player2");
const p1Button = document.getElementById("p1");
const p2Button = document.getElementById("p2");
const inputScore = document.getElementById("scoreKeeper");
const playToSpan = document.getElementById("scoreToWin");
const resetButton = document.getElementsByTagName("button")[2];
let gameOver = false;
let p1ScoreCount = 0;
let p2ScoreCount = 0;

p1Button.addEventListener("click", () => {
  p1ScoreCount++;
  p1Span.textContent = p1ScoreCount;
  if (p1ScoreCount == inputScore.value) {
    alert("Player 1 Win!");
    p1Span.className += " green";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

p2Button.addEventListener("click", () => {
  p2ScoreCount++;
  p2Span.textContent = p2ScoreCount;
  if (p2ScoreCount == inputScore.value) {
    alert("Player 2 Win!");
    
    p2Span.className += " green";
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

inputScore.addEventListener("click", () => {
  playToSpan.textContent = inputScore.value;
});

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  gameOver = false;
  p1ScoreCount = 0;
  p2ScoreCount = 0;
  p1Span.innerHTML = 0;
  p2Span.innerHTML = 0;
  inputScore.value = 5;
  p1Span.classList.remove("green");
  p2Span.classList.remove("green");
  p1Button.disabled = false;
  p2Button.disabled = false;
}




var btnToggle = document.querySelector(".darkmode");

btnToggle.addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("toggle");
});

var loadTime = new Date()
var now = new Date()

var timeElement = document.getElementById('time')

function subtractDate(low, high) {
	var secs = 1000
	var min = secs * 60
	var hour = min * 60
	var day = hour * 24
	var miliSecs = Math.abs(high.getTime() - low.getTime())
	var days = Math.floor(miliSecs / day)
	miliSecs = miliSecs % day
	var hours = Math.floor(miliSecs / hour)
	miliSecs = miliSecs % hour
	var mins = Math.floor(miliSecs / min)
	miliSecs = miliSecs % min
	var sec = Math.floor(miliSecs / secs)
	return {
		day: days > 1 ? days + ' days' : days + ' day',
		hour: hours > 1 ? hours + ' hours' : hours + ' hour',
		min: mins > 1 ? mins + ' mins' : mins + ' min',
		sec: sec > 1 ? sec + ' seconds' : sec + ' second',
	}
}

function renderTime() {
    var sDate = subtractDate(loadTime, now)
    var str = sDate.day + ', ' + sDate.hour + ', ' + sDate.min + ', ' + sDate.sec
    timeElement.innerHTML = str
    now = new Date()
}

renderTime()

window.setInterval(() => {renderTime()}, 1000)

