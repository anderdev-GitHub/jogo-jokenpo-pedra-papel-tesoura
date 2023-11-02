let contPlayer = 0
let contCpu = 0

const imgPlayer = document.getElementById("player")
const imgCpu = document.getElementById("cpu")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

const audioWin = new Audio("assets/sounds/winning.wav")
const audioLose = new Audio("assets/sounds/losing.wav")

let player1 = ""
let player2 = ""

playing.addEventListener("click", () => {
    reset()
    playCPU()
})

const reset = () => {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgPlayer.innerHTML = "<img src='assets/images/" + player1 + ".png'>"
    imgCpu.innerHTML = ""
}

const playCPU = () => {
    let opt = ['rock', 'paper', 'scissor']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    imgCpu.innerHTML = "<img src='assets/images/" + player2 + ".png'>"
    analyze()
}