let randomnumber1 = Math.floor(Math.random() * 6 + 1)
let randomnumber2 = Math.floor(Math.random() * 6 + 1)

document.querySelector(".img1").setAttribute("src", 'images/dice' + randomnumber1 + ".png")

document.querySelector(".img2").setAttribute("src", 'images/dice' + randomnumber2 + ".png")

if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 won";
}

else if (randomnumber1 > randomnumber2) {

    document.querySelector("h1").innerHTML = "Player 1 won";
}
else {
    document.querySelector("h1").innerHTML = "It is a tie";
}


document.querySelector(".BUTTON") .addEventListener("click", ()=>{
    let randomnumber1 = Math.floor(Math.random() * 6 + 1)
let randomnumber2 = Math.floor(Math.random() * 6 + 1)

document.querySelector(".img1").setAttribute("src", 'images/dice' + randomnumber1 + ".png")

document.querySelector(".img2").setAttribute("src", 'images/dice' + randomnumber2 + ".png")

if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 won";
}

else if (randomnumber1 > randomnumber2) {

    document.querySelector("h1").innerHTML = "Player 1 won";
}
else {
    document.querySelector("h1").innerHTML = "It is a tie";
}

})

// alert("huu")
