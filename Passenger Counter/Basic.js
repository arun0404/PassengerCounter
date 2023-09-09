//1. operations
let count = 50
count = count + 50
console.log(count)

count = count - 75
console.log(count)

count = count + 45
console.log(count)

//2. function
function countdown(){
    console.log(42)
    console.log(43)
    console.log(44)
    console.log(45)
    console.log(46)
    console.log(47)
}

countdown()

//4. practice
// Create a function that logs out the sum of all the lap times

let lap1 = 34
let lap2 = 33
let lap3 = 36

function raceTime(){
    let count = lap1 + lap2 + lap3
    console.log(count)
}
raceTime()
// Another method
console.log(lap1+lap2+lap3)

//5. Write a function that increments

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function increment(){
    lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)
}

increment()
increment()
increment()

// 6. DOM - Documnet Object Model (aka how to javascript to modify a website)

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// 7. For loop
for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}


// 8. Math.random()
let randomNumber = Math.random()
console.log(randomNumber)