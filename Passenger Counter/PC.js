// document.getElementById("count-el").innerText = 5

// let count = 50
// count = count + 50
// console.log(count)

// count = count - 75
// console.log(count)

// count = count + 45
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEL)

let count = 0

function increment() {
    //console.log("The button was clicked")
    count += 1  //count = count + 1
    countEL.innerText = count
    // console.log(count)
}

function save(){
    let entries = count + " - "
    saveEl.innerText += entries
    console.log(count)
}
