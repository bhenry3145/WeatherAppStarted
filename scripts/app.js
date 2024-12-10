import { APIKEY } from "./environment.js";
let lat = "48.1486";
let lon = '17.1077';
let location = 'Bratislava, Slovakia';

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

let searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', () => {

// })