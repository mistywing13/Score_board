let homeScoreC = document.getElementById("homeScore")

homeScoreC.textContent = 0
let currentHomeScore = Number(homeScoreC.textContent)
  
function addOneH() {
 currentHomeScore += 1
 homeScoreC.textContent = currentHomeScore
}

function addTwoH() {
 currentHomeScore += 2
 homeScoreC.textContent = currentHomeScore
}

function addThreeH() {
 currentHomeScore += 3
 homeScoreC.textContent = currentHomeScore
}


let awayScoreC = document.getElementById("awayScore")

awayScoreC.textContent = 0
let currentAwayScore = Number(homeScoreC.textContent)
  
function addOneA() {
 currentAwayScore += 1
 awayScoreC.textContent = currentAwayScore
}

function addTwoA() {
 currentAwayScore += 2
 awayScoreC.textContent = currentAwayScore
}

function addThreeA() {
 currentAwayScore += 3
 awayScoreC.textContent = currentAwayScore
}

