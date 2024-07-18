

let boxes = document.querySelectorAll(".boxes");
let turnX = true;
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let msg = document.querySelector(".msg")
let span = document.querySelector("#result");
let reset = document.getElementById("reset")
let newgame = document.getElementById("newgame");
let clickSound=new Audio("click.wav");


let WinnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach(box => {
    box.addEventListener('click', () => {
        clickSound.play();
        box.innerText = "X";
        if (turnX) {
            box.innerText = "X"
            box.style.color = "rgb(187, 57, 38)"
            turn2.classList.add("b-s");
            turn1.classList.remove("b-s")
            turnX = false;
        } else {
            box.innerText = "O"
            box.style.color = "rgb(18, 97, 194)"
            turn2.classList.remove("b-s");
            turn1.classList.add("b-s")
            turnX = true;
        }
        checkWinner();
    })

})

function checkWinner() {
    for (let condition of WinnerCondition) {
        // console.log(condition)
        // console.log(condition[0])

        let box1 = boxes[condition[0]].innerText;
        let box2 = boxes[condition[1]].innerText;
        let box3 = boxes[condition[2]].innerText;

        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 === box2 && box2 === box3) {
                showResult(box1);
                boxes.forEach(box => {
                    box.classList.add("b-s");
                })
                boxs[condition[0]].classList.remove("b-s")
                boxs[condition[1]].classList.remove("b-s")
                boxs[condition[2]].classList.remove("b-s")
            }
        }


    }
}
function showResult(result) {
    boxes.forEach(box => {
        box.disabled = true;
        box.classList.remove("hover");
    })
    msg.classList.remove("hide")
    span.innerText = result;
    if (result === "X") {
        span.style.color = "rgb(187, 57, 38)";
    } else {
        span.style.color = "rgb(18, 97, 194)";
    }
}

reset.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = ""
        box.disabled = false;
        box.classList.add("hover");
        msg.classList.add("hide");
        box.classList.remove("b-s")
    })
})
newgame.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = ""
        box.disabled = false;
        box.classList.add("hover");
        msg.classList.add("hide")
        box.classList.remove("b-s")
    })
})