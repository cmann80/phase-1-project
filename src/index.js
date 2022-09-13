//get form elements
const leftForm = document.getElementById('left_form')
const rightForm = document.getElementById('right_form')



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
    // todo
    console.log('age')
}


// function to query genderize.io 
function getGender(name){
// todo
console.log('gender')
}

function getNationality(name){
console.log('gender')
}

// function to query nationalize.io


// display data
// interpolate results to:
// "you are most likely to be x years old!"
// "you are most likely to be x!" (gender)
// "you are most likely to be from x!" (country)



// light/dark mode switch