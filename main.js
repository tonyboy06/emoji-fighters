let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]


let stageEl = document.getElementById('stage')
let fightButton = document.getElementById('fightButton')

fightButton.addEventListener("click", function() {
    let randomNumberOne = Math.floor(Math.random() * fighters.length)
    let randomNumberTwo = Math.floor(Math.random() * fighters.length)

    stageEl.textContent = `${fighters[randomNumberOne]} vs ${fighters[randomNumberTwo]}`
})