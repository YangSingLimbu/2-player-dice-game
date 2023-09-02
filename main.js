let value1 = Math.floor((Math.random() * 6) + 1);            
let value2 = Math.floor((Math.random() * 6) + 1);            

if(value1 == 1) {
    document.querySelector(".img1").src = "../images/dice1.png"
} else if (value1 == 2) {
    document.qu
}

for(let i = 1; i <= 6; i++) {
    if(value1 == i) {
        document.querySelector(".img1").src = `../images/dice${i}.png`
    } 
    if(value2 == i) {
        document.querySelector(".img2").src = `../images/dice${i}.png`
    }

    if(value1 > value2) {
        document.querySelector("h2").innerText = "Player1 win"
    } else if (value1 < value2) {
        document.querySelector("h2").innerText = "Player2 win"
    } else {
        document.querySelector("h2").innerText = "Draw"
    }
}