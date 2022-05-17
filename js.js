"use strict";

function HideColorBalls() {
  for (let r = 0; r < colorType.length; r++) {
    colorType[r].setAttribute("style", "display:none");
  }

  for (let rr = 0; rr < redType.length; rr++) {
    redType[rr].removeAttribute("style");
  }
}

function HideRedBalls() {
  for (let r = 0; r < colorType.length; r++) {
    colorType[r].removeAttribute("style");
  }

  for (let rr = 0; rr < redType.length; rr++) {
    redType[rr].setAttribute("style", "display:none");
  }
}

let firstScore = document.getElementById("firstscore");
let firstAggScore = document.getElementById("firstaggscore");
let secondScore = document.getElementById("secondscore");
let secondAggScore = document.getElementById("secondaggscore");
let toggleBreakButton = document.getElementById("togglebreakbutton");
let endFrameButton = document.getElementById("endframebutton");
let redBallLeft = document.getElementById("redballleft");
let leftArrow = document.getElementById("leftarrow");
let rightArrow = document.getElementById("rightarrow");
let pressed = document.querySelectorAll(".myballs");
let colorType = document.querySelectorAll("[value$=c]");
let redType = document.querySelectorAll("[value$=r]");
let redBall = document.querySelectorAll("[value$=r]")[0];
// LeftarrowmovingArrow.style.transform = "translate(-50%, -50%) translateX(150px) rotate(90deg)";
let balls = {
  1: ["1", "red", "red"],
  2: ["2", "yellow", "color"],
  3: ["3", "green", "color"],
  4: ["4", "brown", "color"],
  5: ["5", "blue", "color"],
  6: ["6", "pink", "color"],
  7: ["7", "black", "color"],
};
let FirstResultScore = 0;
let SecondResultScore = 0;
let FirstFrameScore = 0;
let SecondFrameScore = 0;
let RedBallLeft = 15;

firstScore.innerHTML = FirstResultScore;
secondScore.innerHTML = SecondResultScore;
redBallLeft.innerHTML = RedBallLeft;

// redBall.addEventListener("click", function () {
//   RedBallLeft -= 1;
//   redBallLeft.innerHTML = RedBallLeft;
// });

for (let i = 0; i < pressed.length; i++) {
  pressed[i].addEventListener("click", function () {
    if (secondScore.hasAttribute("class")) {
      FirstResultScore += Number(balls[pressed[i].getAttribute("value").slice(0, 1)][0]);
      firstScore.innerHTML = FirstResultScore;

      if (pressed[i].getAttribute("value").slice(1, 2) === "c") {
        if (RedBallLeft == 0) {
        } else {
          HideColorBalls();
        }
      } else if (pressed[i].getAttribute("value").slice(1, 2) === "r") {
        HideRedBalls();
        RedBallLeft -= 1;
        redBallLeft.innerHTML = RedBallLeft;
      }
      //
      else {
        if (pressed[i].getAttribute("value").slice(1, 2) === "c") {
          if (RedBallLeft == 0) {
          } else {
            HideColorBalls();
          }
        } else if (pressed[i].getAttribute("value").slice(1, 2) === "r") {
          HideRedBalls();
          RedBallLeft -= 1;
          redBallLeft.innerHTML = RedBallLeft;
        } //-disable balltypesddd
      }
    }

    if (firstScore.hasAttribute("class")) {
      SecondResultScore += Number(balls[pressed[i].getAttribute("value").slice(0, 1)][0]);
      secondScore.innerHTML = SecondResultScore;

      if (pressed[i].getAttribute("value").slice(1, 2) === "c") {
        if (RedBallLeft == 0) {
        } else {
          HideColorBalls();
        }
      } //თუ ფერი ჩააგდო
      else if (pressed[i].getAttribute("value").slice(1, 2) === "r") {
        HideRedBalls();
        RedBallLeft -= 1;
        redBallLeft.innerHTML = RedBallLeft;
      } //თუ წითელი ჩააგდო
    }
  });
}

toggleBreakButton.addEventListener("click", function () {
  if (RedBallLeft == 0) {
    if (secondScore.hasAttribute("class")) {
      secondScore.removeAttribute("class");
      firstScore.setAttribute("class", "disabled");
    } else {
      firstScore.removeAttribute("class");
      secondScore.setAttribute("class", "disabled");
    }
  } else {
    if (secondScore.hasAttribute("class")) {
      rightArrow.removeAttribute("style");
      leftArrow.setAttribute("style", "height: 0");
      secondScore.removeAttribute("class");
      firstScore.setAttribute("class", "disabled");
    } else {
      firstScore.removeAttribute("class");
      secondScore.setAttribute("class", "disabled");
      leftArrow.removeAttribute("style");
      rightArrow.setAttribute("style", "height: 0");
    }
    HideColorBalls();
  }
});

firstAggScore.innerHTML = FirstFrameScore;
secondAggScore.innerHTML = SecondFrameScore;

endFrameButton.addEventListener("click", function () {
  if (FirstResultScore > SecondResultScore) {
    FirstFrameScore++;
    firstAggScore.innerHTML = FirstFrameScore;
    FirstResultScore = 0;
    SecondResultScore = 0;
    firstScore.innerHTML = 0;
    secondScore.innerHTML = 0;
    RedBallLeft = 15;
    redBallLeft.innerHTML = RedBallLeft;
    HideColorBalls();
  } else if (FirstResultScore < SecondResultScore) {
    SecondFrameScore++;
    secondAggScore.innerHTML = SecondFrameScore;
    FirstResultScore = 0;
    SecondResultScore = 0;
    firstScore.innerHTML = 0;
    secondScore.innerHTML = 0;
    RedBallLeft = 15;
    redBallLeft.innerHTML = RedBallLeft;
    HideColorBalls();
  }
});
