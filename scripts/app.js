import { APIKEY } from "./environment.js";
let lat = "48.1486";
let lon = '17.1077';
let location = 'Bratislava, Slovakia';

let searchInput = document.getElementById('searchInput');
let stocktonWeather = document.getElementById('stocktonWeather');
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

async function myAPICall() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`);
    const dataMy = await promise.json();
    return dataMy;
}

// myAPICall();

async function fiveDayWeatherAPI() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
    const dataFive = await promise.json();
    console.log(dataFive);
    return dataFive;
}

// fiveDayWeatherAPI();

async function geocodingAPI() {
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIKEY}`);
    const dataGeo = await promise.json();
    console.log(dataGeo);
    return dataGeo;
}

// geocodingAPI();


let dayNightButton = document.getElementById('dayNightButton');

dayNightButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-bg');
})

let addToFavorites = document.getElementById('addToFavorites');

addToFavorites.addEventListener('click', () => {
    let h1tag = document.createElement('h1');
    h1tag.innerText = " ";
    favoritesList.appendChild(h1tag);
})

async function stocktonWeatherFunc() {
    let dataMy = await myAPICall();
    let ms = dataMy.dt * 1000;
    let newDate = new Date(ms);
    let month = newDate.getMonth();
    let monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let year = newDate.getFullYear()
    let dayOfMonth = newDate.getDate();
    const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(0);
    let temp = kelvinToFahrenheit(dataMy.main.temp);
    let tempMax = kelvinToFahrenheit(dataMy.main.temp_max);
    let tempMin = kelvinToFahrenheit(dataMy.main.temp_min);
    temperature.innerText = `${temp}°F`;
    maxTemp.innerText = `Max: ${tempMax}°F`;
    minTemp.innerText = `Min: ${tempMin}°F`;
    currentWeatherIcon.src = `http://openweathermap.org/img/wn/${dataMy.weather[0].icon}@2x.png`;
    weatherDescription.innerText = `${dataMy.weather[0].description}`;
    cityName.innerText = `${dataMy.name}`;
    date.innerText = `${monthArr[month]}/${dayOfMonth}/${year}`
}

searchInput.addEventListener('keypress', function(event) {
    if (event.key == "Enter")
    {
        let location = searchInput.value;
        console.log(`Location set to: ${location}`);
        console.log(lat);
        console.log(lon);
        fiveDayWeatherAPI();
        let temp = (dataFive.list[0].main.temp + dataFive.list[1].main.temp + dataFive.list[2].main.temp + dataFive.list[3].main.temp + dataFive.list[4].main.temp + dataFive.list[5].main.temp + dataFive.list[6].main.temp + dataFive.list[7].main.temp) / 8;
        let maxTemp = (dataFive.list[0].main.temp_max + dataFive.list[1].main.temp_max + dataFive.list[2].main.temp_max + dataFive.list[3].main.temp_max + dataFive.list[4].main.temp_max + dataFive.list[5].main.temp_max + dataFive.list[6].main.temp_max + dataFive.list[7].main.temp_max) / 8;
        let minTemp = (dataFive.list[0].main.temp_min + dataFive.list[1].main.temp_min + dataFive.list[2].main.temp_min + dataFive.list[3].main.temp_min + dataFive.list[4].main.temp_min + dataFive.list[5].main.temp_min + dataFive.list[6].main.temp_min + dataFive.list[7].main.temp_min) / 8;
    }
})

async function searchFunc() {
    let dataGeo = await geocodingAPI();
    let lat = dataGeo[0].lat;
    let lon = dataGeo[0].lon;
    let ms = dataGeo.dt * 1000;
    let newDate = new Date(ms);
    let month = newDate.getMonth();
    let monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let year = newDate.getFullYear()
    let dayOfMonth = newDate.getDate();
    const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(0);
    let temp = kelvinToFahrenheit(dataGeo.main.temp);
    let tempMax = kelvinToFahrenheit(dataGeo.main.temp_max);
    let tempMin = kelvinToFahrenheit(dataGeo.main.temp_min);
    temperature.innerText = `${temp}°F`;
    maxTemp.innerText = `Max: ${tempMax}°F`;
    minTemp.innerText = `Min: ${tempMin}°F`;
}

// stocktonWeather.addEventListener('click', function() {
//     stocktonWeatherFunc();
// })

