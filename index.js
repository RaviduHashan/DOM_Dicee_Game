var randomNumber1 = Math.round(Math.random()*5 + 1)
var randomNumber2 = Math.round(Math.random()*5 + 1)

document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`)
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`)

if  (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = `🚩Player 1 Win`
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = `Player 2 Win🚩`
    
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
    document.querySelector("p").innerHTML = `congrtulations`
});