import { APIKEY } from "./environment.js";
let lat = "48.1486";
let lon = '17.1077';
let location = 'Bratislava, Slovakia';

let stocktonWeather = document.getElementById('stocktonWeather');
let elkgroveWeather = document.getElementById('elkgroveWeather');
let newyorkWeather = document.getElementById('newyorkWeather');
let favoritesList = document.getElementById('favoritesList');
let cityName = document.getElementById('cityName');
let temperature = document.getElementById('temperature');
let currentWeatherIcon = document.getElementById('currentWeatherIcon');
let weatherDescription = document.getElementById('weatherDescription');
let date = document.getElementById('date');
let temperature1 = document.getElementById('temperature1');
let currentWeatherIcon1 = document.getElementById('currentWeatherIcon1');
let weatherDescription1 = document.getElementById('weatherDescription1');
let dayOfWeek1 = document.getElementById('dayOfWeek1');
let temperature2 = document.getElementById('temperature2');
let currentWeatherIcon2 = document.getElementById('currentWeatherIcon2');
let weatherDescription2 = document.getElementById('weatherDescription2');
let dayOfWeek2 = document.getElementById('dayOfWeek2');
let temperature3 = document.getElementById('temperature3');
let currentWeatherIcon3 = document.getElementById('currentWeatherIcon3');
let weatherDescription3 = document.getElementById('weatherDescription3');
let dayOfWeek3 = document.getElementById('dayOfWeek3');
let temperature4 = document.getElementById('temperature4');
let currentWeatherIcon4 = document.getElementById('currentWeatherIcon4');
let weatherDescription4 = document.getElementById('weatherDescription4');
let dayOfWeek4 = document.getElementById('dayOfWeek4');
let temperature5 = document.getElementById('temperature5');
let currentWeatherIcon5 = document.getElementById('currentWeatherIcon5');
let weatherDescription5 = document.getElementById('weatherDescription5');
let dayOfWeek5 = document.getElementById('dayOfWeek5');
let maxTemp = document.getElementById('maxTemp');
let minTemp = document.getElementById('minTemp');


// function myAPICall() {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
// }

async function myAPICall() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`);
    const data = await promise.json();
    console.log(data);
}

// myAPICall();

// function fiveDayWeatherAPI() {
//     fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
// }

async function fiveDayWeatherAPI() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
    const data = await promise.json();
    console.log(data);
}

// fiveDayWeatherAPI();

// function geocodingAPI() {
//     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIkey}`)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
// }

async function geocodingAPI() {
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIKEY}`);
    const data = await promise.json();
    console.log(data);
}

// geocodingAPI();


let dayNightButton = document.getElementById('dayNightButton');

dayNightButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-bg');
})

let addToFavorites = document.getElementById('addToFavorites');

addToFavorites.addEventListener('click', ()=> {
    let h1tag = document.createElement('h1');
    h1tag.innerText = " ";
    favoritesList.appendChild(h1tag);
})

let searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', () => {

// })