//get left form elements
const leftForm = document.getElementById('left_form')
const leftAge = document.getElementById('left_age')
const leftGender = document.getElementById('left_gender')
const leftNationality = document.getElementById('left_nationality')

// get right form elements
const rightForm = document.getElementById('right_form')
const rightAge = document.getElementById('right_age')
const rightGender = document.getElementById('right_gender')
const rightNationality = document.getElementById('right_nationality')

// get user input from left form and call functions 
leftForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const leftName = leftForm.name.value
    getAge(leftName)
    getGender(leftName)
    // getNationality(leftName)
})

// get user input from right form and call functions
rightForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const rightName = rightForm.name.value
    getAge(rightName)
    getGender(rightName)
    // getNationality(leftName)
})




// function to query agify.io
function getAge(name) {
    
    console.log('age')
}


// function to query genderize.io and display
function getGender(name){
// todo
console.log('gender')
}

// // function to query nationalize.io and display (stretch goal)
// function getNationality(name){
// console.log('gender')
// }




// display data
// interpolate results to:
// "you are most likely to be x years old!"
// "you are most likely to be x!" (gender)
// "you are most likely to be from x!" (country)



// light/dark mode switch