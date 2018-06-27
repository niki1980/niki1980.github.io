//connection to the api//
let weatherRequest = new XMLHttpRequest();
let apiURL ='https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=3cfc97710fcfbb735d8c11bee688c482';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
     document.getElementById('weather-desc').innerHTML = weatherData.weather[0].description;
     document.getElementById('wind-speed').innerHTML = weatherData.wind.speed;
     document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weathericon').src = imagesrc;

}

let springRequest = new XMLHttpRequest();
let townURL ='https://api.openweathermap.org/data/2.5/weather?&id=4250542&units=imperial&APPID=3cfc97710fcfbb735d8c11bee688c482';
springRequest.open('GET', townURL, true);
springRequest.send();

springRequest.onload = function () {
    let weatherData = JSON.parse(springRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
     document.getElementById('weather-desc').innerHTML = weatherData.weather[0].description;
     document.getElementById('wind-speed').innerHTML = weatherData.wind.speed;
     document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weathericon').src = imagesrc;

}
let greenRequest = new XMLHttpRequest();
let greenURL ='https://api.openweathermap.org/data/2.5/weather?&id=2580543&units=imperial&APPID=3cfc97710fcfbb735d8c11bee688c482';
greenRequest.open('GET', greenURL, true);
greenRequest.send();

greenRequest.onload = function () {
    let weatherData = JSON.parse(greenRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
     document.getElementById('weather-desc').innerHTML = weatherData.weather[0].description;
     document.getElementById('wind-speed').innerHTML = weatherData.wind.speed;
     document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weathericon').src = imagesrc;

}