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
    let weatherData1 = JSON.parse(springRequest.responseText);
    console.log(weatherData1);
    document.getElementById('current-temp1').innerHTML = weatherData1.main.temp;
     document.getElementById('weather-desc1').innerHTML = weatherData1.weather[0].description;
     document.getElementById('wind-speed1').innerHTML = weatherData1.wind.speed;
     document.getElementById('humidity1').innerHTML = weatherData1.main.humidity;
    let imagesrc1 = 'http://openweathermap.org/img/w/' + weatherData1.weather[0].icon + '.png';
    document.getElementById('weathericon1').src = imagesrc1;

}
let greenRequest = new XMLHttpRequest();
let greenURL ='https://api.openweathermap.org/data/2.5/weather?&id=4580549&units=imperial&APPID=3cfc97710fcfbb735d8c11bee688c482';
greenRequest.open('GET', greenURL, true);
greenRequest.send();

greenRequest.onload = function () {
    let weatherData2 = JSON.parse(greenRequest.responseText);
    console.log(weatherData2);
    document.getElementById('current-temp2').innerHTML = weatherData2.main.temp;
     document.getElementById('weather-desc2').innerHTML = weatherData2.weather[0].description;
     document.getElementById('wind-speed2').innerHTML = weatherData2.wind.speed;
     document.getElementById('humidity2').innerHTML = weatherData2.main.humidity;
    let imagesrc2 = 'http://openweathermap.org/img/w/' + weatherData2.weather[0].icon + '.png';
    document.getElementById('weathericon2').src = imagesrc2;

}