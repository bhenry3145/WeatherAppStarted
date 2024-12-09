import { APIKEY } from "./environment.js";
let lat = '';
let lon = '';
let APIkey = '';
let location = '';

function myAPICall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

// myAPICall();

function fiveDayWeatherAPI() {
    fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

// fiveDayWeatherAPI();

function geocodingAPI() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIkey}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

// geocodingAPI();