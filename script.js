

let countEl = document.getElementById("count-el") // pass in arguments
let count = 0 

function increment() {
    count += 1
    countEl.textContent = count 
}

function save() {
    console.log(count)
}


let saveEl = document.getElementById("save-el")

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}