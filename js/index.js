// on change we want to change (based on if checked or not)
// 1. the background color -bg
// 2. the intro bg pattern -bgpattern
// 3. the action and card bg-color and hover color - 
// 4. the intro title color -text
// 5. the overview color -text
// 6. the amt colors -text
// 7. the card name color
let bg = document.body
let bgPattern = document.querySelector(".intro")
let action = document.querySelectorAll(".action")
let card = document.querySelectorAll(".card")
let title = document.querySelector(".intro__head")
let subTitle = document.querySelector(".overview")
let cardAmt = document.querySelectorAll(".card__amount")
let actionAmt = document.querySelectorAll(".action_amt")
let cardName = document.querySelectorAll(".card__username")
let actionName = document.querySelectorAll(".action__name")

let mode = false
const darkMode = {
    bg: "hsl(230, 17%, 14%)",
    bgPattern: "hsl(232, 19%, 15%)",
    text: "hsl(0, 0%, 100%)",
    altText: "--desaturated-blue-text",
    cardBg: "hsl(228, 28%, 20%)",
}
const lightMode = {
    bg: "hsl(0, 0%, 100%)",
    bgPattern: "hsl(225, 100%, 98%)",
    text: "hsl(230, 17%, 14%)",
    altText: "black",
    cardBg: "hsl(227, 47%, 96%)",
}

const changeMode = (event) =>{
    mode = event.target.checked
}