//get left form elements
const leftForm = document.getElementById('left_form')
const leftAge = document.getElementById('left_age')
const leftGender = document.getElementById('left_gender')
const leftNationality = document.getElementById('left_nationality')
const leftNationalityList = document.getElementById('left_nationality_list')
const leftYear = document.getElementById('left_year')

// get right form elements
const rightForm = document.getElementById('right_form')
//console.log(rightForm)
const rightAge = document.getElementById('right_age')
const rightGender = document.getElementById('right_gender')
const rightNationality = document.getElementById('right_nationality')
const rightNationalityList = document.getElementById('right_nationality_list')
const rightYear = document.getElementById('right_year')

//get todays date and gets the year
const today = new Date();
const year = today.getFullYear();
//console.log(today)
//console.log(year)

// get country codes.names
const regionNames = new Intl.DisplayNames(
    ['en'], {type: 'region'})

// function to query agify.io for age
function getAge(name) {
    return fetch(`https://api.agify.io?name=${name}`)
    .then (res => res.json())
}

// function to query agigy.io for birth year
function getYear(name) {
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
        leftAge.textContent = `${leftForm.name.value} may be around ${data.age} years old!` 
    })

    
    // get the birth year for the left name form
    // uses the current year so it'll always be correct
    getYear(leftForm.name.value)
    .then ((data)=>{
    leftYear.textContent = `${leftForm.name.value} may have been born in ${year - data.age}!`
    })


    // get gender for left form
    getGender(leftForm.name.value)
    .then((data) => {
        leftGender.textContent = `${leftForm.name.value} may be ${data.gender}!`
    })
     
    // get top nationality for left form
    getNationality(leftForm.name.value)
    .then((data) => {

        leftNationality.textContent = `${leftForm.name.value} may be from one of the following countries:`
        leftNationalityList.innerHTML = ''
        data.country.forEach(country => {
            const listItem = document.createElement('li')
            listItem.textContent = regionNames.of(country.country_id)
            leftNationalityList.append(listItem)
            
        })
    
    })
    
    
})

// get user input from right form and call functions
rightForm.addEventListener('submit', (event) => {
    event.preventDefault()
  
    // get age for right name form
    getAge(rightForm.name.value)
    .then((data) => {
        rightAge.textContent = `${rightForm.name.value} may be around ${data.age} years old!`
    })

    // get the birth year for the right name form
    // uses the current year so it'll always be correct
    getYear(rightForm.name.value)
    .then ((data)=>{
    rightYear.textContent = `${rightForm.name.value} may have been born in ${year - data.age}!`
    })

    // get gender for right name form
    getGender(rightForm.name.value)
    .then((data) => {
        rightGender.textContent = `${rightForm.name.value} may be ${data.gender}!`
        
    })
    
    // get top nationality for right form
    getNationality(rightForm.name.value)
    .then((data) => {
        rightNationality.textContent = `${rightForm.name.value} may be from one of the following countries:`
        rightNationalityList.innerHTML = ''
        data.country.forEach(country => {
            const listItem = document.createElement('li')
            listItem.textContent = regionNames.of(country.country_id)
            rightNationalityList.append(listItem)
            console.log(country)
            
        })
        
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