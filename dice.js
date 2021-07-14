const dice = document.getElementById("dice");
const block = document.getElementById("block");
const numb = document.getElementById("number");
numb.style.display = "none";

dice.addEventListener("click", function () {
    dice.style.display = "none";
    numb.style.display = "block";
    let numbr = Math.floor(Math.random() * 6 + 1);
    console.log(numbr);

    numb.textContent = `You've got a ${numbr}`;
});

const newBtn = document.getElementById("new-btn");
newBtn.addEventListener("click", function () {
    dice.style.display = "block";
    numb.style.display = "none";
});