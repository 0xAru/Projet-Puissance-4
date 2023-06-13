function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let grid = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
];
let gameOver = false;
let soloGame = false;
let playerOne = "red";
let playerTwo = "yellow";
let scoreOne = 0;
let scoreTwo = 0;
let turn = 1;
let container = document.querySelectorAll(".cel");

function chooseMode() {
    soloGame = !soloGame;
    scoreOne = 0;
    scoreTwo =0;
    document.querySelector("#scoreOne").innerHTML = 0;
    document.querySelector("#scoreTwo").innerHTML = 0;
    restart();
    if (soloGame) {
        document.querySelector("#soloGame").querySelector("button").innerHTML = "Mode 2 joueurs"; 
    }else{
        document.querySelector("#soloGame").querySelector("button").innerHTML = "Mode Solo"; 
    }
}

function againstCPU() {
    let randomIndex = random(0, 6);
    for (let i = randomIndex; i < container.length; i = i + 7) {
        if (document.querySelectorAll(".cel")[i + 7] && document.querySelectorAll(".cel")[i + 7].innerHTML == "") {
            continue
        } else {
            document.querySelectorAll(".cel")[i].style.backgroundColor = playerTwo
            document.querySelectorAll(".cel")[i].innerHTML = playerTwo
            break
        }
    }
    updateGrid()
}

function play(elem) {
    if (gameOver == false && elem.innerHTML == "") {
        let elemId = elem.id
        let index = parseInt(elemId.split("-")[1])
        for (let i = index; i < container.length; i = i + 7) {
            if (turn % 2 != 0) {
                //joueur 1
                if (document.querySelectorAll(".cel")[i + 7] && document.querySelectorAll(".cel")[i + 7].innerHTML == "") {
                    continue
                } else {
                    document.querySelectorAll(".cel")[i].style.backgroundColor = playerOne
                    document.querySelectorAll(".cel")[i].innerHTML = playerOne
                    break
                }
            } else {
                //joueur 2
                if (document.querySelectorAll(".cel")[i + 7] && document.querySelectorAll(".cel")[i + 7].innerHTML == "") {
                    continue
                } else {
                    document.querySelectorAll(".cel")[i].style.backgroundColor = playerTwo
                    document.querySelectorAll(".cel")[i].innerHTML = playerTwo
                    break
                }
            }
        }
        updateGrid()
        if (turn % 2 == 0 && soloGame == true && gameOver == false) {
            againstCPU()
        }
    }
}

function updateGrid() {
    let index = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] = document.querySelectorAll(".cel")[index].innerHTML
            index++
        }
    }
    turn++
    result(grid)
}

function result(grid) {
    let winner = "";
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i] && grid[i][j] != "" && grid[i][j] == grid[i][j + 1] && grid[i][j + 1] == grid[i][j + 2] && grid[i][j + 2] == grid[i][j + 3]) {
                winner = grid[i][j]
                document.querySelector("#score").innerHTML = grid[i][j] + " a gagné ! Jeu terminé"
                document.querySelector("#restart").classList.remove("d-none")
                gameOver = true
            }
            if (grid[i + 3] && grid[i][j] != "" && grid[i][j] == grid[i + 1][j] && grid[i + 1][j] == grid[i + 2][j] && grid[i + 2][j] == grid[i + 3][j]) {
                winner = grid[i][j]
                document.querySelector("#score").innerHTML = grid[i][j] + " a gagné ! Jeu terminé"
                document.querySelector("#restart").classList.remove("d-none")
                gameOver = true
            }
            if (grid[i + 3] && grid[i][j] != "" && grid[i][j] == grid[i + 1][j + 1] && grid[i + 1][j + 1] == grid[i + 2][j + 2] && grid[i + 2][j + 2] == grid[i + 3][j + 3]) {
                winner = grid[i][j]
                document.querySelector("#score").innerHTML = grid[i][j] + " a gagné ! Jeu terminé"
                document.querySelector("#restart").classList.remove("d-none")
                gameOver = true
            }
            if (grid[i - 3] && grid[i][j] != "" && grid[i][j] == grid[i - 1][j + 1] && grid[i - 1][j + 1] == grid[i - 2][j + 2] && grid[i - 2][j + 2] == grid[i - 3][j + 3]) {
                winner = grid[i][j]
                document.querySelector("#score").innerHTML = grid[i][j] + " a gagné ! Jeu terminé"
                document.querySelector("#restart").classList.remove("d-none")
                gameOver = true
            }
        }
    }
    score(winner)
}

function restart() {
    gameOver = false;
    turn = 1;
    document.querySelector("#score").innerHTML = "";
    document.querySelector("#restart").classList.add("d-none");
    document.querySelectorAll(".cel").forEach((elem) => {
        elem.innerHTML = "";
        elem.style.backgroundColor = "white"
    })
}

function score(winner) {
    if (winner == playerOne) {
        scoreOne++
        document.querySelector("#scoreOne").innerHTML = scoreOne;
    } else if (winner == playerTwo) {
        scoreTwo++
        document.querySelector("#scoreTwo").innerHTML = scoreTwo;
    }
}

particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#00aeff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 100, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 0,
      color: "#ffffff",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 5 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: false
});
