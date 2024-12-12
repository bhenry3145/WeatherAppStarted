import { APIKEY } from "./environment.js";

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

async function fiveDayWeatherAPI(lat, lon) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
    const dataFive = await promise.json();
    console.log(dataFive);
    return dataFive;
}

// fiveDayWeatherAPI();

async function geocodingAPI(location) {
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

searchInput.addEventListener('keydown', async function(event) {
    if (event.key == "Enter")
    {
        let location = searchInput.value;
        let geoData = await geocodingAPI(location);
        console.log(geoData);
        const dataFive = await fiveDayWeatherAPI(geoData[0].lat, geoData[0].lon);
        console.log(dataFive);
        searchFunc(dataFive);
    }
})

function searchFunc(dataFive) {
    console.log(dataFive);
    let ms = dataFive.dt * 1000;
    let newDate = new Date(ms);
    let month = newDate.getMonth();
    let monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let year = newDate.getFullYear()
    let dayOfMonth = newDate.getDate();
    temperature.innerText = `${(dataFive.list[0].main.temp + dataFive.list[1].main.temp + dataFive.list[2].main.temp + dataFive.list[3].main.temp + dataFive.list[4].main.temp + dataFive.list[5].main.temp + dataFive.list[6].main.temp + dataFive.list[7].main.temp) / 8}°F`;
    maxTemp.innerText = `Max: ${(dataFive.list[0].main.temp_max + dataFive.list[1].main.temp_max + dataFive.list[2].main.temp_max + dataFive.list[3].main.temp_max + dataFive.list[4].main.temp_max + dataFive.list[5].main.temp_max + dataFive.list[6].main.temp_max + dataFive.list[7].main.temp_max) / 8}°F`;
    minTemp.innerText =`Min: ${(dataFive.list[0].main.temp_min + dataFive.list[1].main.temp_min + dataFive.list[2].main.temp_min + dataFive.list[3].main.temp_min + dataFive.list[4].main.temp_min + dataFive.list[5].main.temp_min + dataFive.list[6].main.temp_min + dataFive.list[7].main.temp_min) / 8}°F`;
    // currentWeatherIcon.src = `http://openweathermap.org/img/wn/${dataFive.weather[0].icon}@2x.png`;
    // weatherDescription.innerText = `${dataMy.weather[0].description}`;
    // cityName.innerText = `${dataMy.name}`;
    date.innerText = `${monthArr[month]}/${dayOfMonth}/${year}`

    temperature1.innerText = `${(dataFive.list[8].main.temp + dataFive.list[9].main.temp + dataFive.list[10].main.temp + dataFive.list[11].main.temp + dataFive.list[12].main.temp + dataFive.list[13].main.temp + dataFive.list[14].main.temp + dataFive.list[15].main.temp) / 8}°F`;

    temperature2.innerText = `${(dataFive.list[16].main.temp + dataFive.list[17].main.temp + dataFive.list[18].main.temp + dataFive.list[19].main.temp + dataFive.list[20].main.temp + dataFive.list[21].main.temp + dataFive.list[22].main.temp + dataFive.list[23].main.temp) / 8}°F`;

    temperature3.innerText = `${(dataFive.list[24].main.temp + dataFive.list[25].main.temp + dataFive.list[26].main.temp + dataFive.list[27].main.temp + dataFive.list[28].main.temp + dataFive.list[29].main.temp + dataFive.list[30].main.temp + dataFive.list[31].main.temp) / 8}°F`;

    temperature4.innerText = `${(dataFive.list[32].main.temp + dataFive.list[33].main.temp + dataFive.list[34].main.temp + dataFive.list[35].main.temp + dataFive.list[36].main.temp + dataFive.list[37].main.temp + dataFive.list[38].main.temp + dataFive.list[39].main.temp) / 8}°F`;

}

// stocktonWeather.addEventListener('click', function() {
//     stocktonWeatherFunc();
// })

