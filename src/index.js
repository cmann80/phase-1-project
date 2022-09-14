
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


// function to query agify.io
function getAge(name) {
    fetch(`https://api.agify.io?name=${name}`)
    // .then (res => res.json())
    // .then (nameEntry => {
    
    // const ageDisplay = nameEntry.age;
    return fetch
     
    } //)
// }

//fetch(`https://api.genderize.io?name=${name}`)

// get user input from left form and call functions 
leftForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const leftName = leftForm.name.value
    const leftAgeValue = setTimeout(getAge(leftName), 500)
    leftAge.textContent = `You are probably around ${leftAgeValue} years old!`

    
})

// get user input from right form and call functions
rightForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const rightName = rightForm.name.value
    const rightAgeValue = setTimeout(getAge(rightName), 500)
    rightAge.textContent = `You are probably around ${rightAgeValue} years old!`

    // getGender(rightName)
    // getNationality(leftName)

})


// dark mode
document.documentElement.setAttribute('data-theme', 'dark');
const themeSwitcher = document.getElementById("theme-switcher");
themeSwitcher.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const switchToTheme = currentTheme === "dark" ? "light" : 'dark'
    document.documentElement.setAttribute('data-theme', switchToTheme);
})



// console.log(getAge(michael))

// function to query genderize.io and display
// function getGender(name){
// todo
// console.log('gender')
// }

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