
//get left form elements
const leftForm = document.getElementById('left_form')
const leftAge = document.getElementById('left_age')
const leftGender = document.getElementById('left_gender')
const leftNationality = document.getElementById('left_nationality')
const leftYear = document.getElementById('left_year')

// get right form elements
const rightForm = document.getElementById('right_form')
<<<<<<< HEAD
//console.log(rightForm)
=======
console.log(rightForm)
>>>>>>> main
const rightAge = document.getElementById('right_age')
const rightGender = document.getElementById('right_gender')
const rightNationality = document.getElementById('right_nationality')
const rightYear = document.getElementById('right_year')

// get country codes.names
const regionNames = new Intl.DisplayNames(
    ['en'], {type: 'region'})

    

// function to query agify.io
function getAge(name) {
    return fetch(`https://api.agify.io?name=${name}`)
    .then (res => res.json())
}

// function to query genderize.io
function getGender(name) {
    return fetch(`https://api.genderize.io?name=${name}`)
    .then (res => res.json())
}

// function to query nationize.io
function getNationality(name) {
    return fetch(`https://api.nationalize.io?name=${name}`)
    .then (res => res.json())
}

// get user input from left form and call functions 
leftForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    // get age for left form
    getAge(leftForm.name.value)
    .then((data) => {
<<<<<<< HEAD
        leftAge.textContent = `${leftForm.name.value} may be around ${data.age} years old!` 
        })
        .then ((data)=>{
            leftYear.textContent = `${2022 - data.age}`
    
        })
    
=======
        leftAge.textContent = `${leftForm.name.value} may be around ${data.age} years old!`
    })
>>>>>>> main
    
    // get gender for left form
    getGender(leftForm.name.value)
    .then((data) => {
        leftGender.textContent = `${leftForm.name.value} may be ${data.gender}!`
    })
     
    // get top nationality for left form
    getNationality(leftForm.name.value)
    .then((data) => {
<<<<<<< HEAD
        leftNationality.textContent = `${leftForm.name.value} may be from ${regionNames.of(data.country[0].country_id)}! `
=======
        leftNationality.textContent = `${leftForm.name.value} may be from ${regionNames.of(data.country[0].country_id)}, `
>>>>>>> main
    })

})

// get user input from right form and call functions
rightForm.addEventListener('submit', (event) => {
    event.preventDefault()
  
    // get age for right name form
    getAge(rightForm.name.value)
    .then((data) => {
        rightAge.textContent = `${rightForm.name.value} may be around ${data.age} years old!`
     //   
    })
  
    // get gender for right name form
    getGender(rightForm.name.value)
    .then((data) => {
        rightGender.textContent = `${rightForm.name.value} may be ${data.gender}!`
        
    })
    
    // get top nationality for right form
    getNationality(rightForm.name.value)
    .then((data) => {
        rightNationality.textContent = `${rightForm.name.value} may be from ${regionNames.of(data.country[0].country_id)}!`
    })

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