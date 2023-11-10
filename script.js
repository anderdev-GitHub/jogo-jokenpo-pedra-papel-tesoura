let contPlayer = 0
let contCpu = 0

const narutoTheme = document.getElementById("naruto-theme");
const volumeButton = document.getElementById("volume-button");

volumeButton.addEventListener("click", () => {
  narutoTheme.muted = !narutoTheme.muted;
  updateVolumeIcon();
});

const updateVolumeIcon = () => {
  if (narutoTheme.muted) {
    volumeButton.innerText = "🔇";
  } else if (narutoTheme.volume > 0.6) {
    volumeButton.innerText = "🔊";
  } 
}

updateVolumeIcon();

const imgPlayer = document.getElementById("player")
const imgCpu = document.getElementById("cpu")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

const audioWin = new Audio("assets/sounds/sfx-winning.wav")
const audioLose = new Audio("assets/sounds/sfx-losing.wav")
audioWin.volume = 0.3;
audioLose.volume = 0.3;

const audioScreenWin = new Audio("assets/sounds/sfx-screen-winning.wav")
const audioScreenLose = new Audio("assets/sounds/sfx-screen-losing.wav")
audioScreenWin.volume = 0.3;
audioScreenLose.volume = 0.3;

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

const analyze = () => {

    playing.desabled = true

    let win = "0"

    if (player1 == player2) {

    } else if (player1 == "rock") {
        win = player2 == 'scissor' ? 1 : -1
    } else if (player1 == 'paper') {
        win = player2 == 'rock' ? 1 : -1
    } else if (player1 == 'scissor') {
        win = player2 == 'paper' ? 1 : -1
    }

    if (win == 0) {

    } else if (win > 0){
        contPlayer = contPlayer + 1
        audioWin.play()
    } else {
        contCpu = contCpu + 1
        audioLose.play()
    }

    contador.innerHTML = contPlayer + ":" + contCpu

    if (contPlayer >= 5) {
        winner.classList.remove('none')
        winner.classList.add('center')
        audioScreenWin.play()
    }

    if (contCpu >= 5) {
        loser.classList.remove('none')
        loser.classList.add('center')
        audioScreenLose.play()
    }

    setTimeout( () => {
        playing.Disabled = false
        clear();
    }, 2000)
}

    const clear = () => {
        imgCpu.innerHTML = ""
        imgPlayer.innerHTML = ""
    }

    const newGame = () => {
        contador.innerHTML = "0.0"
        contCpu = 0
        contPlayer = 0
        reset()
        winner.classList.add('none')
        winner.classList.remove('center')
        loser.classList.add('none')
        loser.classList.remove('center')
    }
